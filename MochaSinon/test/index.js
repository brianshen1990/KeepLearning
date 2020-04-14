
const assert = require('assert');
const sinon = require('sinon');
const index = require('../index');
const ModuleB = require('../moduleB');

describe('#index emptyFunction() => Simple Pure Function', () => {
  it('should run ok', () => {
    const res = index.emptyFunction();
    assert(res)
  });
});

describe('#index syncFunction() => Call Sync Function', function() {
  let syncFunction;
  beforeEach( function() {
    syncFunction = sinon.stub(ModuleB, 'syncFunction');
  });
  afterEach( function() {
    syncFunction.restore();
  });
  it('should return value', function() {
    const param = 'test'
    syncFunction.returns(param);
    index.syncFunction(param);
    assert(syncFunction.calledOnce);
    const rReq = syncFunction.getCall(0).args[0];
    assert(rReq === param);
  });
});

describe('#index promiseFunction() => Call Promise Function', function() {

  let promiseFunction;
  beforeEach( function() {
    promiseFunction = sinon.stub(ModuleB, 'promiseFunction');
  });
  afterEach( function() {
    promiseFunction.restore();
  });
  it('should resolve', async function() {
    let param = 'test';
    promiseFunction.resolves(param);
    
    const res = await index.promiseFunction(param);
    assert(promiseFunction.calledOnce);
    const arg = promiseFunction.getCall(0).args[0];
    assert(arg === param);
    
  });
  it('should reject', async function() {
    let param = 'error';
    promiseFunction.rejects('error');
    try {
      await index.promiseFunction(param);
      assert(false);
    } catch (err) {
      assert(err);
    };
  });
});

describe('#index callbackFunction => Call callback Function', function() {
  const response = {
    send: () => {},
    error: () => {}
  };
  let callbackFunction;
  let send;
  let error;
  beforeEach( function() {
    callbackFunction = sinon.stub(ModuleB, 'callbackFunction');
    send = sinon.stub(response, 'send');
    error = sinon.stub(response, 'error');
  });
  afterEach( function() {
    callbackFunction.restore();
    send.restore();
    error.restore();
  });
  it('should call send', function() {
    const param = 'test'
    callbackFunction.callsArgWith(1, null, param);
    send.returns(null);
    index.callbackFunction(param, response);
    assert(callbackFunction.calledOnce);
    assert(!error.calledOnce);
    assert(send.called);
    const dbArg = callbackFunction.getCall(0).args[0];
    assert(dbArg === param);
    const sendArg = send.getCall(0).args[0];
    assert(sendArg === param);
  });
  it('should call error', function() {
    const param = 'error'
    callbackFunction.callsArgWith(1, param, null);
    error.returns(null);
    index.callbackFunction(param, response);
    assert(callbackFunction.calledOnce);
    assert(error.calledOnce);
    assert(!send.called);
    const dbArg = callbackFunction.getCall(0).args[0];
    assert(dbArg === param);
    const errorArg = error.getCall(0).args[0];
    assert(errorArg === param);
  });
 
});