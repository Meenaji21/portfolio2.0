let prevscrollup = window.pageYOffset;
window.addEventListener('scroll',()=>{
    let currentScroll = window.pageYOffset;
    if(prevscrollup > currentScroll){
        document.querySelector('.sidebar').style.top = "0";
    }else{
        document.querySelector('.sidebar').style.top = "-120px";
    }
    prevscrollup = currentScroll;
});
// hide menubar while scrolling
