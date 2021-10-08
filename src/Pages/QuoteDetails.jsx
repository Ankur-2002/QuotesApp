import React, { useEffect } from 'react';
import {
  Route,
  useParams,
  useLocation,
  Link,
  useRouteMatch,
} from 'react-router-dom';
import Comments from '../components/comments/Comments';
import useHttp from '../components/Hooks/use-http';
import { getSingleQuote } from '../components/Lib/api';
import Highlighted from '../components/quotes/HighlightedQuote';
import LoadingSpinner from '../components/UI/LoadingSpinner';

const QuoteDetails = props => {
  const params = useParams();
  const match = useRouteMatch();
  const { sendRequest, status, data, error } = useHttp(getSingleQuote, true);
  useEffect(() => {
    sendRequest(params.quoteId);
  }, [sendRequest]);

  if (status === 'pending')
    return (
      <p className=" centered">
        <LoadingSpinner />
      </p>
    );
  if (error) return <p className="centered">{error}</p>;
  if (status === 'completed' && !error && data == undefined)
    return <p>No quote found</p>;
  return (
    <div>
      <Highlighted text={data.text} author={data.author} />

      <Route path={`${match.path}`} exact>
        <div className="centered">
          <Link to={`${match.url}/comments`} className="btn--flat">
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </div>
  );
};

export default QuoteDetails;
