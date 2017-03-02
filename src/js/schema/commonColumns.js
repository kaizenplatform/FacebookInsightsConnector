const tableau = window.tableau;

export default [
  { id : "date_start", alias : "Date Start", dataType : tableau.dataTypeEnum.date },
  { id : "date_stop", alias : "Date Stop", dataType : tableau.dataTypeEnum.date },
  { id : "impressions", alias : "Impressions", dataType : tableau.dataTypeEnum.int },
  { id : "clicks", alias : "Clicks", dataType : tableau.dataTypeEnum.int },
  { id : "ctr", alias : "CTR", dataType : tableau.dataTypeEnum.float },
  { id : "unique_impressions", alias : "Unique Impressions", dataType : tableau.dataTypeEnum.int },
  { id : "unique_clicks", alias : "Unique Clicks", dataType : tableau.dataTypeEnum.int },
  { id : "unique_ctr", alias : "Unique CTR", dataType : tableau.dataTypeEnum.float },
  { id : "spend", alias : "Spend", dataType : tableau.dataTypeEnum.float },
  { id : "frequency", alias : "Frequency", dataType : tableau.dataTypeEnum.float },
];
