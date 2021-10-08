import React, { useEffect } from 'react';
import useHttp from '../components/Hooks/use-http';
import QuoteList from '../components/quotes/QuoteList';
import { getAllQuotes } from '../components/Lib/api';
import NoQuotesFound from '../components/quotes/NoQuotesFound';
import LoadingSpinner from '../components/UI/LoadingSpinner';
let DUMMY_QUOTE = [
  { id: 'q1', author: 'Max', text: 'Learning React is fun!' },
  { id: 'q2', author: 'Maximilian', text: 'Learning React is great!' },
];

const Allquote = () => {
  const { sendRequest, data, status, error } = useHttp(getAllQuotes, true);
  useEffect(() => {
    sendRequest();
  }, [sendRequest]);
  if (status === 'pending')
    return (
      <p className=" centered">
        <LoadingSpinner />
      </p>
    );
  if (error) return <p className="focused centered">{error}</p>;

  if (!error && status === 'completed' && data.length === 0)
    return <NoQuotesFound />;
  return <QuoteList quotes={[...data]}></QuoteList>;
};

export default Allquote;
