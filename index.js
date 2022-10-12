// hambuger icon code///////
let menu = document.querySelector('.menubar');
let ham = document.querySelector('.hamburger');

ham.addEventListener('click', (x)=>{
    ham.classList.toggle("change");
    menu.classList.toggle("close");
});
// hambuger icon code end////

let prevscrollup = window.pageYOffset;
window.addEventListener('scroll',()=>{
    let currentScroll = window.pageYOffset;
    if(prevscrollup > currentScroll){
        document.querySelector('.menubar').style.top = "0";
    }else{
        document.querySelector('.menubar').style.top = "-120px";
    }
    prevscrollup = currentScroll;
});
// hide menubar while scrolling