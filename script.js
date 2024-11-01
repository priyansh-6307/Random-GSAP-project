gsap.to(".imagecontainer",{
    delay:4,
    ease:Expo.easeInOut,
    width:"100%",
    duration:2,
    stagger:2
})

// gsap.to(".imagecontainer",{
//     delay:30,
//     ease:Expo.easeInOut,
//     width:"0%",
//     duration:2,
// })


gsap.to(".text h1",{
    delay:4,
    ease:Expo.easeInOut,
    top:0,
       duration:2,
    stagger:2
})
gsap.to(".text h1",{
    delay:6,
    ease:Expo.easeInOut,
    top:"-100%",
    duration:2,
    stagger:2
})
gsap.to(".text", {
    delay:17,
    ease: "expo.inOut",
    left: "-1000px",
    duration: 2 // Adding a duration for smooth animation
});
gsap.to(".imagecontainer", {
    delay:17,
    ease: "expo.inOut",
    left: "-2000px",
    duration: 2// Adding a duration for smooth animation
});

gsap.to(".tommy",{
    ease:Expo.easeInout,
    delay:2,    duration:1,
    stagger:1,
    opacity:1,
    height:"100%"

})
gsap.to(".link a img",{
    opacity: 1,          // Fully visible
    duration: 3,         // Duration of the fade effect
    ease: "power2.out"

})
