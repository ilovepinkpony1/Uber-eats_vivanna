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