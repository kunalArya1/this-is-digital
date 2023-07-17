function scroller(){
    const scroller = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
    })
    gsap.registerPlugin(ScrollTrigger)
    scroller.on('scroll', ScrollTrigger.update)
    
    ScrollTrigger.scrollerProxy('#main', {
            scrollTop(value) {
                return arguments.length ?
                scroller.scrollTo(value, 0, 0) :
                scroller.scroll.instance.scroll.y
            },
            getBoundingClientRect() {
                return {
                    left: 0, top: 0, 
                    width: window.innerWidth,
                    height: window.innerHeight
                }
            }
        }
    )
    ScrollTrigger.addEventListener('refresh', () => scroller.update())
    ScrollTrigger.refresh()
}
scroller();



document.querySelector("#nav #one").addEventListener("mouseover", function(){
    document.querySelector("#navdata").style.display="flex";
})
document.querySelector("#navdata").addEventListener("click", function(){
    document.querySelector("#navdata").style.display="none";
})

var flag=0;
document.querySelector("#navbar #menu").addEventListener("click", function(){
    if(flag===0){
        document.querySelector("#menudata").style.display="Flex";
        flag=1;
    }
    else{
        document.querySelector("#menudata").style.display="none";
        flag=0;
    }
})

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    loop:true,
    autoplay: {
      delay: 2300,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});
  


var time=gsap.timeline();
// Nav bar
time
.from("#navbar a ,#head ",{
    y:100,
    duration:2,
    stagger:.2,
    ease:"Expo.easeInOut",
    opacity:0,
    delay:.5
})

// Page 1
.from("#page1 h1,#page1 h3",{
    x:-100,
    duration:2,
    opacity:0
})
.from("#page1 #img1",{
    y:200,
    duration:2,
    opacity:0
},"-=2")
.from("#page1 #img2",{
    x:200,
    duration:2,
    opacity:0
},"-=2")
.from("#page1 #img3",{
    y:-200,
    duration:2,
    opacity:0
},"-=2")

// // Page 2
// .from("#page2 #p2text, #p2text h4,#p2text h1,#p2text h3",{
//     scrollTrigger:{
//         trigger:"#page2",
//         scroller:"#main",
//         start: "top bottom",
//         end: "bottom 50%",
//         // markers:true,
//         scrub:true
//     },
//     y:100,
//     duration:2,
//     stagger:.2,
//     opacity:0,
//     scale:0
// })

// // Page 3
// .from("#p3left",{
//     scrollTrigger:{
//         trigger:"#page3",
//         scroller:"#main",
//         start: "top bottom",
//         end: "bottom 50%",
//         scrub:true
//     },
//     y:100,
//     stagger:0.3,
//     duration:1,
//     opacity:0
// })
// .from("#p3text",{
//     scrollTrigger:{
//         trigger:"#page3",
//         scroller:"#main",
//         start: "top bottom",
//         end: "bottom 50%",
//         scrub:true
//     },
//     y:100,
//     duration:2,
//     scale:0,
//     stagger:.2
// })
// .from("#p4top",{
//     scrollTrigger:{
//         trigger:"#page4",
//         scroller:"#main",
//         start: "top 80%",
//         end: "bottom 50%",
//         scrub:true
//     },
//     y:100,
//     duration:10,
//     scale:0
// })
// .from("#p4bottom #box .brandimg",{
//     scrollTrigger:{
//         trigger:"#page4",
//         scroller:"#main",
//         start: "top 80%",
//         end: "bottom 50%",
//         scrub:true
//     },
//     y:100,
//     duration:3,
//     scale:0
// })

// .from("#page5 #photo, #page5 #downpart",{
//     scrollTrigger:{
//         trigger:"#page5",
//         scroller:"#main",
//         start: "top 80%",
//         end: "bottom 50%",
//         scrub:true
//     },
//     y:100,
//     duration:2,
//     scale:0
// })

// .from("#page7 #box #top,#page7 #middle",{
//     scrollTrigger:{
//         trigger:"#page7",
//         scroller:"#main",
//         start: "top 120%",
//         end: "bottom 80%",
//         scrub:true
//     },
//     y:100,
//     scale:0,
//     duration:2
// })
// .from("#page7 #middle",{
//     scrollTrigger:{
//         trigger:"#page7",
//         scroller:"#main",
//         start: "top bottom",
//         end: "bottom 80%",
//         scrub:true
//     },
//     y:100,
//     stagger:.5,
//     scale:0,
//     duration:2
// })

