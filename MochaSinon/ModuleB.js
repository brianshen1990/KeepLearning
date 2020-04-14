
// sync function 
module.exports.syncFunction = (data) => {
  return data;
}

module.exports.promiseFunction = (name) => {
  return new Promise( (resolve) => {
    resolve(name);
  })
}

module.exports.callbackFunction = (name, cb) => {
  cb(null, name);
}