document.addEventListener("DOMContentLoaded", function () {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' }); 
});

// mouse shadow 
const mouseLight = document.querySelector('.mouse-light');

function updateLightPosition(e) {
  mouseLight.style.left = e.x + 'px';
  mouseLight.style.top = e.y + 'px';
}

document.addEventListener('mousemove', updateLightPosition);


// SCROLL FX 
//scroll to section
const sectionIndicatorBtnArr = document.querySelectorAll('.section-indicator-btn');

function scrollToSection(i){
  sectionArr[i].scrollIntoView({behavior: 'smooth'});
}

sectionIndicatorBtnArr.forEach((item, index)=>{
  item.addEventListener('click',()=>{
    scrollToSection(index);
  })
})

// scroll color && indicators svg fx
const sectionIdArr = ['home','about','skills','projects','contact'];
const sectionArr = [];
const indicatorSectionSvgArr = document.querySelectorAll('.indicator-svg');

for(i = 0; i < sectionIdArr.length; i++){
  sectionArr.push(document.getElementById(sectionIdArr[i])); //sections arr created
}

let scrollbarColorArr = ['#55bdbd', '#bb44bb', '#cc8000', '#bcbc10', '#55bdbd'];

let prevSection = 1; 

document.addEventListener('scroll', ()=>{
  for(let i = sectionArr.length - 1; i >= 0; i--){
      if(sectionArr[i].getBoundingClientRect().top < [0, 200, 150, 10, 200][i]){
        if(prevSection === i){
          break
        } 
        else {
          document.documentElement.style.setProperty('--scrollbar-color', scrollbarColorArr[i])
          indicatorSectionSvgArr[i * 2].classList.add('show');
          indicatorSectionSvgArr[i * 2 + 1].classList.remove('show');
          indicatorSectionSvgArr[prevSection * 2].classList.remove('show');
          indicatorSectionSvgArr[prevSection * 2 + 1].classList.add('show')
          prevSection = i;
          break
        }
      } 
  };
});

document.documentElement.style.setProperty('--scrollbar-color', '#00bbb1');

//scroll reveal
const observer = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
  })
});

const scrollHiddenElements = document.querySelectorAll('.scroll-hide');
scrollHiddenElements.forEach((item)=>observer.observe(item));

// ------------------------------------------------------
// ----------------------  HOME  ------------------------
// ------------------------------------------------------

particlesJS(
    {
        "particles": {
          "number": {
            "value": 80,
            "density": {
              "enable": true,
              "value_area": 800
            }
          },
          "color": {
            "value": "#ffffff"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "#000000"
            },
            "polygon": {
              "nb_sides": 5
            },
            "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 3,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 40,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "repulse"
            },
            "onclick": {
              "enable": true,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 400,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 400,
              "size": 40,
              "duration": 2,
              "opacity": 8,
              "speed": 3
            },
            "repulse": {
              "distance": 200,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
      }
);

// ------------------------------------------------------
// ----------------------- ABOUT ------------------------
// ------------------------------------------------------

const aboutBtnArr = document.querySelectorAll('.about-btn');
const aboutTextArr = document.querySelectorAll('.about-text-container');
const firstbtn = document.getElementById('about-text-btn-first');


for(let i = 0; i < aboutBtnArr.length; i++){
  aboutBtnArr[i].addEventListener('click', () => {
    aboutBtnArr.forEach((item)=>item.classList.remove('active'));
    aboutBtnArr[i].classList.add('active');

    aboutTextArr.forEach((item)=>item.classList.remove('active'));
    aboutTextArr[i].classList.add('active');
  });
}

// ------------------------------------------------------
// --------------------- PROJECTS -----------------------
// ------------------------------------------------------

const githubLottie = document.querySelectorAll('.github-lottie');

for(let i = 0; i < githubLottie.length; i++){
  const githubOptions = {
    container: githubLottie[i], 
    renderer: 'svg', 
    loop: true,
    autoplay: true, 
    path: 'assets/img/github-gif.json' 
  };

  const githubAnimation = lottie.loadAnimation(githubOptions);
}

// ------------------------------------------------------
// ---------------------- CONTACT -----------------------
// ------------------------------------------------------

const containerIndustrial = document.getElementById('lottie-industrial');
const sphere = document.getElementById('lottie-container');
const shatterGlass = document.getElementById('shatter-glass');
const shatterGlassReverse = document.getElementById('shatter-glass-reverse');

const options = {
  container: sphere,
  renderer: 'svg', 
  loop: true,
  autoplay: true,
  path: 'assets/img/sphere-anim.json' 
};

const industrialOptions = {
  container: containerIndustrial,
  renderer: 'svg', 
  loop: true,
  autoplay: true,
  path: 'assets/img/industrial-anim.json' 
};

const shatterGlassOptions = {
  container: shatterGlass,
  renderer: 'svg', 
  loop: false,
  autoplay: false,
  path: 'assets/img/shatter-glass.json' 
};

const shatterGlassReverseOptions = {
  container: shatterGlassReverse,
  renderer: 'svg', 
  loop: false,
  autoplay: false,
  path: 'assets/img/shatter-glass-reverse.json' 
}

const animation = lottie.loadAnimation(options);
const industrialAnimation = lottie.loadAnimation(industrialOptions);
const shatterGlassAnimation = lottie.loadAnimation(shatterGlassOptions);
const shatterGlassReverseAnimation = lottie.loadAnimation(shatterGlassReverseOptions);

// contact form resize 
const contactForm = document.getElementById('contact-form-container');
const contactFormLines = document.getElementById('contact-form-outer-lines');

function resizeSVG() {
  const contactFormWidth = contactForm.clientWidth;
  contactFormLines.style.transform = `scaleX(${contactFormWidth / 450})`
}

window.addEventListener('resize', resizeSVG);
resizeSVG();

// contact form FX

const contactIcons = document.querySelector('.contact-inner-container');

const x = document.querySelector('.x');

let arr = [sphere, x]


function formVisibilityAnimations(){
  contactForm.classList.toggle('active');

  shatterGlassAnimation.stop();
  shatterGlassReverseAnimation.stop();
  animation.stop()

  if(contactForm.classList.contains('active')){
    contactIcons.style.opacity = 0
    contactForm.style.zIndex = 100;

    sphere.style.display = 'none';
    shatterGlass.style.display = 'inline-block';
    shatterGlassReverse.style.display = 'none';
    
    shatterGlassAnimation.play();

    x.disabled = true;

    setTimeout(()=>{
      shatterGlass.style.zIndex = 15;
      x.disabled = false;
    }, 800) //breaking sphere time
  } 
  else {
    contactIcons.style.opacity = 1;
    contactForm.style.zIndex = -1;

    sphere.style.display = 'none';

    shatterGlassReverse.style.display = 'inline-block'
    shatterGlassReverseAnimation.play()

    shatterGlass.style.display = 'none'

    x.disabled = true;

    setTimeout(()=>{
      sphere.style.display = 'inline-block';
      shatterGlassReverse.style.display ='none'
      sphere.classList.add('active');
      animation.play()

    }, 380) //crafting sphere time
  } 
}

for(let i = 0; i < arr.length; i++){
  arr[i].addEventListener('click', formVisibilityAnimations);
}

formVisibilityAnimations();


// contact background styles (container height)
const contactBackground = document.getElementById('contact-mask');
const contactBlurImage = document.getElementById('contact-blur-image');

function adjustBackgroundHeight() {
  contactBackground.style.height = contactBlurImage.offsetHeight + 'px';
}

window.addEventListener('resize', ()=>{adjustBackgroundHeight()});

adjustBackgroundHeight();



// ------------------------------------------------ 
// ------------------ RESPONSIVE ------------------ 
// ------------------------------------------------ 

// HOME

//hamburger-menu

if(window.matchMedia('(max-width: 768px)')){
  const hamburgerMenuBtn = document.getElementById('hamburger-menu-btn');

  hamburgerMenuBtn.addEventListener('click', ()=>{
    hamburgerMenuBtn.classList.toggle('active');
    document.querySelector('header').classList.toggle('active');
  });
}

//PROJECTS

if(window.matchMedia('(max-width: 553px)')){
  const seeMoreBtn = document.querySelectorAll('.see-more-project-btn');
  const seeLessBtn = document.querySelectorAll('.see-less-project-btn');
  const projectCardInner = document.querySelectorAll('.project-card-inner-container');

  seeMoreBtn.forEach((btn, i)=>{
    btn.addEventListener('click',()=>{ 
      projectCardInner[i].classList.add('active');
    });
  });

  seeLessBtn.forEach((btn,i)=>{
    btn.addEventListener('click',()=>{
      projectCardInner[i].classList.remove('active');
    })
  })
}


// formulario php 

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("contact-form").addEventListener("submit", function (event) {
      event.preventDefault();

      let formStatusMessage = document.getElementById('form-status-message')
      let formData = new FormData(this); 
      let xhr = new XMLHttpRequest();
      xhr.open("POST", "form-handler.php", true);
      xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");

      xhr.onreadystatechange = function () {
          if (xhr.readyState === 4){ 
            if(xhr.status === 200) {
              formStatusMessage.innerHTML = "¡Formulario enviado con éxito!";
              formStatusMessage.style.color = "rgb(92, 207, 92);";
            } else{
              formStatusMessage.innerHTML = "¡Error al enviar formulario!";
              formStatusMessage.style.color = "rgb(211, 55, 55);";
            }
          }
      };

      xhr.send(formData); 
  });
});



