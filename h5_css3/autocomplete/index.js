const AutoCompletion = () => {
  const OPTIONS = [ "amazing", "astonished", "bravo", "cool", "done", "ebook", "fantastic", "great"];

  const helperClear = () => {
    console.log("clear");
    const fillPlace = document.querySelector(".search-input-auto-complete");
    fillPlace.innerHTML = '';
  }
  const helperSelectOne =  (val) => {
    const input = document.querySelector(".search-input");
    input.value = val;
    helperShowRecommendations(val);
  }

  const helperShowRecommendations = (val) => {
    const fragments = document.createDocumentFragment(); // avoid manipulate dom frequently
    OPTIONS.filter( item => item.includes(val) ).filter( item => item !== val ).map( item => {
      const btn =  document.createElement("button");
      btn.className = "search-input-auto-complete-btn";
      btn.textContent = item;
      btn.onclick = () => {
        console.log(`clicked ${item}`);
        helperSelectOne(item);
      }
      fragments.appendChild(btn);
    });
    const fillPlace = document.querySelector(".search-input-auto-complete");
    fillPlace.innerHTML = '';
    fillPlace.appendChild( fragments );
  }
  
  let value = "";
  const helperHandleInterval = (force) => {
    const input = document.querySelector(".search-input");
    const val = ( input && input.value ) || "";
    if ( force && val ) { // force refresh when re-enter
      value = val;
      helperShowRecommendations(val);
    } else {
      if ( value !== val ) { // only when value changes
        value = val;
        if ( val ) {
          helperShowRecommendations(val);
        } else {
          helperClear();
        }
      }
    }
  }
  
  let interval = null;
  return {
    start: () => { // start timer to monitor
      if ( !interval ) {
        helperHandleInterval(true);
        interval = setInterval( () => helperHandleInterval(),  200 )
      }
    },
    stop: () => {  // stop timer and hide recommendations
      if ( interval ) {
        clearInterval(interval);
        interval = null;
      }
      setTimeout(helperClear, 100);
    }
  }
}

const autoCom = AutoCompletion();
const AutoCompletionStart = autoCom.start;
const AutoCompletionStop = autoCom.stop;