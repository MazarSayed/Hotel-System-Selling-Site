const Mazar = document.querySelector('.header .navigation-bar .navigation-list .Mazar');
const mobile_menu = document.querySelector('.header .navigation-bar .navigation-list ul');
const menu_item = document.querySelectorAll('.header .navigation-bar .navigation-list ul li a');
const header = document.querySelector('.header.container');

Mazar.addEventListener('click', () => {
    Mazar.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if (scroll_position > 250) {
        header.style.backgroundColor = '#29323c';
    } else {
        header.style.backgroundColor = 'transparent';
    }
});

menu_item.forEach((item) => {
    item.addEventListener('click', () => {
        Mazar.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });
});