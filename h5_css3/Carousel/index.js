
let SHOW_NUM = 0;
const carouselNext = (prev) => {
  const scroll = document.querySelectorAll(".carousel-content-item");
  scroll[SHOW_NUM].setAttribute("class", "carousel-content-item");
  if (prev) {
    SHOW_NUM = ( --SHOW_NUM ) % scroll.length;
    if (SHOW_NUM < 0) {
      SHOW_NUM += scroll.length;
    }
  } else {
    SHOW_NUM = ( ++SHOW_NUM ) % scroll.length;
  }
  scroll[SHOW_NUM].setAttribute("class", "carousel-content-item active");
}

const carouselNextNew = (prev) => {
  const scroll = document.querySelector(".carousel-content-continuous");
  const shows = document.querySelectorAll(".carousel-content-item");
  if (prev) {
    SHOW_NUM = ( --SHOW_NUM ) % shows.length;
    if (SHOW_NUM < 0) {
      SHOW_NUM += shows.length;
    }
  } else {
    SHOW_NUM = ( ++SHOW_NUM ) % shows.length;
  }
  scroll.setAttribute( "style", `transform: translateX(-${SHOW_NUM}00%);` )
}
