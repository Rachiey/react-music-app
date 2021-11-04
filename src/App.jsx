import React from 'react';
import { Header } from './layout';
import { Switch, Route } from 'react-router-dom';
import * as Pages from './pages';

import { useSelector } from 'react-redux';

const App = () => {
    const type= useSelector((store) => store.musicType )
    const name = useSelector((store) => store.artistName )

    return (
    <>
        <Header />
        
        <Switch>
        <Route exact path='/'>
       
          <Pages.Home />
          <h2>{name} is {type} music </h2>
        </Route>

        <Route path='/artists'>
          <Pages.Artists />
        </Route>

        </Switch>
        
  
    </>
    )
};

export default App;