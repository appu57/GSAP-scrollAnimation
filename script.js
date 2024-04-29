var contaniner2=gsap.timeline({scrollTrigger:{
    trigger:".container-2",
    start:"10% 90%", //"div size   screen size"  basically first parameter is the div's height start is at 10% of container2 end also at 20% whereas second parameter of both start:end: is screen'height
    end:"20% 50%",
    scrub:true,
    // markers:true
}
});
//so the when screen's scroll reaches at 10% of container-2's height , start gsap animation and stop gsap animation when screen'end reaches container-2's end(20%,0) use marker to differentiate
//screen height and width is use to set its position so when screen scrolls the scroll moves from the defined position
contaniner2.to("#gsap-icon",{   //move gsap icon to div container-2 so which ever is coming to container 2 has to have below style
    top:"100%",
    left:"10%"
},'moveTogether')

contaniner2.to("#heading",{
    top:"200%",
    left:"10%"
},'moveTogether')

/* Scroll Trigger reveals the container */

let container = document.querySelector(".container-3");
gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(
    container,
    {
        clipPath:"circle(5% at 87% 9%)", //initial style we want our container to look like "from" 
    },
    {
        clipPath:"circle(75% at 50%45%)", //on scroll the style we want our container to look like "to"
        scrollTrigger:{
            trigger:container,
            scrub:1,
            start:"25% 70%",
            end:"45% 70%",
            // markers:true

        }
    },

)