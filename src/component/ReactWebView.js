import React, { PropTypes, Component } from 'react'
import './ReactWebView.css'

export default class ReactWebView extends Component {
  onLoadIframe() {
    const { url } = this.props
    document.querySelector('.react__web_view-progress').classList.add('react__web_view-progress--full')

    const {animation} = this.props
    if (typeof animation !== 'undefined') {
      switch (animation) {
        case 'bottomontop':
          setTimeout(()=>{document.querySelector('.bottomontop').classList.add('bottomontop--action')},500)
          break;
        default:
          break;
      }
    }

    if (url.indexOf(location.hostname) == -1) {
      fetch(url)
      .then((responce) => {
        console.log(responce)
      })
      .catch((e) => {
        console.log(e)
        document.getElementById('react__web_view-body').innerHTML = '<div class="react__web_view_error__container"><p class="react__web_view_error_text">Error!</p></div>'
      })
    }

  }

  onClose() {
    document.querySelector('.react__web_view__container').remove()
  }

  render() {
    const { url, animation } = this.props
    let { navigation_text } = this.props

    navigation_text = (typeof navigation_text == 'undefined') ? url : navigation_text

    const classNameReactWebView = 'react__web_view'
    const classAnimation = (typeof animation !== 'undefined') ? classNameReactWebView + ' ' + animation : classNameReactWebView + ' non-animation'


    return <div className='react__web_view__container'>
      <div className={classAnimation}>
        <div className='react__web_view-nav_bar' onClick={::this.onClose}>
          <div className='react__web_view-progress'></div>
          <h2 className='react__web_view-nav_bar_text'>{navigation_text}</h2>
        </div>
        <div id='react__web_view-body' className='react__web_view-body'>
          <iframe onLoad={::this.onLoadIframe} className='react__web_view-iframe' src={url}></iframe>
        </div>
      </div>
    </div>
  }
}


ReactWebView.propTypes = {
  url: PropTypes.string.isRequired
}
