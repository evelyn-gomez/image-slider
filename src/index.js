class ImageSlider {
  constructor(frame, {images = []} = []){
    this.frame = frame;  
    this.images = images;
  }
}

const frame =  document.querySelector(".frame");
const imagesElem = Array.from(document.querySelector('.frame').children) 

const imageSlider = new ImageSlider(frame, imagesElem); 
console.log(imageSlider);