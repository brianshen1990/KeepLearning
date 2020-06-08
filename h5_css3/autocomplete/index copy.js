
const AutoCompletion = () => {
  const OPTIONS = [ "amazing", "astonished", "bravo", "cool", "done", "ebook", "fantastic", "great"];

  const helperClear = () => {
    const fillPlace = document.querySelector(".search-input-auto-complete");
    fillPlace.innerHTML = '';
  }
  const helperSelectOne =  (val) => {
    const input = document.querySelector(".search-input");
    input.value = val;
    helperAuto(val);
  }
  const helperAuto = (val) => {
    const fragments = document.createDocumentFragment(); // avoid manipulate dom frequently
    OPTIONS.filter( item => item.includes(val) ).filter( item => item !== val ).map( item => {
      const btn =  document.createElement("button");
      btn.className = "search-input-auto-complete-btn";
      btn.textContent = item;
      btn.onclick = () => {
        console.log("clicked");
        helperSelectOne(item);
      }
      fragments.appendChild(btn);
    });
    const fillPlace = document.querySelector(".search-input-auto-complete");
    fillPlace.innerHTML = '';
    fillPlace.appendChild( fragments );
  }
  let interval = null;
  let value = "";

  const helperStart = (force) => {
    const input = document.querySelector(".search-input");
    const val = ( input && input.value ) || "";
    if ( force && val ) { // force refresh when re-enter
      value = val;
      helperAuto(val);
    } else {
      if ( value !== val ) { // only when value changes
        value = val;
        if ( val ) {
          helperAuto(val);
        } else {
          helperClear();
        }
      }
    }
  }
  
  return {
    start: () => { // start timer
      if ( !interval ) {
        helperStart(true);
        interval = setInterval( () => helperStart(),  200 )
      }
    },
    stop: () => { // stop timer, and hide recommendations
      if ( interval ) {
        clearInterval(interval);
        interval = null;
      }
      setTimeout( helperClear, 50 );
    }
  }
}

const autoCom = AutoCompletion();
const AutoCompletionStart = autoCom.start;
const AutoCompletionStop = autoCom.stop;