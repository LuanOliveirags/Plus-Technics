$(document).ready(function () {
    $(".hamburguer").click(function () {
        $(this).toggleClass("active");
        $(".menu").toggleClass("active");
});
});


window.sr = ScrollReveal ({reset:true});
sr.reveal ('.text-1',{rotate: {x:0, y:80, z:0}});
sr.reveal ('.text-2',{duration: 3000});

sr.reveal ('p',{duration: 2000});


sr.reveal ('.text-3',{rotate: {x:0, y:80, z:0 }});
sr.reveal ('.text-4',{duration: 5000});

