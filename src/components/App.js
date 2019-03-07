import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from '../store';
import Navbar from './Navbar';
import Main from './Main';

const App = () => (
  <Provider store={store}>
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Navbar />
        <div className="container">
          <Main />
        </div>
      </div>
    </Router>
  </Provider>
);

export default App;
