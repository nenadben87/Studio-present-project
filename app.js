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

arrowRight.addEventListener('click', moveRight);
arrowLeft.addEventListener('click', moveLeft);

let inc = 0;

if(inc === 0){
  arrowLeft.disabled = true;
}

function moveRight(){
  inc++;
  arrowLeft.disabled = false;

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
    arrowRight.disabled = true
  }
}

function moveLeft(){
  inc--;
  arrowRight.disabled = false;

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
    arrowLeft.disabled = true
   }
}

// Hamburger Menu
const hamburger = document.querySelector('.hamburger')
const hamLineTwo = document.querySelector('.ham-line-2')

hamburger.addEventListener('click', toggleHamburger);

function toggleHamburger() {
  hamburger.classList.toggle('active');
  hamLineTwo.classList.toggle('active');
}
