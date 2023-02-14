// Image Slider 
const imageOne = document.querySelector(".image-1");
const imageTwo = document.querySelector(".image-2");
const imageThree = document.querySelector(".image-3");
const imageFour = document.querySelector(".image-4");

const circleOne = document.querySelector(".circle-1");
const circleTwo = document.querySelector(".circle-2");
const circleThree = document.querySelector(".circle-3");
const circleFour = document.querySelector(".circle-4");

const chevronLeft = document.querySelector("#chevron-left")
const chevronRight = document.querySelector("#chevron-right")

let i = 0;

const width = document.body.clientWidth

chevronRight.addEventListener("click", forwardImage)
chevronLeft.addEventListener("click", backwardImage)

circleOne.addEventListener("click", showOne);
circleTwo.addEventListener("click", showTwo);
circleThree.addEventListener("click", showThree);
circleFour.addEventListener("click", showFour);

if(i === 0) {
    imageOne.classList.add("active");
    circleOne.classList.add("active");

    imageTwo.classList.remove("active");
    circleTwo.classList.remove("active");
    imageThree.classList.remove("active");
    circleThree.classList.remove("active");
    imageFour.classList.remove("active");
    circleFour.classList.remove("active");
}

function forwardImage(){
  i++;
  if(i === 1) {
    imageOne.classList.remove("active");
    circleOne.classList.remove("active");
    imageThree.classList.remove("active");
    circleThree.classList.remove("active");
    imageFour.classList.remove("active");
    circleFour.classList.remove("active");

    imageTwo.classList.add("active");
    circleTwo.classList.add("active");
   }

   if(i === 2) {
    imageOne.classList.remove("active");
    circleOne.classList.remove("active");
    imageTwo.classList.remove("active");
    circleTwo.classList.remove("active");
    imageFour.classList.remove("active");
    circleFour.classList.remove("active");
    
    imageThree.classList.add("active");
    circleThree.classList.add("active");
   } 

   if(i === 3) {
    imageOne.classList.remove("active");
    circleOne.classList.remove("active");
    imageTwo.classList.remove("active");
    circleTwo.classList.remove("active");
    imageThree.classList.remove("active");
    circleThree.classList.remove("active");
    
    imageFour.classList.add("active");
    circleFour.classList.add("active");
   }

   if(i > 3) {
     i = 0;
   }

   if(i === 0) {
    imageOne.classList.add("active");
    circleOne.classList.add("active");

    imageTwo.classList.remove("active");
    circleTwo.classList.remove("active");
    imageThree.classList.remove("active");
    circleThree.classList.remove("active");
    imageFour.classList.remove("active");
    circleFour.classList.remove("active");
}

}

function backwardImage(){
  i--;
  if(i === 2){
    imageOne.classList.remove("active");
    circleOne.classList.remove("active");
    imageTwo.classList.remove("active");
    circleTwo.classList.remove("active");
    imageFour.classList.remove("active");
    circleFour.classList.remove("active");
    
    imageThree.classList.add("active");
    circleThree.classList.add("active");
  }

  if(i === 1){
    imageOne.classList.remove("active");
    circleOne.classList.remove("active");
    imageThree.classList.remove("active");
    circleThree.classList.remove("active");
    imageFour.classList.remove("active");
    circleFour.classList.remove("active");

    imageTwo.classList.add("active");
    circleTwo.classList.add("active");
  }

  if(i === 0){
    imageOne.classList.add("active");
    circleOne.classList.add("active");

    imageTwo.classList.remove("active");
    circleTwo.classList.remove("active");
    imageThree.classList.remove("active");
    circleThree.classList.remove("active");
    imageFour.classList.remove("active");
    circleFour.classList.remove("active");
  }

  if(i < 0){
    i = 3;
  }

  if(i === 3){
    imageOne.classList.remove("active");
    circleOne.classList.remove("active");
    imageTwo.classList.remove("active");
    circleTwo.classList.remove("active");
    imageThree.classList.remove("active");
    circleThree.classList.remove("active");
    
    imageFour.classList.add("active");
    circleFour.classList.add("active");
  }
}

function showOne(){
  i = 0;
  
  imageOne.classList.add("active");
  circleOne.classList.add("active");

  imageTwo.classList.remove("active");
  circleTwo.classList.remove("active");
  imageThree.classList.remove("active");
  circleThree.classList.remove("active");
  imageFour.classList.remove("active");
  circleFour.classList.remove("active");
}

function showTwo(){
  i = 1;

  imageOne.classList.remove("active");
  circleOne.classList.remove("active");
  imageThree.classList.remove("active");
  circleThree.classList.remove("active");
  imageFour.classList.remove("active");
  circleFour.classList.remove("active");

  imageTwo.classList.add("active");
  circleTwo.classList.add("active");
}

function showThree(){
  i = 2;

  imageOne.classList.remove("active");
  circleOne.classList.remove("active");
  imageTwo.classList.remove("active");
  circleTwo.classList.remove("active");
  imageFour.classList.remove("active");
  circleFour.classList.remove("active");
    
  imageThree.classList.add("active");
  circleThree.classList.add("active");
}

function showFour(){
  i = 3;

  imageOne.classList.remove("active");
  circleOne.classList.remove("active");
  imageTwo.classList.remove("active");
  circleTwo.classList.remove("active");
  imageThree.classList.remove("active");
  circleThree.classList.remove("active");
    
  imageFour.classList.add("active");
  circleFour.classList.add("active");
}

// Products slider
const arrowLeft = document.querySelector('.arrow-left-icon');
const arrowRight = document.querySelector('.arrow-right-icon');

const productsImages = document.querySelector('.products-images');
const productsImagesBefore = document.querySelector('.products-images-before')

// arrowRight.addEventListener('click', moveRight);
// arrowLeft.addEventListener('click', moveLeft);
arrowLeft.addEventListener('click', moveRight)
arrowRight.addEventListener('click', moveLeft)

let inc = 0;

if(inc === 0){
  // arrowLeft.disabled = true;
  arrowRight.disabled = true
}

function moveRight(){
  inc++;
  // arrowLeft.disabled = false;
  arrowRight.disabled = false

   if(inc === 1){
    productsImages.style.transform = 'translateX(-348px)';
    productsImagesBefore.style.transform = 'translateX(-329px)';
   } 
  
  if(inc === 2){
    productsImages.style.transform = 'translateX(-116px)';
    productsImagesBefore.style.transform = 'translateX(-97px)';
  }
  if(inc === 3){
    productsImages.style.transform = 'translateX(116px)';
    productsImagesBefore.style.transform = 'translateX(135px)';
  }
  if(inc === 4){
    productsImages.style.transform = 'translateX(348px)';
    productsImagesBefore.style.transform = 'translateX(367px)';
  }
  if(inc === 5){
    productsImages.style.transform = 'translateX(580px)';
    productsImagesBefore.style.transform = 'translateX(599px)';
    arrowLeft.disabled = true
  }
  console.log(inc)
}

function moveLeft(){
  inc--;
  //arrowRight.disabled = false;
  arrowLeft.disabled = false;

  if(inc === 4){
    productsImages.style.transform = 'translateX(348px)';
    productsImagesBefore.style.transform = 'translateX(367px)';
  }
  if(inc === 3){
    productsImages.style.transform = 'translateX(116px)';
    productsImagesBefore.style.transform = 'translateX(135px)';
  }
  if(inc === 2){
    productsImages.style.transform = 'translateX(-116px)';
    productsImagesBefore.style.transform = 'translateX(-97px)';
  }
  if(inc === 1){
    productsImages.style.transform = 'translateX(-348px)';
    productsImagesBefore.style.transform = 'translateX(-329px)';
   }
   if(inc === 0){
    productsImages.style.transform = 'translateX(-580px)';
    productsImagesBefore.style.transform = 'translateX(-561px)';
    arrowRight.disabled = true
   }
   console.log(inc)
}

// Hamburger Menu
const hamburger = document.querySelector('.hamburger')

const hamLineTwo = document.querySelector('.ham-line-2')
const hamLineOne = document.querySelector('.ham-line-1')
const hamLineThree = document.querySelector('.ham-line-3')

const hamWrapper = document.querySelector('.ham-wrapper')
const hamburgerNav = document.querySelector('.hamburger-nav')

hamburger.addEventListener('click', toggleHamburger);

function toggleHamburger() {
  hamburger.classList.toggle('active');
  hamLineTwo.classList.toggle('active');
  hamLineOne.classList.toggle('active');
  hamLineThree.classList.toggle('active');

  hamWrapper.classList.toggle('active')
  hamburgerNav.classList.toggle('active')

  if(hamburgerNav.classList.contains('active')){
    chevronLeft.style.zIndex = '-1'
    chevronRight.style.zIndex = '-1'

    circleOne.style.zIndex = '-1'
    circleTwo.style.zIndex = '-1'
    circleThree.style.zIndex = '-1'
    circleFour.style.zIndex = '-1'
  } else {
    chevronLeft.style.zIndex = '1'
    chevronRight.style.zIndex = '1'

    circleOne.style.zIndex = '1'
    circleTwo.style.zIndex = '1'
    circleThree.style.zIndex = '1'
    circleFour.style.zIndex = '1'
  }
}

// Responsive Design
const navbarLogo = document.querySelector('.navbar-logo')

if(width <= 540){
//   navbarLogo.innerHTML = `<div class="logo">
//   <div class="logo-image">
//   <img src="./img/Logo.png" alt="" id="logo">
//   <img src="./img/Logo-piece-1.png" alt="" id="logo-piece-1">
//   <img src="./img/Logo-piece-2.png" alt="" id="logo-piece-2">
//   <img src="./img/Logo-piece-3.png" alt="" id="logo-piece-3">
//   </div>
//  <div class="logo-title">
//   <h2>DVG COMPANY</h2>
//   <h3>SUBOTICA</h3>
//  </div>
// </div>

// <div class="ham-lang" style="display:flex; flex-direction:column-reverse;">
// <div class="hamburger" onclick="toggleHam()"">
// <div class="ham-line ham-line-1"></div>
// <div class="ham-line ham-line-2"></div>
// <div class="ham-line ham-line-3"></div>
// </div> 

// <div class="languages">
// <a href="">Srpski</a>
// <a href="">English</a>
// <a href="">Magyar</a>
// </div>
// </div>
// `;

function toggleHam(){
  toggleHamburger()
  const hamburger = document.querySelector('.hamburger')
  const hamLineTwo = document.querySelector('.ham-line-2')
  const hamLineOne = document.querySelector('.ham-line-1')
  const hamLineThree = document.querySelector('.ham-line-3')

  hamburger.classList.toggle('active')
  hamLineTwo.classList.toggle('active');
  hamLineOne.classList.toggle('active');
  hamLineThree.classList.toggle('active');
}

  const dvgNumbers = document.querySelector('.dvg-in-numbers')
  dvgNumbers.children[1].classList.remove('border-right')

  const ourProductsText = document.querySelector('.our-products-text')
  ourProductsText.innerHTML = `<p>
  Nase Proizvode DVG Cosmetics odlikuje visok kvalitet kojim se dobija kompletna
  nega lica i tela. Uspeli smo da uskladimo kvalitet i cenu, sto su prepoznali i nasi
  kupci
      </p>`;
}

if(width <= 414){
  const dvgNumbers = document.querySelector('.dvg-in-numbers')
  dvgNumbers.children[0].classList.remove('border-right')
  dvgNumbers.children[2].classList.remove('border-right')
}

// Light Dark mode

const lightDarkBtn = document.querySelector('.light-dark-btn');
const body = document.querySelector('body')

lightDarkBtn.addEventListener('click', changeColorMode);

function changeColorMode(){
  lightDarkBtn.classList.toggle('dark')
  body.classList.toggle('dark')

  if(lightDarkBtn.classList.contains('dark')){
    lightDarkBtn.textContent = 'Light Mode'
  } else {
    lightDarkBtn.textContent = 'Dark Mode'
  }
}

// Scroll Effect
const modal = document.querySelector('.modal')
const modalBtn = document.querySelector('.modal-btn')
const xMark = document.getElementById('x-mark')

window.addEventListener('scroll', showModal)
modalBtn.addEventListener('click', removeModal)
xMark.addEventListener('click', removeModal)

let scrollInc = 0;

function showModal(){
  scrollInc++
  if(window.pageYOffset === 300 && scrollInc < 40){
    modal.classList.add('active')
  }

  if(modal.classList.contains('active')){
    window.scrollTo(0,0)
  }
}

function removeModal(){
  modal.classList.remove('active')
}
