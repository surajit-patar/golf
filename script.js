var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")
var h4all = document.querySelectorAll("#nav h4")

document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+"px"
    crsr.style.top = dets.y+"px"
    blur.style.left = dets.x-250+"px"
    blur.style.top = dets.y-250+"px"
})

gsap.to("#nav",{
    backgroundColor: "#000",
    height:"105px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
    
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -25%",
        end:"-70%",
        scrub:2,
    }
})

gsap.from("#about-us img , #about-us #about",{
    y:50,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger: "#about-us",
        scroll:"body",
        // markers: true,
        start: "top 70%",
        end: "top 60%",
        scrub:1
    }
})

gsap.from(".card",{
    scale:1,
    opacity:0,
    duration:0.8,
    scrollTrigger:{
        trigger: ".card",
        scroll:"body",
        // markers: true,
        start: "top 70%",
        end: "top 60%",
        scrub:1
    }
})
gsap.from("#page3 #colon-1",{
    y:-70,
    x:-90,
    scrollTrigger:{
        trigger: "#colon-1",
        scroll:"body",
        // markers: true,
        start: "top 40%",
        end: "top 60%",
        scrub:1
    }
})
gsap.from("#page3 #colon-2",{
    y:70,
    x:90,
    scrollTrigger:{
        duration:0.5,
        trigger: "#colon-1",
        scroll:"body",
        // markers: true,
        start: "top 40%",
        end: "top 60%",
        scrub:1
    }
})
gsap.from("#page4 h1",{
    y:55,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroll:"body",
        start:"top 75%",
        end:"top 80%",
        scrub:2
    }
})
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale = 3
        crsr.style.border = "1px solid #fff" 
        crsr.style.background = 'transparent'

    })
})
h4all.forEach(function(elem){
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale = 1
        crsr.style.border = "0px solid #95C11E" 
        crsr.style.backgroundColor = "#95C11E"

    })
})