import React from 'react';
import ReactDOM from 'react-dom';
import ReactWebView from './ReactWebView';

it('render with url', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ReactWebView url={'https://facebook.github.io/react/'} />, div);
})

it('render without url', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ReactWebView />, div);
})

it('render with position', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ReactWebView position={'rt'} url={'https://facebook.github.io/react/'}/>, div);
})

it('render with no matching url', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ReactWebView position={'rt'} url={'ccc'}/>, div);
})
