var active3= document.querySelector(".active3");
var clickanimation = document.querySelector(".click-animation");
var active = document.querySelector(".active");
var active1 = document.querySelector(".active1");
var active2 = document.querySelector(".active2");
active.addEventListener("click",function(){
    active.style.color = "white"
    active1.style.color = "#000000"
    active2.style.color = "#000000"
    clickanimation.style.width = "31%"
    clickanimation.style.left = "15.1%"
    })
active1.addEventListener("click",function(){
    active1.style.color = "white"
    active.style.color = " #000000"
    active2.style.color = "#000000"
    clickanimation.style.width = "33%"
    clickanimation.style.left = "45.3%"
    })
active2.addEventListener("click",function(){
    active2.style.color = "white"
    active1.style.color = "#000000"
    active.style.color = " #000000"
    clickanimation.style.width = "21%"
    clickanimation.style.left = "78%"
    })
active3.addEventListener("click",function(){
    clickanimation.style.left = "-100%"
    active1.style.color = "#000000"
    active.style.color = " #000000"
    active2.style.color = " #000000"

})
