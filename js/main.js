function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

    if (support == true) {
        document.querySelector('body').classList.add('webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
    }
})


// Add classes, when a burger is clicked on
const burger = document.querySelector('#burger');
const header = document.querySelector('#header');
const menu = document.querySelector('#menu');
const navLinks = document.querySelector('#navLinks');
const ham = document.querySelector('#effect');

burger.addEventListener('click', function () {
    header.classList.toggle('active');
    menu.classList.toggle('active');
    navLinks.classList.toggle('active');
    ham.classList.toggle('active');
});
// Fixed navigation
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
        document.getElementById('menu').classList.remove("active");
        document.getElementById('navLinks').classList.remove("active");
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
        menu.classList.remove('active');
        navLinks.classList.remove('active');
        ham.classList.remove('active');
    })
}
;
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');

let unlock = true;
const timeout = 700;

const windowModal = document.querySelectorAll('.window__modal');
if (windowModal.length > 0) {
    for (let i = 0; i < windowModal.length; i++) {
        const openModal = windowModal[i];
        openModal.addEventListener('click', function (e) {
            const modalReplace = openModal.getAttribute('href').replace('#', '');
            const currentModal = document.getElementById(modalReplace);
            modalOpen(currentModal);
            e.preventDefault();
        });
    }
}
const windowModalDisable = document.querySelectorAll('.modal__disable');
if (windowModalDisable.length > 0) {
    for (let i = 0; i < windowModalDisable.length; i++) {
        const el = windowModalDisable[i];
        el.addEventListener('click', function (e) {
            modalClose(el.closest('.modal'));
            e.preventDefault();
        });
    }
}

function modalOpen(currentModal) {
    if (currentModal && unlock) {
        const modalActive = document.querySelector('.modal.active');
        if (modalActive) {
            modalClose(modalActive, false);
        } else {
            bodyLock();
        }
        currentModal.classList.add('active');
        currentModal.addEventListener('click', function (e) {
            if (!e.target.closest('.modal__inner')) {
                modalClose(e.target.closest('.modal'));
            }
        });
    }
}
function modalClose(modalActive, doUnlock = true) {
    if (unlock) {
        modalActive.classList.remove('active');
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
        const modalActive = document.querySelector('.modal.active');
        modalClose(modalActive);
    }
});;
anychart.onDocumentReady(function () {
    // ----- The first pie -----
    // set the data
    var data = [{
        x: "Chelsea",
        value: 58,
        normal: {
            fill: "#0400B6"
        }
    },
    {
        x: "Atletico Madrid",
        value: 42,
        normal: {
            fill: "#E40E0E"
        }
    }]
    // create the chart
    var chart = anychart.pie()
    chart.background().stroke("3 #0c1149")
    chart.background().fill({
        keys: ["#fff"],
        angle: 130,
    })
    // set the chart title
    chart.title("Who is the winner?")
    // add the data
    chart.data(data)
    // display the chart in the container
    chart.container('atl-che_winner')
    chart.draw()


    // ----- The second pie -----
    // set the data
    var data = [{
        x: "Yes",
        value: 17,
        normal: {
            fill: "#0400B6"
        }
    },
    {
        x: "No",
        value: 73,
        normal: {
            fill: "#E40E0E"
        }
    }]
    // create the chart
    var chart = anychart.pie()
    chart.background().stroke("3 #0c1149")
    chart.background().fill({
        keys: ["#fff"],
        angle: 130,
    })
    // set the chart title
    chart.title("Will both score?")
    // add the data
    chart.data(data)
    // display the chart in the container
    chart.container('atl-che_score');
    chart.draw();


    // ----- The third pie -----
    // set the data
    var data = [{
        x: "Yes",
        value: 43,
        normal: {
            fill: "#0400B6"
        }
    },
    {
        x: "No",
        value: 57,
        normal: {
            fill: "#E40E0E"
        }
    }]
    // create the chart
    var chart = anychart.pie()
    chart.background().stroke("3 #0c1149")
    chart.background().fill({
        keys: ["#fff"],
        angle: 130,
    })
    // set the chart title
    chart.title("The total is more 2.5")
    // add the data
    chart.data(data)
    // display the chart in the container
    chart.container('atl-che_total')
    chart.draw()


    // ----- The fourth pie -----
    // set the data
    var data = [{
        x: "2:1",
        value: 35,
        normal: {
            fill: "#0400B6"
        }
    },
    {
        x: "2:0",
        value: 27,
        normal: {
            fill: "#E40E0E"
        }
    },
    {
        x: "1:0",
        value: 19,
        normal: {
            fill: "#DF970A"
        }
    },
    {
        x: "3:1",
        value: 11,
        normal: {
            fill: "#FECA67"
        }
    },
    {
        x: "3:0",
        value: 7,
        normal: {
            fill: "#FBFE67"
        }
    }]
    // create the chart
    var chart = anychart.pie()
    chart.background().stroke("3 #0c1149")
    chart.background().fill({
        keys: ["#fff"],
        angle: 130,
    })
    // set the chart title
    chart.title("Final score")
    // add the data
    chart.data(data)
    // display the chart in the container
    chart.container('atl-che_goals')
    chart.draw()
})

anychart.onDocumentReady(function () {
    // ----- The first pie -----
    // set the data
    var data = [{
        x: "Chelsea",
        value: 58,
        normal: {
            fill: "#0400B6"
        }
    },
    {
        x: "Manchester United",
        value: 42,
        normal: {
            fill: "#E40E0E"
        }
    }]
    // create the chart
    var chart = anychart.pie()
    chart.background().stroke("3 #0c1149")
    chart.background().fill({
        keys: ["#fff"],
        angle: 130,
    })
    // set the chart title
    chart.title("Who is the winner?")
    // add the data
    chart.data(data)
    // display the chart in the container
    chart.container('che-mu_winner')
    chart.draw()


    // ----- The second pie -----
    // set the data
    var data = [{
        x: "Yes",
        value: 17,
        normal: {
            fill: "#0400B6"
        }
    },
    {
        x: "No",
        value: 73,
        normal: {
            fill: "#E40E0E"
        }
    }]
    // create the chart
    var chart = anychart.pie()
    chart.background().stroke("3 #0c1149")
    chart.background().fill({
        keys: ["#fff"],
        angle: 130,
    })
    // set the chart title
    chart.title("Will both score?")
    // add the data
    chart.data(data)
    // display the chart in the container
    chart.container('che-mu_score');
    chart.draw();


    // ----- The third pie -----
    // set the data
    var data = [{
        x: "Yes",
        value: 43,
        normal: {
            fill: "#0400B6"
        }
    },
    {
        x: "No",
        value: 57,
        normal: {
            fill: "#E40E0E"
        }
    }]
    // create the chart
    var chart = anychart.pie()
    chart.background().stroke("3 #0c1149")
    chart.background().fill({
        keys: ["#fff"],
        angle: 130,
    })
    // set the chart title
    chart.title("The total is more 2.5")
    // add the data
    chart.data(data)
    // display the chart in the container
    chart.container('che-mu_total')
    chart.draw()


    // ----- The fourth pie -----
    // set the data
    var data = [{
        x: "2:1",
        value: 35,
        normal: {
            fill: "#0400B6"
        }
    },
    {
        x: "2:0",
        value: 27,
        normal: {
            fill: "#E40E0E"
        }
    },
    {
        x: "1:0",
        value: 19,
        normal: {
            fill: "#DF970A"
        }
    },
    {
        x: "3:1",
        value: 11,
        normal: {
            fill: "#FECA67"
        }
    },
    {
        x: "3:0",
        value: 7,
        normal: {
            fill: "#FBFE67"
        }
    }]
    // create the chart
    var chart = anychart.pie()
    chart.background().stroke("3 #0c1149")
    chart.background().fill({
        keys: ["#fff"],
        angle: 130,
    })
    // set the chart title
    chart.title("Final score")
    // add the data
    chart.data(data)
    // display the chart in the container
    chart.container('che-mu_goals')
    chart.draw()
})

anychart.onDocumentReady(function () {
    // ----- The first pie -----
    // set the data
    var data = [{
        x: "Chelsea",
        value: 58,
        normal: {
            fill: "#0400B6"
        }
    },
    {
        x: "Liverpool",
        value: 42,
        normal: {
            fill: "#E40E0E"
        }
    }]
    // create the chart
    var chart = anychart.pie()
    chart.background().stroke("3 #0c1149")
    chart.background().fill({
        keys: ["#fff"],
        angle: 130,
    })
    // set the chart title
    chart.title("Who is the winner?")
    // add the data
    chart.data(data)
    // display the chart in the container
    chart.container('liv-che_winner')
    chart.draw()


    // ----- The second pie -----
    // set the data
    var data = [{
        x: "Yes",
        value: 17,
        normal: {
            fill: "#0400B6"
        }
    },
    {
        x: "No",
        value: 73,
        normal: {
            fill: "#E40E0E"
        }
    }]
    // create the chart
    var chart = anychart.pie()
    chart.background().stroke("3 #0c1149")
    chart.background().fill({
        keys: ["#fff"],
        angle: 130,
    })
    // set the chart title
    chart.title("Will both score?")
    // add the data
    chart.data(data)
    // display the chart in the container
    chart.container('liv-che_score');
    chart.draw();


    // ----- The third pie -----
    // set the data
    var data = [{
        x: "Yes",
        value: 43,
        normal: {
            fill: "#0400B6"
        }
    },
    {
        x: "No",
        value: 57,
        normal: {
            fill: "#E40E0E"
        }
    }]
    // create the chart
    var chart = anychart.pie()
    chart.background().stroke("3 #0c1149")
    chart.background().fill({
        keys: ["#fff"],
        angle: 130,
    })
    // set the chart title
    chart.title("The total is more 2.5")
    // add the data
    chart.data(data)
    // display the chart in the container
    chart.container('liv-che_total')
    chart.draw()


    // ----- The fourth pie -----
    // set the data
    var data = [{
        x: "2:1",
        value: 35,
        normal: {
            fill: "#0400B6"
        }
    },
    {
        x: "2:0",
        value: 27,
        normal: {
            fill: "#E40E0E"
        }
    },
    {
        x: "1:0",
        value: 19,
        normal: {
            fill: "#DF970A"
        }
    },
    {
        x: "3:1",
        value: 11,
        normal: {
            fill: "#FECA67"
        }
    },
    {
        x: "3:0",
        value: 7,
        normal: {
            fill: "#FBFE67"
        }
    }]
    // create the chart
    var chart = anychart.pie()
    chart.background().stroke("3 #0c1149")
    chart.background().fill({
        keys: ["#fff"],
        angle: 130,
    })
    // set the chart title
    chart.title("Final score")
    // add the data
    chart.data(data)
    // display the chart in the container
    chart.container('liv-che_goals')
    chart.draw()
});