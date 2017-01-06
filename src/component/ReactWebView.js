import React, { PropTypes, Component } from 'react'

export default class ReactWebView extends Component {
  onLoadIframe() {
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
  }
  render() {
    const { url } = this.props
    let { navigation_text, animation } = this.props

    navigation_text = (typeof navigation_text == 'undefined') ? url : navigation_text

    const classNameReactWebView = 'react__web_view'
    const classAnimation = (typeof animation !== 'undefined') ? classNameReactWebView + ' ' + animation : classNameReactWebView + ' non-animation'


    return <div className='react__web_view__container'>
      <div className={classAnimation}>
        <div className='react__web_view-nav_bar'>
          <div className='react__web_view-progress'></div>
          <h2 className='react__web_view-nav_bar_text'>{navigation_text}</h2>
        </div>
        <div className='react__web_view-body'>
          <iframe onLoad={::this.onLoadIframe} className='react__web_view-iframe' src={url}></iframe>
        </div>
      </div>
    </div>
  }
}


ReactWebView.propTypes = {
  url: PropTypes.string.isRequired,
  navigation_text: PropTypes.string.isRequired,
  animation: PropTypes.string.isRequired
}
