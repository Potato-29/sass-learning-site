const menu_btn = document.querySelector('.menu-btn')
const hamburger = document.querySelector('.menu-btn__burger')
const nav = document.querySelector('.nav')
const menuNav = document.querySelector('.menu-nav')
const item = document.querySelectorAll('.menu-nav__item')
const desc = document.querySelector('.desc')
const jobs =  document.querySelector('.jobs__job')

let showMenu = false;







toggleMenu = () => {
    if (!showMenu) {
        hamburger.classList.add('open')
        nav.classList.add('open')
        menuNav.classList.add('open')
        item.forEach(item => item.classList.add('open'))
        showMenu = true;
    } else {
        hamburger.classList.remove('open')
        nav.classList.remove('open')
        menuNav.classList.remove('open')
        item.forEach(item => item.classList.remove('open'))

        showMenu = false;
    }
}

menu_btn.addEventListener('click', toggleMenu)

