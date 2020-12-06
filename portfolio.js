const jump = document.querySelector('.jump');
const header = document.querySelector('header');
const menuLink = document.querySelector('.menu-link');
const menuList = document.querySelector('.menu-list');

window.onload = function() {
    document.body.className += " loaded";
}

window.onscroll = function() {
    displayLink();
    displayShadow();
};

menuLink.onclick = function() {
    displayDropdown();
}

window.onclick = function(event) {
    if (!event.target.matches('.menu-link') & !event.target.matches('.menu') & (menuList.classList.contains('show'))) {
            menuList.classList.remove('show');
    }
}

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

function displayDropdown() {
    menuList.classList.toggle("show");
  }
