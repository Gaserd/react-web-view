import React, { Component } from 'react';
import './ReactWebView.css';

class ReactWebView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      matching_url : false
    };
  }

  componentDidMount() {
    let expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
    let regex = new RegExp(expression);
    this.setState({
      matching_url : (this.props.url.match(regex)) ? true : false
    })
  }

  closeComponent() {
    document.querySelector('.react__web_view').remove()
  }

  reloadComponent() {
    this.forceUpdate()
  }

  renderHeader() {
    let header = (typeof this.props.header !== 'undefined') ? this.props.header : this.props.url
    return (
      <div className="react__web_view_header">
        <div className="react__web_view_close" onClick={this.closeComponent}>
          <img alt="close" src="/images/close.svg" />
        </div>
        <div className="react__web_view_loader"></div>
        <div className="react__web_view_header_text">{header}</div>
        <div className="react__web_view_reload" onClick={this.reloadComponent}>
          <img alt="reload" src="/images/reload.svg" />
        </div>
      </div>
    )
  }

  loadIframe() {
    document.querySelector('.react__web_view_loader').classList.add('react__web_view_loader-full')
  }

  renderIframe() {
    return (
      <div className="react__web_view_iframe">
        <iframe onLoad={this.loadIframe} src={this.props.url}></iframe>
      </div>
    )
  }

  renderErrorMatching() {
    return (
      <div className="react__web_view_error_matching">
        Error, matching url!
      </div>
    )
  }


  render() {
    let { header, position } = this.props
    let them = (typeof this.props.them !== 'undefined') ? this.props.them : ''
    let classNamePosition = (typeof position !== 'undefined') ? `react__web_view react__web_view-${position} ${them}__th` : `react__web_view ${them}__th`

    return (
      <div className={classNamePosition}>
      {
        this.renderHeader()
      }
      {
        (this.state.matching_url) ? this.renderIframe() : this.renderErrorMatching()
      }
      </div>
    );
  }
}

export default ReactWebView;
