// Promise
// Promise with limit
// Promise.all


class PromiseMy {
  constructor( func ) {
    this._status = 1;
    func(this._resolve, this._reject);
  }

  _STATUS_PENDING = 1;
  _STATUS_DONE = 2;
  _STATUS_ERROR = -1;
  _status = null; // 1 pending, 2 done, -1 error

  _res = null;
  _next = [];
  _FUNCTION_THEN = 1;
  _FUNCTION_CATCH = 2;
  _FUNCTION_FINALLY = -1;

  _resolve = (res) => {
    this._res = res;
    this._status = 2;
    this._nextChain();
  }
  _reject = (err) => {
    this._res = err;
    this._status = -1;
    this._nextChain();
  }
  _nextChain = () => {
    if ( this._status === this._STATUS_PENDING ) {
      return;
    }
    const chain = this._next;
    while ( chain.length > 0 ) {
      const { func, type } = chain.pop();
      if ( ( this._status === this._STATUS_DONE && type === this._FUNCTION_THEN ) 
          || ( this._status === this._STATUS_ERROR && type === this._FUNCTION_CATCH ) 
          ||  type === this._FUNCTION_FINALLY ) {
        // current status

        try {
          this._res = func( this._res );
          // important, after handling error, should return normal status
          this._status = this._STATUS_DONE; 

          if ( this._res instanceof PromiseMy ) {
            this._res.then( (res2) => {
              this._status = this._STATUS_DONE;
              this._res = res2;
              this._nextChain(); 
            }).catch( (err2) => {
              this._status = this._STATUS_ERROR;
              this._res = err2;
              this._nextChain(); 
            });
            break;
          }
        } catch ( err ) {
          this._status = this._STATUS_ERROR;
          this._res = err;
          this._nextChain();
        }
      }
    }
  }
  then( func ) {
    this._next.splice(0, 0, { func, type: this._FUNCTION_THEN } );
    this._nextChain();
    return this;
  }
  catch ( func ) {
    this._next.splice(0, 0, { func, type: this._FUNCTION_CATCH } );
    this._nextChain();
    return this;
  }
  finally ( func ) {
    this._next.splice(0, 0, { func, type: this._FUNCTION_FINALLY } );
    this._nextChain();
  }

  static all( items ) {
    return new PromiseMy( (resolve, reject) => {
      const resArr = new Array(items.length).fill(null);
      const doneArr = new Array(items.length).fill(false);
      items.map( (item, index) => {
        item.then( (res) => {
          resArr[index] = res;
          doneArr[index] = true;
          // check if all is done
          let allDone = true;
          for ( let done of doneArr ) {
            allDone = allDone && done;
            if ( !allDone ) { break; }
          }
          if ( allDone ) {
            resolve(resArr);
          }
        }).catch( (err) => {
          reject(err);
        });
      });
    });
  }
}


// const promiseSuccess = new PromiseMy( ( resolve, reject ) => { resolve("promiseSuccess"); })
// promiseSuccess.then( (data) => { console.log( data ); }).catch( (err) => { console.log( err ); });

// const promiseFailure = new PromiseMy( ( resolve, reject ) => { reject("promiseFailure"); })
// promiseFailure.then( (data) => { console.log( data ); }).catch( (err) => { console.log( err ); });

// const promiseChian01 = new PromiseMy( ( resolve, reject ) => { resolve("promise Chain Success 01"); })
// const promiseChian02 = new PromiseMy( ( resolve, reject ) => { resolve("promise Chain Success 02"); })
// const promiseChian03 = new PromiseMy( ( resolve, reject ) => { reject("promise Chain !!Failure!! 03"); })

// promiseChian01.then( (res) => {
//   console.log(res);
//   return promiseChian02;
// }).then( (res) => {
//   console.log(res);
//   return promiseChian03;
// }).then( (res) => {
//   console.log(res);
// }).catch( (err) => {
//   console.error(err);
//   throw "error in catch";
// }).catch( (err) => {
//   console.error(err);
//   return "Aha";
// }).then( (res) => {
//   console.log(res);
// }).finally( (res) => {
//   console.log("finally");
// });


// const promiseAll01 = new PromiseMy( ( resolve, reject ) => { resolve("promise Chain Success 01"); })
// const promiseAll02 = new PromiseMy( ( resolve, reject ) => { resolve("promise Chain Success 02"); })
// const promiseAll03 = new PromiseMy( ( resolve, reject ) => { reject("promise Chain !!Failure!! 03"); })

// PromiseMy.all([promiseAll01, promiseAll02, promiseAll03]).then( (res) => {
//   console.log(res);
// }).catch( ( err ) => {
//   console.error(err);
// })