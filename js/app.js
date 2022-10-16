function run() {
    /* https://greensock.com/gsap */
    TweenLite.set("#petals", { perspective: 600 })
    TweenLite.set("img", { xPercent: "-50%", yPercent: "-50%" })

    var total = 50;
    var warp = document.getElementById("petals"),
        w = window.innerWidth,
        h = window.innerHeight;

    for (i = 0; i < total; i++) {
        var Div = document.createElement('div');
        TweenLite.set(Div, { attr: { class: 'dot' }, x: R(0, w), y: R(-200, -150), z: R(-200, 200) });
        warp.appendChild(Div);
        animm(Div);
    }

    function animm(elm) {
        TweenMax.to(elm, R(6, 15), { y: h + 100, ease: Linear.easeNone, repeat: -1, delay: -15 });
        TweenMax.to(elm, R(4, 8), { x: '+=100', rotationZ: R(0, 180), repeat: -1, yoyo: true, ease: Sine.easeInOut });
        TweenMax.to(elm, R(2, 8), { rotationX: R(0, 360), rotationY: R(0, 360), repeat: -1, yoyo: true, ease: Sine.easeInOut, delay: -5 });
    };

    function R(min, max) { return min + Math.random() * (max - min) };

    let startDelayRund = { startDelayRund: 1000000 }

    document.querySelector('.card').setAttribute('style', 'animation: card 2s linear 3s forwards;')
    /* https://mattboldt.com/typed.js/ */
    var typed = new Typed('#text', {
        strings: ['Желаю весеннего настроения, пусть на душе всегда будет светло и радостно. Желаю, чтобы на лице всегда сияла улыбка, пусть жизнь будет щедра на подарки. В самый женский день года желаю простого женского счастья и здоровья.'],
        startDelay: 7000,
        typeSpeed: 50,
        backSpeed: 0,
        fadeOut: true,
        loop: false,
        showCursor: false,
        onComplete: function () {
            var author = document.getElementById("author");
            author.style.opacity = 1;
        }
    });
}


function runStartDelay() {
    let click_count = 0
    document.querySelector('.popup_img').addEventListener('click', () => {

        if (click_count == 3) {
            document.querySelector('.popup_img').classList.add('popup_img_anim')
            document.querySelector('.popup').setAttribute('style', 'z-index: -10; opacity: 0;')
            setInterval(() => {
                document.body.setAttribute('style', 'perspective: 1000px; font-family: "Caveat", cursive;')
                document.querySelector('.popup').setAttribute('style', 'display: none;')
            }, 600);
            run()
            soundClick()

        } else {
            if (click_count == 0) {
                document.querySelector('.popup_img').setAttribute('style', 'width:150px;height:150px')
            } else if (click_count == 1) {
                document.querySelector('.popup_img').setAttribute('style', 'width:220px;height:220px')
            } else if (click_count == 2) {
                document.querySelector('.popup_img').setAttribute('style', 'width:300px;height:300px')
                document.querySelector('.popup_img').classList.add('popup_img_anim')
            }
        }
        click_count++
    })
}

window.addEventListener("load", function (event) {
    runStartDelay()
    document.querySelector('.popup_img').setAttribute('style', 'transform: translate(0);')
});

function soundClick() {
    var audio = document.getElementById('audio');
    audio.play();
}

