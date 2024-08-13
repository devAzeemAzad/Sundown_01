var projects_body = document.querySelector(".projects-body")
var fixed = document.querySelector(".fixed-image")
projects_body.addEventListener("mouseenter",function(){
    fixed.style.display = "block"
})
projects_body.addEventListener("mouseleave",function(){
    fixed.style.display = "none"
})


var project1 = document.querySelectorAll("#project-1");
project1.forEach(function(e) {
    console.log(e)
    e.addEventListener("mouseenter",function(){
    var image = e.getAttribute("data-image") 
    fixed.style.backgroundImage = `url(${image})`
    })
})



var click = document.querySelector(".click-function");
var redslider = document.querySelector(".red-slider");
var click1 = document.querySelector(".click-function1");
var containerp = document.querySelector(".container-p");
var containerrightimg = document.querySelector(".container-right-img");
var click2 = document.querySelector(".click-function2");
click.addEventListener("click",function(){
    click.style.opacity = "1"
    click1.style.opacity = "0.5"
    click2.style.opacity = "0.5"
    redslider.style.top = "0"
    containerp.textContent = "Our team works with our clients to refine an idea and concept into an executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end-to-end design solutions from concept, design, and architectural drawings to 3D renderings."
    click.style.transition = "all ease-in-out 0.2s"
})
click1.addEventListener("click",function(){
    click1.style.opacity = "1"
    click.style.opacity = "0.5"
    redslider.style.top = "35%"
    containerp.textContent = "Once we have a design, our production team takes the lead in bringing it to life. We manage all stages of the project, from build specifications and technical drawings to site surveys, vendor management, and 2D & 3D production. We have an extensive network of partners to meet each unique design and project need."
    click2.style.opacity = "0.5"
    click1.style.transition = "all ease-in-out 0.2s"
})
click2.addEventListener("click",function(){
    click2.style.opacity = "1"
    click1.style.opacity = "0.5"
    redslider.style.top = "70%"
    click.style.opacity = "0.5"
    containerp.textContent = "We’re with you every step of the way, from the project initiation to launch day. Our production and design teams are onsite to direct and guide the process down to the last point of completion, ensuring success across the built space and experience."
    click2.style.transition = "all ease-in-out 0.2s"
})


var containerimage = document.querySelector(".container-image");
var containerrightimg = document.querySelector(".container-right");
var idclick= document.querySelectorAll("#click-function");
idclick.forEach(function(e) {
    e.addEventListener("click",function(){
        containerrightimg.style.borderRadius = "25px"
        containerimage.style.display = "none"
        containerrightimg.style.transition = "all ease-in-out 0.2s"
        containerrightimg.style.backgroundImage = `url(${e.getAttribute("data-image1")})`
    })
})
var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: false,
    spaceBetween: 25,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

var footerlefth2 = document.querySelectorAll(".footer-head-left-h2");
footerlefth2.forEach(function(e) {
    e.addEventListener("mouseenter",function(){
        e.style.opacity = "0.5"
})
})
var footerline= document.querySelector(".footer-line");
var insta = document.querySelectorAll(".insta");
insta.forEach(function(e) {
    e.addEventListener("mouseenter",function(){
        footerline.style.opacity = "0.1"
})
})