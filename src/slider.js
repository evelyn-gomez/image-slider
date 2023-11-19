// import prevLeft from "./images/chevron_left_FILL0_wght400_GRAD0_opsz24.svg"; 

export default class Slider{
  /**
   * 
   * @param {Object[Object{}]} slideContent 
   * @param {Element} frame 
   */
  constructor(slideContent, frame){
    this.slideContent = slideContent; 
    this.frame = frame; 
    this.dotsElem = document.querySelector('.nav-dots');
  }

  createSlide(slide){
    const season = this.slideContent[slide-1]; 
    const pElem = document.createElement("div");
    const numElem = document.createElement("div");
    const imgElem = new Image(); 
    const textElem = document.createElement("div"); 
  
    pElem.classList.add("slide");
    pElem.classList.add(season.navDotClass); 
    pElem.id = String(slide);
  
    numElem.classList.add("slide-number");
    numElem.textContent = season.slideNum; 
  
    imgElem.src = season.slideImgSrc; 
    imgElem.alt = season.slideImgAlt; 
  
    textElem.classList.add("slide-text");
    textElem.textContent = season.slideText; 

  
    pElem.appendChild(numElem);
    pElem.appendChild(imgElem);
    pElem.appendChild(textElem); 
    
    return pElem; 
  }

  setDot(seasonElem){
    const dotClass = seasonElem.classList; 
    const childrenDots = Array.from(this.dotsElem.children); 
    for(const dot of childrenDots){
      if(dot.classList.contains("active-dot")){
        dot.classList.remove("active-dot");
        dot.classList.add("inactive-dot"); 
      }
    }
    const dot = childrenDots.find(child => child.classList.contains(dotClass[1]));
    dot.classList.remove("inactive-dot");
    dot.classList.add("active-dot");
  }

  createSlides(){
    const spring = this.createSlide(1); 
    const summer = this.createSlide(2);
    const fall = this.createSlide(3); 
    const winter = this.createSlide(4); 

    this.setDot(spring); 

    spring.classList.add("current"); 
    summer.classList.add("hide");
    fall.classList.add("hide");
    winter.classList.add("hide"); 
  
    this.frame.appendChild(spring);
    this.frame.appendChild(summer);
    this.frame.appendChild(fall);
    this.frame.appendChild(winter);

    return [spring,summer,fall,winter] 
  }

  changeSlide(elemRequesting, slidesArray){
    const currentSlide = slidesArray.find(child => child.classList.contains("current"));
    currentSlide.classList.remove("current"); 
    currentSlide.classList.add("hide"); 
    let newCurrentSlideID; 
    let iteratorSlide; 
  
    if(elemRequesting.classList.contains("prev") ||elemRequesting.classList.contains("next")){
      if(elemRequesting.classList.contains("prev")){
        newCurrentSlideID =  String(Number(currentSlide.id ) - 1);
        if(Number(newCurrentSlideID) === 0){
          newCurrentSlideID = "4"; 
        }
      }else{
        newCurrentSlideID = String(Number(currentSlide.id) +1);
        if(Number(newCurrentSlideID) === 5){
          newCurrentSlideID = "1"; 
        }
      }
       iteratorSlide = slidesArray.find(child => child.id === newCurrentSlideID); 
      
    }if(elemRequesting.classList.contains("inactive-dot") || elemRequesting.classList.contains("active-dot")){
      if(elemRequesting.classList.contains("active-dot")){
        return alert("already viewing");
      }
      const elemRequestingClass = Array.from(elemRequesting.classList).find(classItem => classItem !== "inactive-dot"); 
      iteratorSlide = slidesArray.find(slide => slide.classList.contains(elemRequestingClass));
    }
    this.setDot(iteratorSlide)
    iteratorSlide.classList.remove("hide");
    iteratorSlide.classList.add("current");
  }

  eListeners(slidesArray){
    const prev = document.querySelector(".prev"); 
    const next = document.querySelector(".next"); 
    const childrenDots = Array.from(this.dotsElem.children); 
    for(const dot of childrenDots){
      dot.addEventListener("click", ()=>{
        this.changeSlide(dot, slidesArray)
      })
    }
    prev.addEventListener("click", ()=>{
      this.changeSlide(prev,slidesArray); 
      
    })
    next.addEventListener("click", ()=>{
      this.changeSlide(next,slidesArray); 
    });
  }
}
