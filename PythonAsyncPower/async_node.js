
///// Basic

const helloWorld = async () => {
  console.log('hello')
  // around 2 seconds
  await ( new Promise(r => setTimeout(r, 2000)) );
  console.log('World')
}

// helloWorld().then( () => { console.log('Done') })

const say_after =  async (delay, what) => {
  await ( new Promise(r => setTimeout(r, delay * 1000)) );
  console.log(what)
}

///////  Async Series

const async_series = async () => {
  console.log(`started at ${(new Date()).toString()}`)
  // around 3 seconds
  await say_after(1, 'hello')
  await say_after(2, 'world')

  console.log(`finished at ${(new Date()).toString()}`)
}

// async_series().then( () => { console.log('') })

////////// Async Parallel

const async_parallel = async () => {
  console.log(`started at ${(new Date()).toString()}`)
  // around 2 seconds
  await Promise.all(
    [ say_after(1, 'hello'), say_after(2, 'world') ]
  );
  console.log(`finished at ${(new Date()).toString()}`)
}

async_parallel().then( () => { console.log('') })