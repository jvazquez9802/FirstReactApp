
//Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Assets
import './css/Footer.css';

class Footer extends Component {
  static propTypes = {
    copyright: PropTypes.string
  };
  //Dangerous toma todo el html que se mande y lo imprimira
  render() {
    const {copyright = "&copy; SAM 2018"} = this.props;
    return (
      <div className="Footer">
        <p dangerouslySetInnerHTML = {{__html: copyright }}/>
      </div>
    );
  }
}

export default Footer;
