const jump = document.querySelector('.jump');

window.onscroll = function () {
    displayLink();
};

function displayLink() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        jump.classList.remove('none');
    } else {
        jump.classList.add('none');
    }
}
