$(function(){
    $('.navy_cover').css({"height":'93vh'})
    $('.video').css({"opacity":'1'})
    $('.video').css({"width":'100vw'})
    setTimeout(img_in, 500);

    const video = document.querySelector('#video');
    const video_btn = document.querySelector('#play');
    let is_playing = false;

    video_btn.addEventListener('click', () => {
      if (!is_playing) {
        video.play();
        is_playing = true;
      } else {
        video.pause();
        is_playing = false;
      }
    });
});

function img_in() {
    $('.play').css({"opacity":'1'})
    $('h1').css({"opacity":'1'})
}

$(window).scroll(function (){

    $('.name_beige').each(function(){
        var elemPos = $(this).offset().top,
        scroll = $(window).scrollTop(),
        windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight + 100){
            $(this).css({"width":'12vw'})
        }
    });
    
    $('.name_navy').each(function(){
        var elemPos = $(this).offset().top,
        scroll = $(window).scrollTop(),
        windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight + 100){
            $(this).css({"width":'15vw'})
        }
    });
});