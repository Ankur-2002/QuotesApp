import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useHttp from '../Hooks/use-http';
import { getAllComments } from '../Lib/api';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './Comments.module.css';
import NewCommentForm from './NewCommentForm';
import CommentList from '../comments/CommentsList';
const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const { sendRequest, data, status, error } = useHttp(getAllComments, true);
  const p = useParams();
  // console.log(p);

  useEffect(() => {
    sendRequest(p.quoteId);
  }, []);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  const onAddComments = useCallback(() => {
    sendRequest(p.quoteId);
    return;
  }, [p.quoteId, sendRequest]);
  let comments;
  if (status === 'pending')
    comments = (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  if (status === 'completed' && !error) {
    comments = <CommentList comments={[...data]} />;
  }
  if (status === 'completed' && !error && [...data].length == 0)
    comments = <p className="centered">No Comments Added at this post</p>;
  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>

      {!isAddingComment && (
        <button className="btn" onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && <NewCommentForm onAddComment={onAddComments} />}
      <p>{comments}</p>
    </section>
  );
};
export default Comments;
