gsap.to(".p1 h1",{
    transform:"translateX(-100%)",
    fontWeight:"100",
    scrollTrigger:{
        scroller:"body",
        trigger:".p1",
        // markers:true,
        start:"top 0",
        end:"top -200",
        //scrub for smoothing
        scrub:3,
        //pin is used for jab tak full animation nhi ho jata tabtak pin rakho page ko
        pin:true
    },
    // opacity:0,
})

let tl=gsap.timeline();
function time(){
    let a=0;
    setInterval(function(){
        a=a+Math.floor(Math.random()*15);
        if(a<100){
        document.querySelector(".loader h1").innerHTML=a+"%";
        }else{
            a=100;
            document.querySelector(".loader h1").innerHTML=a+"%";
        }
    },60);
}

tl.to(".loader h1",{
    scale:1.2,
    delay:0,
    duration:0,
    onStart:time(),
})
tl.to(".loader #hel",{
    x:-1000,
    duration:1,
    delay:0.1
})
tl.to(".loader h1,.loader #hel",{
    display:"none"
})
tl.to(".loader #bye",{
    display:"block"
})
tl.to(".loader",{
    top:"-100vh",
    delay:0.2,
    duration:0.8
})