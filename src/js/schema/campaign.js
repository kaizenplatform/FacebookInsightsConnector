import commonColumns from './commonColumns'

const tableau = window.tableau;

export default {
  id: 'campaign',
  alias: 'Facebook Campaign Insights',
  columns: [
    { id : "campaign_id", alias : "Campaign ID", columnRole: "dimension", dataType : tableau.dataTypeEnum.string },
    { id : "campaign_name", alias : "Campaign Name", columnRole: "dimension", dataType : tableau.dataTypeEnum.string },
    ...commonColumns,
  ],
}
