'use stirct';

 window.onscroll = () => {
  let scrolled = window.pageYOffset || document.documentElement.scrollTop;
  const button = document.getElementById('scrollUp');

  if (scrolled < 300) {
    button.style.display = 'none';
  } else {
    button.style.display = 'flex';
  }
}

let currentBuys = 0;
document.onclick = event => {
  const buys = document.getElementById('currentBuys');

  if (
  event.target.className === 'restaurant' 
  || event.target.className === 'restImg' 
  || event.target.className === 'restaurantName' 
  || event.target.className === 'foodType' 
  || event.target.className === 'time'
  ) {
    currentBuys += 1;
    buys.style.display = 'flex';
    buys.innerHTML = `${currentBuys}`;
  };
}

let scrollTimer;
function up() {
  let top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
  if(top > 0) {
    window.scrollBy(0,-100);
    scrollTimer = setTimeout('up()',20);
  } else clearTimeout(t);
  return false;
}

function changeColorOfDiv () {
  let div = event.path[1];
  div.style.backgroundColor = '	rgb(89, 189, 90, 0.5)';
}