const ModuleB = require('./moduleB');

module.exports.emptyFunction = () => {
  return "emptyFunction"
}

module.exports.syncFunction = (data) => {
  return ModuleB.syncFunction(data);
}

module.exports.promiseFunction = async (data) => {
  const res = await ModuleB.promiseFunction(data);
  return res;
}

module.exports.callbackFunction = async (data, response) => {
  ModuleB.callbackFunction(data, (err, res) => {
    if(err) {
      response && response.error(err);
    } else {
      response && response.send(res);
    }
  });
}