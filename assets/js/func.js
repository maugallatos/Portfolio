/*Menu animation*/
const navEl = document.querySelector('.nav');
const logoEl = document.querySelector('.logo');
const bodyEl = document.querySelector('.body');
const hamburgerEl = document.querySelector('.hamburger');
const navItemEls = document.querySelectorAll('.nav__item');

hamburgerEl.addEventListener('click', () => {
  navEl.classList.toggle('d-block');
  logoEl.classList.toggle('logoColorize');
  bodyEl.classList.toggle('position-fixed');
  hamburgerEl.classList.toggle('hamburger--open');
});

navItemEls.forEach(navItemEl => {
  navItemEl.addEventListener('click', () => {
    navEl.classList.remove('d-block');
    logoEl.classList.remove('logoColorize');
    bodyEl.classList.toggle('position-fixed');
    hamburgerEl.classList.remove('hamburger--open');
  });
});

function toggleCodes(on) {
  var obj = document.getElementById('icons');

  if (on) {
    obj.className += ' codesOn';
  } else {
    obj.className = obj.className.replace(' codesOn', '');
  }
}


document.querySelectorAll('img[data-enlargable]').forEach(img => {
  img.classList.add('img-enlargable');
  img.addEventListener('click', function() {
    var src = this.getAttribute('src');
    var overlay = document.createElement('div');
    overlay.style.background = 'RGBA(0,0,0,.5) url(' + src + ') no-repeat center';
    overlay.style.backgroundSize = 'contain';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.position = 'fixed';
    overlay.style.zIndex = '10000';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.cursor = 'zoom-out';
    
    overlay.addEventListener('click', function() {
      document.body.removeChild(overlay);
    });

    document.body.appendChild(overlay);
  });
});

var animation = bodymovin.loadAnimation({
  container: document.getElementById('lot'), 
  path: 'data.json', 
  renderer: 'svg', 
  loop: true, 
  autoplay: true,
  name: "maugallato", 
})


