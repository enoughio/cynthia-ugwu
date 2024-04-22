var timeout;

document.querySelector(".curcer").style.transform = ` scale(1, 1)`;


const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});



function firstPageAnimation() {
    var t1 = gsap.timeline();
    
    t1.from("#nav", {
        y : "-10",
        opacity : 0,
        ease : Expo.easeInOut,
        duration : 2,
    })
      .to(".belem", {
            y : 0,
            duration : 2,
            stagger: .2,
        })
   
}


function circleMove(x, y){
    window.addEventListener("mousemove", (dets)=>{
       // console.log(dets.clientX, dets.clientY);
        document.querySelector(".curcer").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${x}, ${y})`;
    })
}


function squeez(){

    var px = 0;
    var py = 0;
    
    var x = 1;
    var y = 1;

    window.addEventListener("mousemove", (d)=>{

        clearTimeout(timeout);
        
        x = gsap.utils.clamp(.8, 1.2,d.clientX - px);
        y = gsap.utils.clamp(.8, 1.2,d.clientY - py);
        
        px = d.clientX;
        py = d.clientY;

        circleMove(x, y);

        timeout = setTimeout(() => {
            document.querySelector(".curcer").style.transform = `translate(${d.clientX}px, ${d.clientY}px) scale(1, 1)`;

        }, 100);
    })
}



var timer ;



function imganimation()
{
    var prerotate = 0;
    var rotate = 1;
    
    document.querySelectorAll(".elem").forEach( 

      
        (elem)=>{

            elem.addEventListener("mouseleave", (dets)=>{
                
                gsap.to(elem.querySelector("img"), {
                    opacity : 0,
                    ease : Power3,
                    duration: .5,
                });
            })

            elem.addEventListener("mousemove", (dets)=>{
                
                rotate = prerotate - dets.clientX ;
                               // console.log(rotate)
                prerotate = dets.clientX;
                var diff = dets.clientY - elem.getBoundingClientRect().top;                
                
                gsap.to(elem.querySelector("img"), {
                    opacity : 1,
                    ease : Power3,
                    top : diff,
                    left: dets.clientX,
                    duration:.7,
                    rotation:  gsap.utils.clamp(-20, 20,rotate),
                });
            })
        });
}




imganimation();
circleMove();
squeez();
firstPageAnimation();