var btn = document.querySelector('.burger__menu'),
    list = document.querySelector('.nav__item_list');

btn.addEventListener('click', () => {
    list.classList.toggle('active')
    list.style.transition = '0.4s';
})