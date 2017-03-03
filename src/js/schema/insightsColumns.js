const tableau = window.tableau;

// See https://developers.facebook.com/docs/marketing-api/insights/fields/v2.8
export default [
  { id: 'account_id', alias: 'Account ID', columnRole: 'dimension', dataType: tableau.dataTypeEnum.string },
  { id: 'account_name', alias: 'Account Name', columnRole: 'dimension', dataType: tableau.dataTypeEnum.string },
  { id: 'campaign_id', alias: 'Campaign ID', columnRole: 'dimension', dataType: tableau.dataTypeEnum.string },
  { id: 'campaign_name', alias: 'Campaign Name', columnRole: 'dimension', dataType: tableau.dataTypeEnum.string },
  { id: 'adset_id', alias: 'AdSet ID', columnRole: 'dimension', dataType: tableau.dataTypeEnum.string },
  { id: 'adset_name', alias: 'AdSet Name', columnRole: 'dimension', dataType: tableau.dataTypeEnum.string },
  { id: 'ad_id', alias: 'Ad ID', columnRole: 'dimension', dataType: tableau.dataTypeEnum.string },
  { id: 'ad_name', alias: 'Ad Name', columnRole: 'dimension', dataType: tableau.dataTypeEnum.string },
  { id: 'date_start', alias: 'Date Start', dataType: tableau.dataTypeEnum.date },
  { id: 'date_stop', alias: 'Date Stop', dataType: tableau.dataTypeEnum.date },
  { id: 'objective', alias: 'Objective', dataType: tableau.dataTypeEnum.string },
  { id: 'impressions', alias: 'Impressions', dataType: tableau.dataTypeEnum.int },
  { id: 'clicks', alias: 'Clicks', dataType: tableau.dataTypeEnum.int },
  { id: 'ctr', alias: 'CTR', dataType: tableau.dataTypeEnum.float },
  { id: 'unique_impressions', alias: 'Unique Impressions', dataType: tableau.dataTypeEnum.int },
  { id: 'unique_clicks', alias: 'Unique Clicks', dataType: tableau.dataTypeEnum.int },
  { id: 'unique_ctr', alias: 'Unique CTR', dataType: tableau.dataTypeEnum.float },
  { id: 'spend', alias: 'Spend', dataType: tableau.dataTypeEnum.float },
  { id: 'frequency', alias: 'Frequency', dataType: tableau.dataTypeEnum.float },
  { id: 'reach', alias: 'Reach', dataType: tableau.dataTypeEnum.int },
  { id: 'score', alias: 'Relevance Score', dataType: tableau.dataTypeEnum.int },
  { id: 'positive_feedback', alias: 'Positive Feedback', dataType: tableau.dataTypeEnum.string },
  { id: 'negative_feedback', alias: 'Negative Feedback', dataType: tableau.dataTypeEnum.string },
];
