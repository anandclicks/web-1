let slider = document.querySelector(".slider");
let menuBtn = document.querySelector(".menu-btn");


let i=0;
let body = document.querySelector("body")
menuBtn.addEventListener("click", function(){
    if(i==0) {
        slider.style.opacity = '1'
        body.style.overflow = 'hidden'
        i=1
    }
    else {
        slider.style.opacity = '0'
        body.style.overflow = 'auto'
        i=0;
    }
})
// form code 
let form = document.querySelector(".form");
let contactBtn = document.querySelector(".contactUs");
let contactBtn2 = document.querySelector(".contactUs2");
let needBtn = document.querySelector(".btn-1")

let k=0;
function openForm (){
    if(k==0){
        form.style.display = "block"
       }
}
contactBtn.addEventListener("click", openForm)
contactBtn2.addEventListener("click", openForm)

// close btn activate script 
let j=0;
let closeBtn= document.querySelector(".close-icon");
function closeForm (){
    if(j==0){
        form.style.display = "none"
    }
}

closeBtn.addEventListener("click", closeForm )
