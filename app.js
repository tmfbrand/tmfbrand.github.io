var rellax = new Rellax(".rellax");

feather.replace();

var tl = gsap.timeline();

tl.fromTo(".feathers-front",
    { y: -300, opacity: 0 },
    { duration: 3, ease: "expo.out", y: 0, opacity: 1 })
    .fromTo(".feathers-middle",
        { y: -200, opacity: 0 },
        { duration: 3, ease: "expo.out", y: 0, opacity: 1 },
        "-=3")
    .fromTo(".feathers-back",
        { y: -100, opacity: 0 },
        { duration: 3, ease: "expo.out", y: 0, opacity: 1 },
        "-=3")
    .fromTo(".nav-wrapper",
        { y: -100, opacity: 0 },
        { duration: 3, ease: "elastic.out(1, 0.75)", y: 0, opacity: 1 },
        "-=2")
    .fromTo(".call-to-action",
        { y: -20, opacity: 0 },
        { duration: 3, ease: "elastic.out(1, 0.75)", y: 0, opacity: 1 },
        "-=2")
    .to(".call-to-action .feather-arrow-down-circle",
        { duration: 0.75, y: -10, repeat: -1, yoyo: true },
        "-=2");