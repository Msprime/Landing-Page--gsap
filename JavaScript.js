// gsap=grrensock Animation platform
// if u have multiple Animations u can use stagger to make run one by one
// there is also 1 property name repeat to repeat the Animation
// to tackle the bad Animation effect from repeat u can use "yoyo:true" property
// let tl=gsap.timeline();
// tl.to(".box",{
//     x:700,
//     duration:2,
//     repeat:1,
//     yoyo:true
// });
// tl.to(".box1",{
//     x:700,
//     duration:2,
//     repeat:1,
//     yoyo:true
// });
// tl.to(".box2",{
//     x:700,
//     duration:2,
//     repeat:1,
//     yoyo:true
// });

let tl=gsap.timeline();
tl.from(".part-1,.part-2 h3,.part-3 h4,.part-3 button",{
    // x:-180,
    y:-100,
    duration:1,
    delay:1,
    opacity:0,
    stagger:0.2
});
tl.from("#main h1",{
    y:100,
    stagger:0.5,
    opacity:0
})
tl.from("#main>img",{
    scale:0,
    opacity:0,
    stagger:0.3
})
tl.from("h5",{
    scale:0,
    opacity:0
})
tl.to("h5",{
    y:30,
    repeat:-1,
    duration:0.7,
    yoyo:true
})
