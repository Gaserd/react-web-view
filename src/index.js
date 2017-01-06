import React from 'react'
import { render } from 'react-dom'
import ReactWebView from './component/ReactWebView'
import './styles/ReactWebView.css'


render(
    <div className='app'>
      <ReactWebView
        url={'https://facebook.github.io/react/'}
        navigation_text={'React'}
        animation={'bottomontop'}
      />
    </div>,
  document.getElementById('root')
)
