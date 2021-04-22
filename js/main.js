// import smoothscroll from 'smoothscroll-polyfill';

// smoothscroll.polyfill();

// window.SVGElement.prototype.scrollIntoView = (window.HTMLElement || window.Element).prototype.scrollIntoView;

// Add classes, when a burger is clicked on
const burger = document.querySelector('#burger');
const header = document.querySelector('#header');
const navbar = document.querySelector('#navbar');
const nav = document.querySelector('#nav');
const ham = document.querySelector('#effect');

burger.addEventListener('click', function () {
    header.classList.toggle('active');
    navbar.classList.toggle('active');
    nav.classList.toggle('active');
    ham.classList.toggle('active');
});
// Fixed header
window.addEventListener("scroll", checkScroll);
function checkScroll() {
    let scrollHeight = window.scrollY;

    if (scrollHeight > 490) {
        header.classList.add("fixed");
    } else {
        header.classList.remove("fixed");
    };
};;
// When width display > 770px - all classes for burger - DISABLE 
onload = function () {
    widthMenu();
}

window.onresize = function () {
    widthMenu();
}

function widthMenu() {
    let width = window.innerWidth;

    if (width > 770) {
        document.getElementById('header').classList.remove("active");
        document.getElementById('burger').classList.remove("active");
        document.getElementById('navbar').classList.remove("active");
        document.getElementById('nav').classList.remove("active");
        document.getElementById('effect').classList.remove("active");
    }
};
// Smooth scroll
const links = document.querySelectorAll('a[href*="#"], [href*="#"]');

for (let link of links) {
    link.addEventListener('click', function (e) {
        e.preventDefault()

        const scrollSmooth = link.getAttribute('href').substr(1)

        document.getElementById(scrollSmooth).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })

        // Disable burger menu, when smooth scroll
        header.classList.remove('active');
        navbar.classList.remove('active');
        nav.classList.remove('active');
        ham.classList.remove('active');
    })
}
;
const modalLinks = document.querySelectorAll('.modal-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');

let unlock = true;

const timeout = 700;
if (modalLinks.length > 0) {
    for (let i = 0; i < modalLinks.length; i++) {
        const modalLink = modalLinks[i];
        modalLink.addEventListener('click', function (e) {
            const modalName = modalLink.getAttribute('href').replace('#', '');
            const currentModal = document.getElementById(modalName);
            modalOpen(currentModal);
            e.preventDefault();
        });
    }
}
const modalCloseIcon = document.querySelectorAll('.close-modal');
if (modalCloseIcon.length > 0) {
    for (let i = 0; i < modalCloseIcon.length; i++) {
        const el = modalCloseIcon[i];
        el.addEventListener('click', function (e) {
            modalClose(el.closest('.modal'));
            e.preventDefault();
        });
    }
}

function modalOpen(currentModal) {
    if (currentModal && unlock) {
        const modalActive = document.querySelector('.modal.open');
        if (modalActive) {
            modalClose(modalActive, false);
        } else {
            bodyLock();
        }
        currentModal.classList.add('open');
        currentModal.addEventListener('click', function (e) {
            if (!e.target.closest('.match')) {
                modalClose(e.target.closest('.modal'));
            }
        });
    }
}
function modalClose(modalActive, doUnlock = true) {
    if (unlock) {
        modalActive.classList.remove('open');
        if (doUnlock) {
            bodyUnLock();
        }
    }
}

function bodyLock() {
    const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

    for (let i = 0; i < lockPadding.length; i++) {
        const el = lockPadding[i];
        el.style.paddingRight = lockPaddingValue;
    }
    body.style.paddingRight = lockPaddingValue;
    body.classList.add('lock');

    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout);
}

function bodyUnLock() {
    setTimeout(function () {
        if (lockPadding.length > 0) {
            for (let i = 0; i < lockPadding.length; i++) {
                const el = lockPadding[i];
                el.style.paddingRight = '0px';
            }
        }
        body.style.paddingRight = '0';
        body.classList.remove('lock');
    }, timeout);

    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout);
}

// Close Modal-Window by button ESC
document.addEventListener('keydown', function (e) {
    if (e.which === 27) {
        const modalActive = document.querySelector('.modal.open');
        modalClose(modalActive);
    }
});

// Polyfill for IE11
(function () {
    // checking support
    if (!Element.prototype.closest) {
        // implement
        Element.prototype.closest = function (css) {
            var node = this;
            while (node) {
                if (node.matches(css)) return node;
                else node = node.parentElement;
            }
            return null;
        };
    }
})();
(function () {
    // checking support
    if (!Element.prototype.matches) {
        // send value
        Element.prototype.matches = Element.prototype.matchesSelector ||
            Element.prototype.webkitMatchesSelector ||
            Element.prototype.mozMatchesSelector ||
            Element.prototype.msMatchesSelector;
    }
})();;

// import smoothscroll from 'smoothscroll-polyfill';
// kick off the polyfill!
// smoothscroll.polyfill(); 