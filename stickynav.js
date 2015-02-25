var initialOffset = false;

module.exports = function () {
  var nav = document.querySelector('nav');
  if (!nav) return;
  initialOffset = initialOffset || nav.offsetTop;
  if (initialOffset - document.body.scrollTop >= 0){
    nav.style.position = 'initial';
    nav.nextSibling.style.marginTop = '0px';
  } else {
    nav.style.position = 'fixed';
    nav.style.top = 0;
    nav.nextSibling.style.marginTop = nav.offsetHeight +'px';
  }
};
