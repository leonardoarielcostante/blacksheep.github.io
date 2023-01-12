const txts= document.querySelector(".contenedor-frases").children;
         txtsLen= txts.length;
let   index= 0;


var myCarousel = document.getElementById('carouselExampleSlidesOnly')

myCarousel.addEventListener('slide.bs.carousel', function () {
    for(let i=0 ; i < txtsLen ; i++){
                     txts[i].classList.remove("text-in");
                 }
    txts[index].classList.add("text-in");
             if(index == txtsLen-1){
                 index= 0;
             } else {
                 index++;
             }
})


const nav = document.getElementById("navbar-scroll")


window.addEventListener('scroll', function (){
    const offset = window.pageYOffset;

    if(offset > 235) {
      nav.classList.add('scroll')
    }else {
        nav.classList.remove('scroll') 
    }
});