let ham = document.querySelector('.hamburger');
let menu = document.querySelector('.sidebar');
ham.addEventListener('click', (e)=>{
    ham.classList.toggle('change');
    menu.classList.toggle('open');
});