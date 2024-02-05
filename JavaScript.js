let tl=gsap.timeline();
tl.from("nav",{
    opacity:0,
    delay:0.3
})
tl.from("nav h2,.nav-p2 h3,.nav-p3 h4,.nav-p3 button",{
    y:-80,
    duration:0.6,
    stagger:0.3,
    opacity:0
});
tl.from(".left,.left span",{
    x:-500,
    duration:1,
    stagger:0.5,
    opacity:0
});
tl.from(".right img",{
    scale:0.5,
    opacity:0
})
// tl.from(".page-2 .box",{
//     scale:0,
//     opacity:0,
//     duration:1,
//     stagger:0.3,
//     scrollTrigger:{
//         trigger:".page-2 .box",
//         scroller:"body"
//     }
// })
tl.from(".page-2 h1",{
    y:-60,
    duration:1,
    opacity:0
})
tl.from(".box1",{
    x:-20,
    duration:0.5,
    opacity:0,
    // stagger:0.4
})
tl.from(".box2",{
    y:20,
    duration:0.5,
    opacity:0,
    // stagger:0.4
})
tl.from(".box3",{
    x:20,
    duration:0.5,
    opacity:0,
    // stagger:0.4
})
