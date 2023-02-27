const menu = document.querySelector('#menu');
const nav = document.querySelector('nav');
menu.addEventListener('click',()=>{
    
    if(menu.getAttribute('src')== './images/icon-hamburger.svg'){
        menu.setAttribute('src', './images/icon-close.svg');
        nav.classList.remove('vanish');
    }else{
        menu.setAttribute('src', './images/icon-hamburger.svg');
        nav.classList.add('vanish');
    }
})