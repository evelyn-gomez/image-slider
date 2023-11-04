const prev = document.querySelector(".prev"); 
const next = document.querySelector(".next"); 

const innerFrame = document.querySelector(".inner-frame"); 
// eslint-disable-next-line prefer-destructuring
const children = innerFrame.children;
const childrenArray = Array.from(children); 

function changeSlide(prevOrNext){
  const currentSlide = childrenArray.find(child => child.classList.contains("current"));
  currentSlide.classList.remove("current"); 
  currentSlide.classList.add("hide"); 
  let newCurrentSlideID; 

  if(prevOrNext.classList.contains("prev")){
    newCurrentSlideID =  String(Number(currentSlide.id ) - 1);
    if(Number(newCurrentSlideID) === 0){
      newCurrentSlideID = "4"; 
    }
    const prevSlide = childrenArray.find(child => child.id === newCurrentSlideID); 
    prevSlide.classList.remove("hide");
    prevSlide.classList.add("current");
  }else{
    newCurrentSlideID = String(Number(currentSlide.id) +1);
    if(Number(newCurrentSlideID) === 5){
      newCurrentSlideID = "1"; 
    }
    const nextSlide = childrenArray.find(child => child.id === newCurrentSlideID); 
    nextSlide.classList.remove("hide");
    nextSlide.classList.add("current");
  }

}

prev.addEventListener("click", ()=>{
  changeSlide(prev); 
  
})
next.addEventListener("click", ()=>{
  changeSlide(next); 
})