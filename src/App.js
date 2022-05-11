import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Pages.
import Game from './pages/Game';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path='/' component={Game} exact />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
