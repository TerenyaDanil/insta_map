

////////////////////////////////////////////////////////////////////////////////////////

const anchors = document.querySelectorAll('a.scroll-to')

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()

        const blockID = anchor.getAttribute('href')

        document.querySelector(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}

$.Tween.propHooks.number = {
    get: function (tween) {
        var num = tween.elem.innerHTML.replace(/^[^\d-]+/, '');
        return parseFloat(num) || 0;
    },

    set: function (tween) {
        var opts = tween.options;
        tween.elem.innerHTML = (opts.prefix || '')
            + tween.now.toFixed(opts.fixed || 0)
            + (opts.postfix || '');
    }
};





// btn = document.querySelector('.inner-program__btn');
// dop = document.querySelector('.inner-program__item-dop');


// btn.onclick = function () {
//     btn.classList.add('active');
//     dop.classList.add('active');

// }


var qus = document.querySelectorAll('.qustions__item-plus')

qus.forEach(function (el) {
    el.onclick = function () {
        el.classList.toggle("active");
        el.previousElementSibling.classList.toggle("active");
    }
});


// var swiper = new Swiper('.cases__slider', {
//     slidesPerView: 1,
//     slidesPerGroup: 1,

//     loop: true,
//     speed: 1000,
//     navigation: {
//         nextEl: '.cases__slider-next',
//         prevEl: '.cases__slider-prev',
//     },
//     breakpoints: {

//         768: {
//             slidesPerView: 2,

//             slidesPerGroup: 2,
//             spaceBetween: 100,
//         },

//     }

// });

// var swiper = new Swiper('.rev__slider', {
//     slidesPerView: 1,
//     slidesPerGroup: 1,
//     spaceBetween: 100,
//     loop: true,
//     speed: 1000,
//     navigation: {
//         nextEl: '.rev__slider-next',
//         prevEl: '.rev__slider-prev',
//     },
//     breakpoints: {

//         768: {
//             slidesPerView: 2,
//             spaceBetween: 100,
//             slidesPerGroup: 2,
//         },

//     }

// });




var swiper = new Swiper('.points-container', {
    autoHeight: true,
    loop: true,
    spaceBetween: 50,

    simulateTouch: true,
    speed: 700,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
    },
});



let header = gsap.timeline({
    scrollTrigger: {
        trigger: ".header",   // pin the trigger element while active
        start: "top center",

    }
});
if (window.innerWidth > 737) {

    header.from(".header__dop", { duration: 1, ease: "power4.out", opacity: 0, x: 100 }, "-=0.4")
        .from(".bot-header__time", { duration: 1, ease: "power4.out", opacity: 0, x: -150 }, "-=0.6")
        .from(".bot-header__title", { duration: 1.2, ease: "power4.out", opacity: 0, x: -150 }, "-=0.6")
        .from(".bot-header__btn", { duration: 1, ease: "power4.out", opacity: 0, x: -150 }, "-=0.8")
        .add(createParticle());

} else {
    header.from(".header__dop", { duration: 1, ease: "power4.out", opacity: 0, x: 100 }, "-=0.4")
        .from(".header__man", { duration: 1, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
        .from(".bot-header__time", { duration: 1, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
        .from(".bot-header__title", { duration: 1.2, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
        .from(".bot-header__btn", { duration: 1, ease: "power4.out", opacity: 0, y: 50 }, "-=0.8")

}


let forr = gsap.timeline({
    scrollTrigger: {
        trigger: ".for",   // pin the trigger element while active
        start: "top center",

    }
});


forr.from(".for__title", { duration: 1.2, ease: "power4.out", opacity: 0, y: 150 }, "-=0.8")
    .from(".inner-for__item-1", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
    .from(".inner-for__item-2", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
    .from(".inner-for__item-3", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")




let program = gsap.timeline({
    scrollTrigger: {
        trigger: ".program",   // pin the trigger element while active
        start: "top center",

    }
});

let programItemOne = gsap.timeline({
    scrollTrigger: {
        trigger: ".inner-program__item-1",   // pin the trigger element while active
        start: "top center",

    }
});

let programItemTwo = gsap.timeline({
    scrollTrigger: {
        trigger: ".inner-program__item-2",   // pin the trigger element while active
        start: "top center",

    }
});

let programItemThree = gsap.timeline({
    scrollTrigger: {
        trigger: ".inner-program__item-3",   // pin the trigger element while active
        start: "top center",


    }
});


let programItemFour = gsap.timeline({
    scrollTrigger: {
        trigger: ".inner-program__item-4",   // pin the trigger element while active
        start: "top center",

    }
});


let programItemFive = gsap.timeline({
    scrollTrigger: {
        trigger: ".inner-program__item-5",   // pin the trigger element while active
        start: "top center",

    }
});

let programItemSix = gsap.timeline({
    scrollTrigger: {
        trigger: ".inner-program__item-6",   // pin the trigger element while active
        start: "top center",


    }
});


let programItemSeven = gsap.timeline({
    scrollTrigger: {
        trigger: ".inner-program__item-7",   // pin the trigger element while active
        start: "top center",

    }
});


let programItemVos = gsap.timeline({
    scrollTrigger: {
        trigger: ".inner-program__item-8",   // pin the trigger element while active
        start: "top center",

    }
});


program.from(".program__title", { duration: 1, ease: "power4.out", opacity: 0, y: 150 }, "-=0.8")
    .from(".program__img", { duration: 1, ease: "power4.out", opacity: 0, y: 50 }, "-=0.8")


programItemOne.from(".inner-program__wrap-1", { duration: 0.8, ease: "power4.out", opacity: 0, y: 150 }, "-=0.8")
    .from(".inner-program__text-1", { duration: 0.8, ease: "power4.out", opacity: 0, y: 150 }, "-=0.8")



programItemTwo.from(".inner-program__wrap-2", { duration: 0.8, ease: "power4.out", opacity: 0, y: 150 }, "-=0.8")
    .from(".inner-program__text-2", { duration: 0.8, ease: "power4.out", opacity: 0, y: 150 }, "-=0.8")



programItemThree.from(".inner-program__wrap-3", { duration: 0.8, ease: "power4.out", opacity: 0, y: 150 }, "-=0.8")
    .from(".inner-program__text-3", { duration: 0.8, ease: "power4.out", opacity: 0, y: 150 }, "-=0.8")
    .from(".inner-program__diag-bg-3", { duration: 1.65, ease: "power4.out", opacity: 0, rotate: -180 }, "-=0.8")
    .add(function () {
        $('.inner-program__diag-3')
            .animate({ number: 100 }, {
                duration: 1500,
                postfix: '<span>мин</span>',
                fixed: 0
            })
    }, -0.05);


programItemFour.from(".inner-program__wrap-4", { duration: 0.8, ease: "power4.out", opacity: 0, y: 150 }, "-=0.8")
    .from(".inner-program__text-4", { duration: 0.8, ease: "power4.out", opacity: 0, y: 150 }, "-=0.8")
    .from(".inner-program__diag-bg-4", { duration: 1.65, ease: "power4.out", opacity: 0, rotate: -180 }, "-=0.8")
    .add(function () {
        $('.inner-program__diag-4')
            .animate({ number: 110 }, {
                duration: 1500,
                postfix: '<span>мин</span>',
                fixed: 0
            })
    }, -0.05);



programItemFive.from(".inner-program__wrap-5", { duration: 0.8, ease: "power4.out", opacity: 0, y: 150 }, "-=0.8")
    .from(".inner-program__text-5", { duration: 0.8, ease: "power4.out", opacity: 0, y: 150 }, "-=0.8")
// .from(".inner-program__eff-5", { duration: 0.8, ease: "power4.out", opacity: 0, y: 150 }, "-=0.6")
// 
// .from(".inner-program__diag-bg-5", { duration: 1.2, ease: "power4.out", opacity: 0, rotate: -180 }, "-=0.6")
// .call(function () {
//     $('.inner-program__diag-5')
//         .animate({ number: 140 }, {
//             duration: 1500,
//             postfix: '<span>мин</span>',
//             fixed: 0
//         })
// });


programItemSix.from(".inner-program__wrap-6", { duration: 0.8, ease: "power4.out", opacity: 0, y: 150 }, "-=0.8")
    .from(".inner-program__text-6", { duration: 0.8, ease: "power4.out", opacity: 0, y: 150 }, "-=0.8")
    .from(".inner-program__diag-bg-6", { duration: 1.65, ease: "power4.out", opacity: 0, rotate: -180 }, "-=0.8")
    .add(function () {
        $('.inner-program__diag-6')
            .animate({ number: 80 }, {
                duration: 1500,
                postfix: '<span>мин</span>',
                fixed: 0
            })
    }, -0.05);


programItemSeven.from(".inner-program__wrap-7", { duration: 0.8, ease: "power4.out", opacity: 0, y: 150 }, "-=0.8")

    .from(".inner-program__text-7", { duration: 0.8, ease: "power4.out", opacity: 0, y: 150 }, "-=0.8")
    .from(".inner-program__diag-bg-7", { duration: 1.65, ease: "power4.out", opacity: 0, rotate: -180 }, "-=0.8")
    .add(function () {
        $('.inner-program__diag-7')
            .animate({ number: 60 }, {
                duration: 1500,
                postfix: '<span>мин</span>',
                fixed: 0
            })
    }, -0.05);


programItemVos.from(".inner-program__wrap-8", { duration: 0.8, ease: "power4.out", opacity: 0, y: 150 }, "-=0.8")
    .from(".inner-program__text-8", { duration: 0.8, ease: "power4.out", opacity: 0, y: 150 }, "-=0.8")
    .from(".inner-program__diag-bg-8", { duration: 1.65, ease: "power4.out", opacity: 0, rotate: -180 }, "-=0.8")
    .add(function () {
        $('.inner-program__diag-8')
            .animate({ number: 30 }, {
                duration: 1500,
                postfix: '<span>мин</span>',
                fixed: 0
            })
    }, -0.05);


let tarif = gsap.timeline({
    scrollTrigger: {
        trigger: ".tarif",   // pin the trigger element while active
        start: "top center",

    }
});


let tarifItem = gsap.timeline({
    scrollTrigger: {
        trigger: ".inner-tarif__price-1",   // pin the trigger element while active
        start: "-300px center",
        end: "center center",



    }
});

let ItemOne = gsap.timeline({
    scrollTrigger: {
        trigger: ".inner-tarif__item-1",   // pin the trigger element while active
        start: "200px center",




    }
});


let ItemTwo = gsap.timeline({
    scrollTrigger: {
        trigger: ".inner-tarif__item-2",   // pin the trigger element while active
        start: "200px center"



    }
});


let ItemThree = gsap.timeline({
    scrollTrigger: {
        trigger: ".inner-tarif__item-3",   // pin the trigger element while active
        start: "200px center",

    }
});


let tarifOne = gsap.timeline({
    scrollTrigger: {
        trigger: ".inner-tarif__price-1",   // pin the trigger element while active
        start: "top center",


    }
});


let tarifTwo = gsap.timeline({
    scrollTrigger: {
        trigger: ".inner-tarif__price-2",   // pin the trigger element while active
        start: "top center",


    }
});


let tarifThree = gsap.timeline({
    scrollTrigger: {
        trigger: ".inner-tarif__price-3",   // pin the trigger element while active
        start: "top center",

    }
});




if (window.innerWidth > 737) {


    tarif.from(".tarif__title", { duration: 1.2, ease: "power4.out", opacity: 0, y: 150 }, "-=0.8")
        .from(".inner-tarif__img-1", { duration: 1, ease: "power4.out", opacity: 0, y: -50 }, "-=0.8")
        .from(".inner-tarif__img-2", { duration: 1, ease: "power4.out", opacity: 0, y: -50 }, "-=0.8")
        .from(".inner-tarif__img-3", { duration: 1, ease: "power4.out", opacity: 0, y: -50 }, "-=0.8")

    tarifItem.from(".inner-tarif__price-1 span", { duration: 0.8, ease: "power4.out", opacity: 1, fontSize: 48, y: 32 }, "-=0.6")
        .to(".inner-tarif__price-1", { duration: 0.8, ease: "power4.out", className: "+=inner-tarif__price inner-tarif__price-1 active" })
        .from(".inner-tarif__price-1 .price", { duration: 0.8, ease: "power4.out", opacity: 0 })
        .from(".inner-tarif__price-2 span", { duration: 0.8, ease: "power4.out", opacity: 1, fontSize: 48, y: 32 }, "-=0.6")
        .to(".inner-tarif__price-2", { duration: 0.8, ease: "power4.out", className: "+=inner-tarif__price inner-tarif__price-2 active" })
        .from(".inner-tarif__price-2 .price", { duration: 0.8, ease: "power4.out", opacity: 0 })
        .from(".inner-tarif__price-3 span", { duration: 0.8, ease: "power4.out", opacity: 1, fontSize: 48, y: 32 }, "-=0.6")
        .to(".inner-tarif__price-3", { duration: 0.8, ease: "power4.out", className: "+=inner-tarif__price inner-tarif__price-3 active" })
        .from(".inner-tarif__price-3 .price", { duration: 0.8, ease: "power4.out", opacity: 0 })
} else {
    tarif.from(".tarif__title", { duration: 1.2, ease: "power4.out", opacity: 0, y: 150 }, "-=0.8")

    ItemOne.from(".inner-tarif__img-1", { duration: 1.2, ease: "power4.out", opacity: 0, x: 50 }, "-=0.2")

    tarifOne.from(".inner-tarif__price-1 span", { duration: 0.8, ease: "power4.out", opacity: 1, fontSize: 48, y: 32 }, "-=0.6")
        .to(".inner-tarif__price-1", { duration: 0.8, ease: "power4.out", className: "+=inner-tarif__price inner-tarif__price-1 active" })
        .from(".inner-tarif__price-1 .price", { duration: 0.8, ease: "power4.out", opacity: 0 })

    ItemTwo.from(".inner-tarif__img-2", { duration: 1.2, ease: "power4.out", opacity: 0, x: 50 }, "-=0.2")

    tarifTwo.from(".inner-tarif__price-2 span", { duration: 0.8, ease: "power4.out", opacity: 1, fontSize: 48, y: 32 }, "-=0.6")
        .to(".inner-tarif__price-2", { duration: 0.8, ease: "power4.out", className: "+=inner-tarif__price inner-tarif__price-2 active" })
        .from(".inner-tarif__price-2 .price", { duration: 0.8, ease: "power4.out", opacity: 0 })

    ItemThree.from(".inner-tarif__img-3", { duration: 1.2, ease: "power4.out", opacity: 0, x: 50 }, "-=0.2")


    tarifThree.from(".inner-tarif__price-3 span", { duration: 0.8, ease: "power4.out", opacity: 1, fontSize: 48, y: 32 }, "-=0.6")
        .to(".inner-tarif__price-3", { duration: 0.8, ease: "power4.out", className: "+=inner-tarif__price inner-tarif__price-3 active" })
        .from(".inner-tarif__price-3 .price", { duration: 0.8, ease: "power4.out", opacity: 0 })

}

let qustions = gsap.timeline({
    scrollTrigger: {
        trigger: ".qustions",   // pin the trigger element while active
        start: "top center",

    }
});


qustions.from(".qustions__title", { duration: 0.8, ease: "power4.out", opacity: 0, y: 150 }, "-=0.6")
    .from(".qustions__dop-right", { duration: 0.8, ease: "power4.out", opacity: 0, x: 50 }, "-=0.6")
    .from(".qustions__item-1", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
    .from(".qustions__item-2", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
    .from(".qustions__item-3", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
    .from(".qustions__item-4", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
    .from(".qustions__item-5", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")




let qustionsDop = gsap.timeline({
    scrollTrigger: {
        trigger: ".qustions__send",   // pin the trigger element while active
        start: "top center",

    }
});

qustionsDop.from(".send-qustions__title", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.8")
    .from(".send-qustions__text", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.8")
    .from(".qustions__dop-left", { duration: 0.8, ease: "power4.out", opacity: 0, x: -50 }, "-=0.6")














let video = document.querySelectorAll(".points__video");
let video__close = document.querySelectorAll('.popup__close-video');



function stop() {
    video.pause();
    video.currentTime = 0;
}


video__close.forEach(function (el) {
    el.onclick = function () {
        el.nextElementSibling.pause()
        el.currentTime = 0;
    }
});




const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll(".lock-padding");

let unlock = true;

const timeout = 300;

if (popupLinks.length > 0) {
    for (let index = 0; index < popupLinks.length; index++) {
        const popupLink = popupLinks[index];
        popupLink.addEventListener("click", function (e) {
            const popupName = popupLink.getAttribute('href').replace('#', '');
            const curentPopup = document.getElementById(popupName);
            popupOpen(curentPopup);
            e.preventDefault();
        });
    }
}
const popupCloseIcon = document.querySelectorAll('.popup__close');
if (popupCloseIcon.length > 0) {
    for (let index = 0; index < popupCloseIcon.length; index++) {
        const el = popupCloseIcon[index];
        el.addEventListener('click', function (e) {
            popupClose(el.closest('.popup'));
            e.preventDefault();
        });
    }
}

function popupOpen(curentPopup) {
    if (curentPopup && unlock) {
        const popupActive = document.querySelector('.popup.open');
        if (popupActive) {
            popupClose(popupActive, false);
        } else {
            bodyLock();
        }
        curentPopup.classList.add('open');

    }
}

function popupClose(popupActive, doUnlock = true) {
    if (unlock) {
        popupActive.classList.remove('open');
        if (doUnlock) {
            bodyUnLock();
        }
    }
}

function bodyLock() {
    const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

    if (lockPadding.length > 0) {
        for (let index = 0; index < lockPadding.length; index++) {
            const el = lockPadding[index];
            el.style.paddingRight = lockPaddingValue;
        }
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
            for (let index = 0; index < lockPadding.length; index++) {
                const el = lockPadding[index];
                el.style.paddingRight = '0px';
            }
        }
        body.style.paddingRight = '0px';
        body.classList.remove('lock');
    }, timeout);

    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout);
}


(function () {
    // проверяем поддержку
    if (!Element.prototype.closest) {
        // реализуем
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
    // проверяем поддержку
    if (!Element.prototype.matches) {
        // определяем свойство
        Element.prototype.matches = Element.prototype.matchesSelector ||
            Element.prototype.webkitMatchesSelector ||
            Element.prototype.mozMatchesSelector ||
            Element.prototype.msMatchesSelector;
    }
})();





