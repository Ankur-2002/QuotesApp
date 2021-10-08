import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import QuoteForm from '../components/quotes/QuoteForm';
import useHttp from '../components/Hooks/use-http';
import { addQuote } from '../components/Lib/api';
const Newquote = () => {
  const m = '';
  const { sendRequest, status } = useHttp(addQuote);
  const History = useHistory();
  useEffect(() => {
    if (status === 'completed') History.push('/quotes');
  }, [status, History]);
  const addQuoteHandler = data => {
    sendRequest(data);
  };
  // console.log(status);
  return (
    <QuoteForm
      isLoading={status === 'pending' ? true : false}
      onAddQuote={addQuoteHandler}
    />
  );
};

export default Newquote;
