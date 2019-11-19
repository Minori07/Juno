$(function(){
    
    $('.black_cover').css({"width":'0'})
    setTimeout(img_in, 500);
});

function img_in() {
    $('.pr_img').css({"width":'25vw'})
}

$(window).scroll(function (){

    $('body').each(function(){
        var elemPos = $(this).offset().top,
        scroll = $(window).scrollTop(),
        windowHeight = $(window).height();
        // console.log(scroll);
        if(scroll >=2000){
            $('.beige_line2').css({"width":'100vw'});
        }
        if(scroll < 2000){
            $('.beige_line2').css({"width":'0'});
        }
    });
});