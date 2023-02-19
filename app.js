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
const productsImagesBefore = document.querySelector('.products-images-before');

arrowRight.addEventListener('click', moveRight)
arrowLeft.addEventListener('click', moveLeft)

let inc = 0;

if(inc === 0){
   arrowLeft.disabled = true;
}

function moveRight(){
  inc++;
  arrowLeft.disabled = false

   if(inc === 1){
    productsImages.style.transform = 'translateX(366px)';
    productsImagesBefore.style.transform = 'translateX(378px)';
   } 
  
  if(inc === 2){
    productsImages.style.transform = 'translateX(116px)';
    productsImagesBefore.style.transform = 'translateX(128px)';
  }
  if(inc === 3){
    productsImages.style.transform = 'translateX(-134px)';
    productsImagesBefore.style.transform = 'translateX(-118px)';
  }
  if(inc === 4){
    productsImages.style.transform = 'translateX(-384px)';
    productsImagesBefore.style.transform = 'translateX(-368px)';
  }
  if(inc === 5){
    productsImages.style.transform = 'translateX(-634px)';
    productsImagesBefore.style.transform = 'translateX(-618px)';
    arrowRight.disabled = true
  }

  if(inc === 5){
    productsImages.style.marginLeft = '24px'
  } else {
    productsImages.style.marginLeft = '16px'
  }
}

function moveLeft(){
  inc--;
  arrowRight.disabled = false;

  if(inc === 4){
    productsImages.style.transform = 'translateX(-384px)';
    productsImagesBefore.style.transform = 'translateX(-368px)';
    productsImages.style.marginLeft = '16px';
  }
  if(inc === 3){
    productsImages.style.transform = 'translateX(-134px)';
    productsImagesBefore.style.transform = 'translateX(-118px)';
  }
  if(inc === 2){
    productsImages.style.transform = 'translateX(116px)';
    productsImagesBefore.style.transform = 'translateX(128px)';
  }
  if(inc === 1){
    productsImages.style.transform = 'translateX(366px)';
    productsImagesBefore.style.transform = 'translateX(378px)';
   }
   if(inc === 0){
    productsImages.style.transform = 'translateX(616px)';
    productsImagesBefore.style.transform = 'translateX(628px)';
    arrowLeft.disabled = true
   }
}

// Hamburger Menu
const hamburger = document.querySelector('.hamburger')

const hamLineTwo = document.querySelector('.ham-line-2')
const hamLineOne = document.querySelector('.ham-line-1')
const hamLineThree = document.querySelector('.ham-line-3')

const hamburgerNav = document.querySelector('.hamburger-nav')

hamburger.addEventListener('click', toggleHamburger);

function toggleHamburger() {
  hamburger.classList.toggle('active');
  hamLineTwo.classList.toggle('active');
  hamLineOne.classList.toggle('active');
  hamLineThree.classList.toggle('active');

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

if(width <= 573){
  const dvgNumbers = document.querySelector('.dvg-in-numbers')
  dvgNumbers.children[0].classList.remove('border-right')
  dvgNumbers.children[1].classList.remove('border-right')
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
  if(window.pageYOffset === 300 && scrollInc === 0){
    modal.classList.add('active')
  }

  if(modal.classList.contains('active')){
    window.scrollTo(0,0)
    hamburger.classList.remove('active');
    hamLineTwo.classList.remove('active');
    hamLineOne.classList.remove('active');
    hamLineThree.classList.remove('active');
    hamburgerNav.classList.remove('active');
  }
}

function removeModal(){
  scrollInc++
  modal.classList.remove('active')
}
