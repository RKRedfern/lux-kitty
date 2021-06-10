import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Navbar, Sidebar, Footer } from './Components';
import { HomePage, AboutPage, ErrorPage } from './Pages';

const App = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <Switch>
        <Route exact path='/'>
          <HomePage/>
        </Route>
        <Route exact path="/about">
          <AboutPage/>
        </Route>
        <Route exact path="*">
          <ErrorPage />
        </Route>
      </Switch>
      <Footer />
    </div>
  )
}

export default App;
