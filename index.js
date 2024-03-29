gsap.registerPlugin(ScrollTrigger);

gsap.to("header", {
    y: 50,
    opacity: 1,
    duration: 1.5,
    ease: "expo.OutOut"
});

gsap.from("#arrow", {
    y: -50,
    opacity: 0,
    duration: 1.5,
    ease: "power1.OutOut",
    delay: 0.8
});

gsap.from("#div-insta", {
    y: -50,
    opacity: 0,
    duration: 1.5,
    ease: "power2.OutOut",
    delay: 0.4
});

gsap.to("#aboutme", {
    scrollTrigger: {
        trigger:  "#aboutme",
        scrub: 1
    },
    y: -500,
    duration: 1,
    ease: "expo.OutOut"
});

gsap.to("#hk", {
    scrollTrigger: {
        trigger:  "#aboutme",
        scrub: 1
    },
    y: -500,
    duration: 1,
    ease: "expo.OutOut"
});

gsap.to("#arrow", {
    scrollTrigger: {
        trigger:  "#aboutme",
        scrub: 1
    },
    y: -500,
    duration: 1,
    ease: "expo.OutOut"
});

gsap.to("#div-insta", {
    scrollTrigger: {
        trigger:  "#aboutme",
        scrub: 1
    },
    y: -840,
    duration: 1,
    ease: "expo.OutOut"
});

gsap.to("#title", {
    scrollTrigger: {
        trigger:  "#aboutme",
        scrub: 1
    },
    y: -1200,
    opacity: 1,
    duration: 2,
    ease: "power1.OutOut"
});

gsap.to("#title2", {
    scrollTrigger: {
        trigger:  "#aboutme",
        scrub: 1
    },
    y: -1200,
    opacity: 1,
    duration: 2,
    ease: "power1.OutOut"
});

function resizeCheck(){
    var progress = action.progress(); //record the progress so that we can match it with the new tween (jump to the same spot)
    action.kill(); //rewind and kill the original tween.
    bezier().progress(progress); //create a new tween based on the new size, and jump to the same progress value.
   
  }

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }  

barba.init({
    // ...
  })
