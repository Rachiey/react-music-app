import React from 'react';
import { Header } from './layout';
import { Switch, Route } from 'react-router-dom';
import * as Pages from './pages';


const App = () => {
    return (
    <>
        <Header />
        
        <Switch>
        <Route exact path='/'>
          <Pages.Home />
        </Route>

        <Route path='/artists'>
          <Pages.Artists />
        </Route>

        </Switch>
        
  
    </>
    )
};

export default App;