const errorFunction = () => {
  kk();
}

const main = () => {
  try {
    errorFunction()
  } catch (err) {
    console.log( err );
    console.log(`${err}`)
    console.log(`${err && err.stack}`)
  }
}

main()