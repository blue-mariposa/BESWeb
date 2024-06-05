//initialize materialize functions

$(document).ready(()=>{
    // mobile menu
    $('.sidenav').sidenav();
    // slideshow
    $('.carousel.carousel-slider').carousel({
        fullWidth: true
    });
    // inputfields
    $('input#input_text, textarea#textarea2').characterCounter();
    // preview images
    $('.materialboxed').materialbox();
    // collapsible
    $('.collapsible').collapsible();
    // parallax
    $('.parallax').parallax();

})

/* back to top start */

const toTop = document.querySelector("#to-top");

window.onscroll = () => {
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        toTop.style.display = "block";
    } else {
        toTop.style.display = "none";
    }
}

toTop.onclick = () => {
    window.scrollTo(0,0);z
}

/* back to top end */