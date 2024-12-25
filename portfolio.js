const jump = document.querySelector('.jump');
const header = document.querySelector('header');
const menuLink = document.querySelector('.menu-link');
const menuList = document.querySelector('.menu-list');
const copyButton = document.querySelector('.copy-button');
const email = document.querySelector('.email');
let emailText = email.textContent;

window.onload = function() {
    document.body.className += " loaded";
}

window.onscroll = function() {
    displayLink();
    displayShadow();
}

menuLink.onclick = function() {
    displayDropdown();
}

window.onclick = function(event) {
    if (!event.target.matches('.menu-link') & !event.target.matches('.menu') & (menuList.classList.contains('show'))) {
            menuList.classList.remove('show');
    }
}

copyButton.onclick = function() {
    copyEmail();
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

function copyEmail() {
    navigator.clipboard.writeText(emailText).then(function() {
        alert("Email copied successfully");
      }, function() {
        alert("Email not copied");
      });
}

if ('IntersectionObserver' in window) {

    let callback = (entries, observer) => {
        entries.forEach(entry => {
            entry.target.classList.add('opacity-off');
            if(entry.isIntersecting) {
                entry.target.classList.add('slide-start');
                observer.unobserve(entry.target);
            }
        });
    };

    let options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    }

    let observer = new IntersectionObserver(callback, options);

    let targets = document.querySelectorAll('.slide-up');
    targets.forEach(target => observer.observe(target));


    let sectionCallback = (entries) => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute('id');
        if (entry.intersectionRatio > 0.1) {
            document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.add('active');
        } else {
            document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.remove('active');
        }
        });
    };

    let sectionOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    }

    let sectionObserver = new IntersectionObserver(sectionCallback, sectionOptions);

    let sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => sectionObserver.observe(section));
}

    const currentYear  = document.querySelector('.current-year');
    const date = new Date();
    currentYear.innerText = date.getFullYear();