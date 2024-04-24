var timeout;
var x = 1;
var y = 1;

//document.querySelector(".curcer").style.transform = ` scale(1, 1)`;
const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});


function firstPageAnimation() {
    var t1 = gsap.timeline();
    
    t1.from("#nav", {
        y: -10,
        opacity: 0,
        ease: Expo.easeInOut,
        duration: 1,
    })
    .to(".belem", {
        y: -1,
        ease: Expo.easeInOut,
        duration: 1.5,
        stagger: 0.4,
    })
    .from(".smallhead", {
        y: -10,
        opacity: 0,
        ease: Expo.easeInOut,
        duration: 1,
        stagger: 0.2,
    })

    console.log(document.querySelector(".cold"));
}


function circleMove(x, y){
    window.addEventListener("mousemove", (dets)=>{
       // console.log(dets.clientX, dets.clientY);
        document.querySelector(
            ".curcer"
        ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${x}, ${y})`;
    })
}


function circleMouseFollower(xscale, yscale) {
    window.addEventListener("mousemove", function (dets) {
      document.querySelector(
        ".curcer"
      ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
    });
  }
  

function squeez(){
    
    var px = 0;
    var py = 0;

    window.addEventListener("mousemove", (d)=>{

        clearTimeout(timeout);
        
        x = gsap.utils.clamp(.8, 1.2,d.clientX - px);
        y = gsap.utils.clamp(.8, 1.2,d.clientY - py);
        
        px = d.clientX;
        py = d.clientY;
        
    //    circleMouseFollower(x,y);
        circleMove(x, y);
        
        timeout = setTimeout(() => {
            document.querySelector(".curcer").style.transform = `translate(${d.clientX}px, ${d.clientY}px) scale(1, 1)`;
        }, 100);
        
    })
}





    document.querySelectorAll(".elem").forEach( 
            (elem)=>{
            
                elem.addEventListener("mouseleave", (dets)=>{
                    gsap.to(elem.querySelector("img"), {
                            opacity : 0,
                            ease : Power3,
                            duration: .5,
                    });
                })

                    
                var prerotate = 0;
                var rotate = 0;


                elem.addEventListener("mousemove", (details)=>
                {
                    rotate = details.clientX - prerotate;
                    prerotate = details.clientX;   
                    
                    console.log(elem.getBoundingClientRect())
                    var diff = details.clientY - elem.getBoundingClientRect().top;

                    gsap.to(elem.querySelector("img"), {
                            opacity : 1,
                            top : diff,
                            ease: Power3,
                            left: details.clientX,
                            rotation:  gsap.utils.clamp(-20, 20,rotate),
                    })
                })

    });



firstPageAnimation();
squeez();
// circleMouseFollower()
circleMove(1, 1);