import React from 'react';
import { Switch, Route } from 'react-router-dom';
import * as Pages from './pages';


const App = () => {
    return (
    <div>
        
      <Switch>
        <Route exact path='/'>
          <Pages.Home />
        </Route>

        <Route path='/artists'>
          <Pages.Artists />
        </Route>

      </Switch>
        
  
    </div>
    )
};

export default App;