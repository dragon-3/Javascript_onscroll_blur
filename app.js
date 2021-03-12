$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    $('.img-blur').css({
        filter: "blur(" + (scroll) + "px)"
    })
})