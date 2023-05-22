let menu = document.querySelector('.menu');
let navigation_bar = document.querySelector('.navigation-bar');
let close = document.querySelector('.close');

menu.addEventListener('click', () => {
    navigation_bar.style.right = "0px"
})
close.addEventListener('click', () => {
    navigation_bar.style.right = "-250px"
})