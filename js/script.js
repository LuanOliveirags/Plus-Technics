$(document).ready(function () {
    $(".hamburguer").click(function () {
        $(this).toggleClass("active");
        $(".menu").toggleClass("active");
});
});

window.sr = ScrollReveal().reveal('.text-1', { delay: 1000 });
window.sr = ScrollReveal().reveal('.card-image', { delay: 2000 });
window.sr = ScrollReveal().reveal('.logo', {rotate: {x:0, y:900, z:0}});

window.sr = ScrollReveal().reveal('.menu', { delay: 1500 });
window.sr = ScrollReveal().reveal('.hamburguer', { delay: 1400 });







window.sr = ScrollReveal ({reset:true});
sr.reveal ('.card1',{rotate: {x:0, y:900, z:0}});
sr.reveal ('.card2',{rotate: {x:0, y:900, z:0}});
sr.reveal ('.text-2',{duration: 3000});

sr.reveal ('p',{duration: 2000});
sr.reveal ('.text-3',{rotate: {x:0, y:80, z:0 }});
sr.reveal ('.text-4',{duration: 5000});


sr.reveal ('.rod-s',{duration: 500});
