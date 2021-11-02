import React from 'react';
import { Artists } from './components/Artists';
import { LikeButton } from './components/LikeButton/index';


const App = () => {
    return (
    <div>
        <h1>Favourite artists</h1>
        <Artists />
        <LikeButton />
        <LikeButton />
        

      
  
    </div>
    )
};

export default App;