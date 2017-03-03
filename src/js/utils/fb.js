const getLogInUrl = (appId, scopes) => {
  const currentUrl = window.location.href;
  const uri = encodeURI(
    "https://www.facebook.com/dialog/oauth?" +
      "client_id=" + appId +
      "&redirect_uri=" + currentUrl +
      "&response_type=token" +
      "&scope=" + scopes.join(",")
  );
  return uri;
};

const getLogOutUrl = () => {
  const currentUrl = window.location.href;
  const uri = encodeURI("https://www.facebook.com/logout.php" +
    "?next=" + currentUrl +
    "&access_token=" + FB.getAccessToken()
  );
  return uri;
};

const setup = (appId, cb) => {
  const url = window.location.protocol + "//" + window.location.host + "/" + window.location.pathname;

  const initCb = () => {
    FB.init({
      appId      : appId,
      channelUrl : url.replace(new RegExp('[^/]*$'), '') + '/channel.html',
      status     : true,
      cookie     : true,
      xfbml      : true,
      version    : 'v2.8',
    });
    cb();
  };
  if (typeof FB === 'undefined') {
    window.fbAsyncInit = initCb;
  } else {
    initCb();
  };
};

const subscribeStatusChange = (cb) => {
  FB.Event.subscribe('auth.statusChange', cb);
};

const paginateConnection = (page, params, cb) => {
  FB.api(page, 'get', params, (response) => {
    if (!response) {
      console.error('FB API: Unknown error');
      throw new Error('FB API: Unknown error');
    } else if (response.error) {
      console.error('FB API: ' + response.error.message);
      throw new Error('FB API: ' + response.error.message);
    }
    let nextCb;
    const nextPage = response.paging && response.paging.next;
    if (nextPage) {
      nextCb = () => { paginateConnection(nextPage, {}, cb) };
    }
    cb(response.data, nextCb);
  });
};

const getAccessToken = () => {
  return FB.getAccessToken();
}

export default { setup, getLogInUrl, getLogOutUrl, paginateConnection, subscribeStatusChange, getAccessToken };
