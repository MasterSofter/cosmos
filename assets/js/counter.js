function isVisible(elem) {
  let coords = elem.getBoundingClientRect();
  let windowHeight = document.documentElement.clientHeight;
  // верхний край элемента виден?
  let topVisible = coords.top > 0 && coords.top < windowHeight;
  // нижний край элемента виден?
  let bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;
  return topVisible || bottomVisible;
}

function playCounter() {
  for (let counter of document.querySelectorAll('.counter')) {
    if (isVisible(counter)) {
      for (let counterTimer of counter.querySelectorAll('.counter-timer')){
        if(!counterTimer.classList.contains("counter-played")){
          counterTimer.classList.add("counter-played");
          $(counterTimer).countTo();
        }
      }
    }
  }
}
playCounter();
window.onscroll = playCounter;
