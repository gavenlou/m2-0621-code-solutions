var timer = setInterval(nextImage, 3000);

var leftArrow = document.querySelector('#left');
var rightArrow = document.querySelector('#right');

var dot0 = document.querySelector('#circle0');
var dot1 = document.querySelector('#circle1');
var dot2 = document.querySelector('#circle2');
var dot3 = document.querySelector('#circle3');
var dot4 = document.querySelector('#circle4');

var images = [
  { image: 'images/001.png', dot: dot0 },
  { image: 'images/004.png', dot: dot1 },
  { image: 'images/007.png', dot: dot2 },
  { image: 'images/025.png', dot: dot3 },
  { image: 'images/039.png', dot: dot4 }];

var next = 1;
var currentImage = document.querySelector('img');
var filledDot = "fas fa-solid fa-circle";
var empDot = "far fa-circle";

function nextImage(number) {
  if (number) {
    images[next - 1].dot.className = empDot;
    next = number;
    nextImage();
    clearInterval(timer);
    timer = setInterval(nextImage, 3000);
  }
  else if (next <= 4) {
    currentImage.src = images[next].image;
    images[next].dot.className = filledDot;
    if (next > 0) {
      images[next - 1].dot.className = empDot;
    }
    else images[4].dot.className = empDot;
    next++;
  }
  else {
    next = 0;
    nextImage();
  }
}

function back() {
  if (next > 1) {
    next -= 2;
    nextImage();
    images[next].dot.className = empDot;
  }
  clearInterval(timer);
  timer = setInterval(nextImage, 3000);
}

leftArrow.addEventListener('click', back);

function forward() {
  nextImage();
  clearInterval(timer);
  timer = setInterval(nextImage, 3000);
}

rightArrow.addEventListener('click', forward);

dot0.addEventListener('click', function () { nextImage(5) });
dot1.addEventListener('click', function () { nextImage(1) });
dot2.addEventListener('click', function () { nextImage(2) });
dot3.addEventListener('click', function () { nextImage(3) });
dot4.addEventListener('click', function () { nextImage(4) });
