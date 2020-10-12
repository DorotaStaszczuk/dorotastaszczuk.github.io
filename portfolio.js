const jump = document.querySelector('.jump');
const header = document.querySelector('header');

window.onscroll = function () {
    displayLink();
    displayShadow();
};

function displayLink() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        jump.classList.remove('none');
    } else {
        jump.classList.add('none');
    }
}

function displayShadow() {
    if (document.body.scrollTop > 2 || document.documentElement.scrollTop > 2) {
        header.classList.add('header-scrolled');
    } else {
        header.classList.remove('header-scrolled');
    }
}
