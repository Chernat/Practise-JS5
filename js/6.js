var slider = [{image: 'car.jpg', alt: 'Car'}, {image: 'apple.jpg', alt: 'Apple'}],
    currentSlide = 0;

console.log(nextSlide());
console.log(previosSlide());
console.log(slideNum(1));
console.log(currentSlideInfo());
console.log(addSlide('man.jpg', 'Man'))
console.log(deletSlide(2));

function nextSlide() {
  if (currentSlide < slider.length - 1) {
    currentSlide++;
  } else {
    currentSlide = 0;
  }

  return slider[currentSlide];
}

function previosSlide() {
  if (currentSlide >= slider.length - 1) {
    currentSlide--;
  } else {
    currentSlide = slider.length - 1;
  }

  return slider[currentSlide];
}

function slideNum(num) {
  if (num > slider.length - 1) {
    console.log('failed slider number')
  } else {
    currentSlide = num;
  }

  return slider[currentSlide];
}

function currentSlideInfo() {
  return slider[currentSlide];
}

function addSlide(a, b) {
  slider.push({image: a, alt: b});
  return slider;
}

function deletSlide(num) {
  if (num > slider.length - 1) {
    console.log('failed number');
  } else {
    slider.splice(slider.indexOf(num), 1);
  }

  return slider;
}
