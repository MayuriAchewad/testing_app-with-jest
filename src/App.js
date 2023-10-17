import React from 'react';
import Login  from './Components/Login';
import { Counter } from './Components/Counter';

function App() {
  return (
    <div className="App" data-testid="loginForm">
     <Login/>
     <Counter/>
    </div>
  );
}

export default App;
