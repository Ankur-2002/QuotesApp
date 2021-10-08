import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Layout from './components/layout/Layout';
import LoadingSpinner from './components/UI/LoadingSpinner';
const Allquote = React.lazy(() => import('./Pages/Allquote'));
const Newquote = React.lazy(() => import('./Pages/Newquote'));
const QuoteDetails = React.lazy(() => import('./Pages/QuoteDetails'));
function App() {
  return (
    <>
      <Layout>
        <Suspense
          fallback={
            <div className=" centered">
              <LoadingSpinner />
            </div>
          }
        >
          <Switch>
            <Route path="/quotes" exact>
              <Allquote />
            </Route>
            <Route path="/quotes/:quoteId">
              <QuoteDetails />
            </Route>
            <Route path="/new-quote" exact>
              <Newquote />
            </Route>
            <Redirect to="/quotes" />
          </Switch>
        </Suspense>
      </Layout>
    </>
  );
}

export default App;
