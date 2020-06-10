
const dynamicallyAdd = (n) => {

  const masonry = document.querySelector(".masonry-dynamical");
  console.log( getComputedStyle(masonry).getPropertyValue('grid-auto-rows') )
  console.log( getComputedStyle(masonry).getPropertyValue('grid-row-gap') )

  const fragment = document.createDocumentFragment();
  for ( let i = 0; i < n ; i++ ) {
    const item = document.createElement("div");
    item.textContent = i+1;
    const height = Math.floor(Math.random() * 30 + 5) * 10 ;
    item.style =  `height: ${ height }px; grid-row-end: span ${Math.ceil(height/10)+1};`
    fragment.appendChild(item);
  }
  
  masonry.innerHTML = "";
  masonry.appendChild(fragment);
  // masonry-dynamical
}

setTimeout( ()=> {
  dynamicallyAdd(100);
}, 500);
