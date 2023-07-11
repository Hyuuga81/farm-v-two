const bars = document.querySelector('.fa-bars');
const xmark = document.querySelector('.fa-xmark');
const overlay = document.querySelector('.overlay');

const showMenu = () => {
    if (overlay.classList.contains('hide')) {
        bars.classList.add('hide');
        xmark.classList.remove('hide');
        overlay.classList.remove('hide');
    } 
}

const hideMenu = () => {
    if (!overlay.classList.contains('hide')) {
        bars.classList.remove('hide');
        xmark.classList.add('hide');
        overlay.classList.add('hide');
    }
}

bars.addEventListener('click', showMenu);
xmark.addEventListener('click', hideMenu);