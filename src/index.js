import Slider from "./slider";
import springImg from "./images/spring_sergey-shmidt-koy6FlCCy5s-unsplash.jpg";
import summerImg from "./images/summer_mike-swigunski-ueBmz9K8zTg-unsplash.jpg";
import fallImg from "./images/fall_johannes-plenio-RwHv7LgeC7s-unsplash.jpg";
import winterImg from "./images/winter_adam-chang-IWenq-4JHqo-unsplash.jpg";

const slideContent = [
   {
    slideNum: "1/4",
    slideImgSrc: springImg, 
    slideImgAlt: "field of yellow tulips -1",
    slideText: `Spring: Photo by Sergey Shmidt on Unsplashed`, 
    navDotClass: "one"
  },
  {
    slideNum: "2/4",
    slideImgSrc: summerImg, 
    slideImgAlt: "sandy beach with palm trees",
    slideText: "Summer: Photo by Mike Swigunski on Unsplash", 
    navDotClass: "two",
  },
  {
    slideNum: "3/4",
    slideImgSrc: fallImg,
    slideImgAlt: "autumn trees in a forest",
    slideText: "Fall: Photo by Johannes Plenio on Unsplash ", 
    navDotClass: "three",
  },
  {
    slideNum: "4/4",
    slideImgSrc: winterImg, 
    slideImgAlt: "lake surrounded by snow",
    slideText: "Winter: Photo by Adam Chang on Unsplash", 
    navDotClass: "four",
  }
]
document.addEventListener("DOMContentLoaded", ()=>{
  const innerFrame = document.querySelector(".inner-frame"); 
  const next = document.querySelector(".next"); 
  const slider = new Slider(slideContent, innerFrame);
  const slidesArray = slider.createSlides();
  slider.eListeners(slidesArray); 
  setInterval(()=>{
    slider.changeSlide(next,slidesArray); 
  }, 3000); 
 
})