import React from 'react'
import { render } from 'react-dom'
import ReactWebView from './component/ReactWebView'


render(
    <div className='app'>
      <ReactWebView
        url={'https://google.com'}
        navigation_text={'React'}
      />
    </div>,
  document.getElementById('root')
)
