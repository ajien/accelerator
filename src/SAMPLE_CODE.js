/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */

const adsSdk = require('facebook-nodejs-ads-sdk');
const AdAccount = adsSdk.AdAccount;
const Campaign = adsSdk.Campaign;
const CustomAudience = adsSdk.CustomAudience;
const AdSet = adsSdk.AdSet;
const AdCreative = adsSdk.AdCreative;
const Ad = adsSdk.Ad;
const AdPreview = adsSdk.AdPreview;

let access_token = 'EAAY7Ru0UrdMBAGXq3p1ZCHC9ddyNIIui4q5wFK5qU4Sv9pi0C1VvVbA7MgA1l2XACqoZCAvHSBCHr8IvMulyJbneD99PK62pgHU5mVnRDr8gTNekN5TWd2NECke0D7tmPaASSZBYtRFgO97nV33dOGWSh5AWSE6US2VWxSiUmYzWDnZC7S4ysDrwkSd9B0tVscQsG3lJjDQTvYypIyXh';
let app_secret = '92633f5c1dc840b0a4247349b0fc762c';
let ad_account_id = 'act_108822096572010';
let audience_name = 'Visitors';
let audience_retention_days = '30';
let pixel_id = '1983151311903593';
let app_id = '1754025671568851';
const api = adsSdk.FacebookAdsApi.init(access_token);
const account = new AdAccount(ad_account_id);
const showDebugingInfo = true; // Setting this to true shows more debugging info.
if (showDebugingInfo) {
  api.setDebug(true);
}

let campaign;
let campaign_id;
let custom_audience;
let custom_audience_id;
let ad_set;
let ad_set_id;
let creative;
let creative_id;
let ad;
let ad_id;
let adpreview;
let adpreview_id;

const logApiCallResult = (apiCallName, data) => {
  console.log(apiCallName);
  if (showDebugingInfo) {
    console.log('Data:' + JSON.stringify(data));
  }
};

const fields = [
];
const params = {
  'objective' : 'LINK_CLICKS',
  'status' : 'PAUSED',
  'buying_type' : 'AUCTION',
  'name' : 'My Campaign',
};
campaign =  (new AdAccount(ad_account_id)).createCampaign(
  fields,
  params

);
campaign
.then((result) => {
  logApiCallResult('campaign api call complete.', result);
  campaign_id = result.id;
  const fields = [
  ];
  const params = {
    'name' : audience_name,
    'pixel_id' : pixel_id,
    'prefill' : true,
    'rule' : {'url':{'i_contains':''}},
    'subtype' : 'WEBSITE',
    'retention_days' : audience_retention_days,
  };
  return (new AdAccount(ad_account_id)).createCustomAudience(
    fields,
    params
  );
})
.then((result) => {
  logApiCallResult('custom_audience api call complete.', result);
  custom_audience_id = result.id;
  const fields = [
  ];
  const params = {
    'status' : 'PAUSED',
    'targeting' : {'custom_audiences':[{'id':custom_audience_id}], 'geo_locations':{'countries':['US']}},
    'name' : 'My AdSet',
    'billing_event' : 'IMPRESSIONS',
    'bid_amount' : '20',
    'campaign_id' : campaign_id,
    'optimization_goal' : 'REACH',
    'daily_budget' : '1000',
  };
  return (new AdAccount(ad_account_id)).createAdSet(
    fields,
    params
  );
})
.then((result) => {
  logApiCallResult('ad_set api call complete.', result);
  ad_set_id = result.id;
  const fields = [
  ];
  const params = {
    'body' : 'Like My Page',
    'name' : 'My Creative',
    'title' : 'My Page Like Ad',
    'object_url' : 'www.facebook.com',
    'link_url' : 'www.facebook.com',
    'image_url' : 'http://www.facebookmarketingdevelopers.com/static/images/resource_1.jpg',
  };
  return (new AdAccount(ad_account_id)).createAdCreative(
    fields,
    params
  );
})
.then((result) => {
  logApiCallResult('creative api call complete.', result);
  creative_id = result.id;
  const fields = [
  ];
  const params = {
    'status' : 'PAUSED',
    'adset_id' : ad_set_id,
    'name' : 'My Ad',
    'creative' : {'creative_id':creative_id},
  };
  return (new AdAccount(ad_account_id)).createAd(
    fields,
    params
  );
})
.then((result) => {
  logApiCallResult('ad api call complete.', result);
  ad_id = result.id;
  const fields = [
  ];
  const params = {
    'ad_format' : 'DESKTOP_FEED_STANDARD',
  };
  return (new Ad(ad_id)).getPreviews(
    fields,
    params
  );
})
.then((result) => {
  logApiCallResult('adpreview api call complete.', result);
  adpreview_id = result[0].id;
})
.catch((error) => {
  console.log(error);
});
