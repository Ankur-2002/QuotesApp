import { Fragment, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

const QuoteList = props => {
  console.log(props);
  const History = useHistory();
  const Location = useLocation();
  const query = new URLSearchParams(Location.search);
  const Asc = query.get('sort') === 'Asc';
  let List = [];
  if (Asc) {
    List = props.quotes.sort((value1, value2) => {
      return value1.id > value2.id ? 1 : -1;
    });
  } else {
    List = props.quotes.sort((value1, value2) => {
      return value1.id < value2.id ? 1 : -1;
    });
  }
  // console.log(List);
  const ascending = () => {
    History.push({
      pathname: `${Location.pathname}`,
      search: `?sort=` + `${Asc ? 'Desc' : 'Asc'}`,
    });
    // two ways to change or push our route
    // History.push(`${Location.pathname}?sort=` + `${Asc ? 'Desc' : 'Asc'}`);
  };

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={ascending}>Add {Asc ? 'Desc' : 'Asc'}</button>
      </div>
      <ul className={classes.list}>
        {List.map(quote => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
