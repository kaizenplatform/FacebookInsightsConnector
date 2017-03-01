import commonColumns from './commonColumns'

const tableau = window.tableau;

export default {
  id: 'ad',
  alias: 'Facebook Ad Insights',
  columns: [
    { id : "campaign_id", alias : "Campaign ID", columnRole: "dimension", dataType : tableau.dataTypeEnum.string },
    { id : "campaign_name", alias : "Campaign Name", columnRole: "dimension", dataType : tableau.dataTypeEnum.string },
    { id : "adset_id", alias : "AdSet ID", columnRole: "dimension", dataType : tableau.dataTypeEnum.string },
    { id : "adset_name", alias : "AdSet Name", columnRole: "dimension", dataType : tableau.dataTypeEnum.string },
    { id : "ad_id", alias : "Ad ID", columnRole: "dimension", dataType : tableau.dataTypeEnum.string },
    { id : "ad_name", alias : "Ad Name", columnRole: "dimension", dataType : tableau.dataTypeEnum.string },
    ...commonColumns,
  ],
};
