import React, { Component } from "react";
import "../styles/ViewCreatives.css";

require('../SAMPLE_CODE');

const adsSdk = require('facebook-nodejs-ads-sdk');
const accessToken = 'EAACEdEose0cBACGhleFSA5ZArPcMLPu72VWbK2dZAUdvjZBEIOqQm6OGyYSLdm7k4QUSNaxM6oN9mGRpaEEmTCZBRI4hpjq8pN0JEhAqNmPIYZB411iHxun42TRa9c8hrLmXDr3vgVdVrx24NxlBKqARBkrzAbtNmImjAdYmTPGZBaI8bCOrtkJaCe9Oo99r8ZD';
const api = adsSdk.FacebookAdsApi.init(accessToken);

export default class ViewCreatives extends Component {
  render() {
    return (
      <div className="audiences">
        <div className="lander">
          <h1>View Ad Creatives</h1>
          <p>Ad Creatives</p>

          {/* {console.log(api)} */}
        </div>
      </div>
    );
  }
}