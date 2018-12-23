function throttle(fn, delay) {
  let last;
  let timer;

  return () => {
    const now = +new Date;

    if (last && now < last + delay) {
      clearTimeout(timer);

      timer = setTimeout(() => {
        last = now;
        fn();
      }, delay);
    } else {
      last = now;
      fn();
    }

  };
}

function onScroll() {
  if (window.pageYOffset) {
    $$header.classList.add('is-active');
  } else {
    $$header.classList.remove('is-active');
  }
}

const $$header = document.querySelector('.js-header');

window.addEventListener('scroll', throttle(onScroll, 25));


var coll = document.getElementsByClassName("collapsible");
var i;
      
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
   } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}
  