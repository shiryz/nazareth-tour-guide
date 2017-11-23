import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './components/app.jsx';
import Style from '../../public/style.css';

const ClientApp = () => (
  <BrowserRouter>
    <Route exact path="/" component={App} />
  </BrowserRouter>
);

ReactDOM.render(<ClientApp />, document.getElementById('root'));
