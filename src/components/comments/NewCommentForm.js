import { useEffect, useRef } from 'react';
import useHttp from '../Hooks/use-http';
import { addComment } from '../Lib/api';
import { useParams } from 'react-router-dom';
import classes from './NewCommentForm.module.css';

const NewCommentForm = props => {
  const { sendRequest, data, status, error } = useHttp(addComment);
  const commentTextRef = useRef();
  const p = useParams();
  const { onAddComment } = props;
  useEffect(() => {
    if (status === 'completed' && !error) {
      onAddComment();
    }
  }, [data, status, onAddComment]);
  const submitFormHandler = event => {
    event.preventDefault();
    sendRequest({
      quoteId: p.quoteId,
      commentData: commentTextRef.current.value,
    });
    commentTextRef.current.value = '';
    // optional: Could validate here

    // send comment to server
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <div className={classes.control} onSubmit={submitFormHandler}>
        <label htmlFor="comment">Your Comment</label>
        <textarea id="comment" rows="5" ref={commentTextRef}></textarea>
      </div>
      <div className={classes.actions}>
        <button className="btn">Add Comment</button>
      </div>
    </form>
  );
};

export default NewCommentForm;
