const menu = document.querySelector('.menu'),
    menuLink = document.querySelectorAll('.menu__link'),
    logo = document.querySelector('.logo'),
    main = document.querySelector('main'),
    menuToggle = document.querySelector('.menu__toggle');

/* Toggle Menu */
menuToggle.addEventListener('click', ()=>{
    menu.classList.toggle('show-menu')
})

/* Remove Menu on Click */
function linkAction() {
    menu.classList.remove('show-menu');
}
menuLink.forEach(n => n.addEventListener('click', linkAction));
logo.addEventListener('click', ()=>{
    menu.classList.remove('show-menu');
})
main.addEventListener('click', ()=>{
    menu.classList.remove('show-menu')
})