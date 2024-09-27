let scrollContainer = document.querySelector(".gallery")
let backtbtn = document.querySelector("#backbtn")
let nextbtn = document.querySelector("#nextbtn")
scrollContainer.addEventListener("wheel" ,(event)=>{
    event.preventDefault();
    scrollContainer.style.scrollBehavior="auto"
    scrollContainer.scrollLeft += event.deltaY;

})
nextbtn.addEventListener("click",(event)=>{
    scrollContainer.style.scrollBehavior="smooth"
    scrollContainer.scrollLeft += 900;
})


backtbtn.addEventListener("click",(event)=>{
    scrollContainer.style.scrollBehavior="smooth"
    scrollContainer.scrollLeft -= 900;
})
