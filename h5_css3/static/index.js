document.onload =  () => {
  console.log('loaded')
};

const onClickXHR = () => {
  function reqListener () {
    console.log(this.responseText);
    // {"message":"World Hello"}
  }
  var oReq = new XMLHttpRequest();
  oReq.addEventListener("load", reqListener);
  oReq.open("GET", "./hello");
  oReq.send();
}

const onClickFetchByXHR = () => {
  _fetch_get("./hello").then( (res) => {
    console.log('then');
    console.log(res);
  }).catch( (err) => {
    console.log('err');
    console.error(err);
  });
}

const _fetch_get = (_url) => {
  return new Promise( (resolve, reject) => {
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", (message) => {
      console.log('resolved');
      resolve(message.target.responseText);
    });
    oReq.addEventListener("error", (error) => {
      console.log('rejected');
      reject(error);
    });
    oReq.open("GET", _url);
    oReq.send();
  }) 
}

const onClickNativeFetch = () => {
  fetch("./hello")
    .then( (response) => response.json() )
    .then( (res) => {
      console.log(res);
  }).catch( (error) => {
    console.error(error);
  });
}