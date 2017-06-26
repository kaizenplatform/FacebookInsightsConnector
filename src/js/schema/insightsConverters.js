export default {
  score: { id: 'relevance_score', path: '$.relevance_score.score' },
  negative_feedback: { id: 'relevance_score', path: '$.relevance_score.negative_feedback' },
  positive_feedback: { id: 'relevance_score', path: '$.relevance_score.positive_feedback' },
  actions: { id: 'actions', path: '$.actions[?(@.action_type==\'video_view\')].value' },
  video_10_sec_watched_actions: {
    id: 'video_10_sec_watched_actions',
    path: '$.video_10_sec_watched_actions[?(@.action_type==\'video_view\')].value',
  },
  cost_per_10_sec_video_view: { id: 'cost_per_10_sec_video_view', path: '$.cost_per_10_sec_video_view[?(@.action_type==\'video_view\')].value' },
  video_avg_percent_watched_actions: {
    id: 'video_avg_percent_watched_actions',
    path: '$.video_avg_percent_watched_actions[?(@.action_type==\'video_view\')].value',
  },
  video_p25_watched_actions: { id: 'video_p25_watched_actions', path: '$.video_p25_watched_actions[?(@.action_type==\'video_view\')].value' },
  video_p50_watched_actions: { id: 'video_p50_watched_actions', path: '$.video_p50_watched_actions[?(@.action_type==\'video_view\')].value' },
  video_p75_watched_actions: { id: 'video_p75_watched_actions', path: '$.video_p75_watched_actions[?(@.action_type==\'video_view\')].value' },
  video_p95_watched_actions: { id: 'video_p95_watched_actions', path: '$.video_p95_watched_actions[?(@.action_type==\'video_view\')].value' },
  video_p100_watched_actions: { id: 'video_p100_watched_actions', path: '$.video_p100_watched_actions[?(@.action_type==\'video_view\')].value' },
};
