let myrightsid = document.querySelector(".r");
let myleftside = document.querySelector(".l");
let mypromo = document.querySelectorAll(".pro");
let counter = 0;
let theTimeIcon = document.querySelector('.fa-times');
let theCogIcon = document.querySelector(".fa-cog")
let theSetting = document.querySelector(".setting");
let thecontainer = document.querySelector(".cotianer")
let theNumber = document.querySelectorAll(".number");
let theIncrementIcon = document.querySelectorAll(".fa-angle-down");
let theAdditionIcon = document.querySelectorAll(".fa-angle-up");
let theButton =document.querySelector("button");
let theCircle = document.querySelector(".cicle");
let playAnimation = document.querySelector(".cicle span");
let animationTime = document.querySelector(".time");
let theListClass = ["red","green","blue"]
let listColor = ["rgb(246 112 113)","rgb(112 242 245)","rgb(214 130 244)"];
let fontList = ["'Poppins', sans-serif","monospace","cursive"];
let colorArray = document.querySelectorAll(".color div")
let choiceColor = document.querySelectorAll(".color .fas");
let FontChoice = document.querySelectorAll(".ft");
let myNmArray = Array.from(mypromo);
let mysong = document.querySelector("audio");
let thecountdown;
let theactive = document.querySelector(".active")
// function start
window.onload = function () {
    for (let n = 0; n < 3; n++) {
  mypromo[n].dataset.number = parseInt( theNumber[n].textContent * 60)
        
    }
    animationTime.innerHTML = "";
  animationTime.innerHTML = `${theactive.dataset.number / 60}:00`
}
function addHide () {
    theSetting.classList.add("hide")
}
// ####################################################################################################################################
theTimeIcon.onclick = addHide;
// ####################################################################################################################################
function adtheHide() {
    let theIconArray = Array.from(choiceColor);
    theIconArray.forEach((ic) =>{
        ic.classList.add("hide");
    }
    )
}
// ####################################################################################################################################
function choiceSettng() {
    for (let a = 0; a < colorArray.length; a++) {
       colorArray[a].onclick = function () {
        adtheHide()
        choiceColor[a].classList.remove("hide")
        theButton.addEventListener("click",()=>{
            cArray = Array.from(colorArray)
            cArray.forEach(ca => {
                ca.classList.remove("selected")
                
            });
            colorArray[a].classList.add("selected")})
          
          
        theButton.addEventListener("click",function () {
            myleftside.style.backgroundColor = listColor[a];
            myrightsid.style.backgroundColor = listColor[a];
            theButton.style.backgroundColor = listColor[a]
            theCogIcon.onmouseover = function(){
                theCogIcon.style.color = listColor[a]
            }
            theCogIcon.addEventListener("mouseleave", function(){
                theCogIcon.style.color = "rgb(95, 97, 99)";
            })
              
           
        })
       
       }
       FontChoice[a].onclick = function () {
           let theFontArray = Array.from(FontChoice);
           theFontArray.forEach((ft) => {ft.classList.remove("black")})
           FontChoice[a].classList.add("black")
           theButton.addEventListener("click",function () {
            thecontainer.style.fontFamily = fontList[a];
           })
       }  
}
 };

// ####################################################################################################################################
theCogIcon.onclick = function () {
    theSetting.classList.remove("hide")
}
// ####################################################################################################################################
function removeAllActive() {
    
    myNmArray.forEach((pro)=>{ pro.classList.remove('red','green','blue',"active")});
  
}
// ####################################################################################################################################
function addMin() {
    for (let i = 0; i < theIncrementIcon.length; i++) {
 // ####################################################################################################################################
       theAdditionIcon[i].onclick = function () {
           let counter = parseInt(theNumber[i].textContent);
             counter++;
            theNumber[i].innerHTML = counter; 
       }
       theIncrementIcon[i].onclick = function () {
        let counter = parseInt(theNumber[i].textContent);
        if (counter > 0) {
          
            counter--;
            theNumber[i].innerHTML = counter;
        }else{
            return false
        }
       
    }
    theButton.addEventListener("click",function(){mypromo[i].dataset.number = parseInt( theNumber[i].textContent * 60);})
 
   // #################################################################################################################################### 
    mypromo[i].onclick = function () {
    let theSelected = document.querySelector(".selected")
    mysong.pause();
    clearInterval(thecountdown)
        thecountdown = -1;
    thetime =  parseInt(mypromo[i].dataset.number) ;
    let minutes = Math.floor(thetime / 60);
    let secondes = thetime % 60;
        if (secondes < 10) {
            animationTime.innerHTML = `${minutes}:0${secondes}`

        }else{ animationTime.innerHTML = `${minutes}:${secondes}`
    }
      removeAllActive();
      mypromo[i].classList.add("active")
      mypromo[i].classList.add(theSelected.classList[0]);
      myrightsid.classList.remove("right");
      myleftside.classList.remove("left");
      myleftside.classList.add("pause");
      myrightsid.classList.add("pause");
  
       }
      // ####################################################################################################################################
     }
     }
     theButton.onclick = function(){
        myrightsid.classList.remove("right");
        myleftside.classList.remove("left");
        addHide();
        removeAllActive();           
        }
choiceSettng();

addMin();


thecountdown = -1
    theCircle.addEventListener("click",function(){
        
        let theactive = document.querySelector(".active")
        myleftside.classList.toggle("pause");
        myrightsid.classList.toggle("pause");
      
        if (myleftside.classList.contains("pause")) {
            playAnimation.innerHTML = "";
            playAnimation.innerHTML = "pause"
          
        }else{
            playAnimation.innerHTML = ""
            playAnimation.innerHTML = "play"
         
        }
        myrightsid.classList.add("right");
        myleftside.classList.add("left");
    
        let thetime =  parseInt(theactive.dataset.number);
        myrightsid.style.animationDuration = `${parseInt(thetime)/ 2}s`;
        myleftside.style.animationDuration = `${parseInt(thetime)}s`;
     
            
      if ( thecountdown == -1) {
        thecountdown = setInterval(() => {
            
            
           
          thetime--;
          theactive.dataset.number = thetime;
            let minutes = Math.floor(thetime / 60);
            let secondes = thetime % 60;
            if (  parseInt(theactive.dataset.number) <= 0) {
                clearInterval(thecountdown)
               mysong.play();
            }
                if (secondes < 10) {
                    animationTime.innerHTML = `${minutes}:0${secondes}`
    
                }else{ animationTime.innerHTML = `${minutes}:${secondes}`
            }
          
            
          
        
    }, 1000); 
      }else{
        clearInterval(thecountdown)
        thecountdown = -1
   
    }
   
      for (let b = 0; b < 3; b++) {
          mypromo[b].addEventListener("click",function () {
            
                clearInterval(thecountdown)
              
          })
          
      }
  
          
        })
        

    
  
