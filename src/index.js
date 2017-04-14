import React from 'react';
import ReactDOM from 'react-dom';
import ReactWebView from './ReactWebView';
import './index.css';

ReactDOM.render(
  <ReactWebView them={'green'} url={'https://facebook.github.io/react/'} />,
  document.getElementById('root')
);
