import React from 'react';
import MainNavigation from './MainNavigation';
import Classes from './Layout.module.css';
const Layout = props => {
  return (
    <>
      <MainNavigation />
      <main className={Classes.main}>{props.children}</main>
    </>
  );
};

export default Layout;
