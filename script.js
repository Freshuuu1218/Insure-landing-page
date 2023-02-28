const menu = document.querySelector('#menu');
const nav = document.querySelector('nav');
const pIntro1 = document.querySelector('#pattern1');
const pIntro2 = document.querySelector('#pattern2');
const pHWW = document.querySelector('#pattern3');
const pFooter = document.querySelector('#pattern4');

menu.addEventListener('click',()=>{
    
    if(menu.getAttribute('src')== './images/icon-hamburger.svg'){
        menu.setAttribute('src', './images/icon-close.svg');
        nav.classList.remove('vanish');
    }else{
        menu.setAttribute('src', './images/icon-hamburger.svg');
        nav.classList.add('vanish');
    }
})

window.addEventListener('resize',()=>{
    if(window.innerWidth > 768){
        menu.style.display = 'none';
        nav.classList.remove('vanish');
        pIntro1.setAttribute('src', './images/bg-pattern-intro-left-desktop.svg')
        pIntro2.setAttribute('src', './images/bg-pattern-intro-right-desktop.svg')
        pHWW.setAttribute('src', './images/bg-pattern-how-we-work-desktop.svg')
        pFooter.setAttribute('src', './images/bg-pattern-footer-desktop.svg')
    }
    if(window.innerWidth < 768){
        menu.style.display = 'block';
        nav.classList.add('vanish');
        pIntro1.setAttribute('src', './images/bg-pattern-intro-left-mobile.svg')
        pIntro2.setAttribute('src', './images/bg-pattern-intro-right-mobile.svg')
        pHWW.setAttribute('src', './images/bg-pattern-how-we-work-mobile.svg')
        pFooter.setAttribute('src', './images/bg-pattern-footer-mobile.svg')
    }
})