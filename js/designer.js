$(function(){

    $('.navy_cover2').css({"width":'0'})
    setTimeout(fadein, 500);
});

function fadein() {
    $('.shugo_img').css({"height":'35vw'})
    $('.de_top h1').css({"opacity":1});
}

$(window).scroll(function (){

    $('body').each(function(){
        var elemPos = $(this).offset().top,
        scroll = $(window).scrollTop(),
        windowHeight = $(window).height();
        // console.log(scroll);
        if(scroll >=370){
            $('ul').removeClass('white');
        }
        if(scroll < 370){
            $('ul').addClass('white');
        }
    });
    $('.name_beige').each(function(){
        var elemPos = $(this).offset().top,
        scroll = $(window).scrollTop(),
        windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight + 100){
            $(this).css({"width":'12vw'})
        }
        if (scroll > elemPos - windowHeight + 800){
            $(this).css({"width":0})
        }
    });
    
    $('.name_navy').each(function(){
        var elemPos = $(this).offset().top,
        scroll = $(window).scrollTop(),
        windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight + 100){
            $(this).css({"width":'15vw'})
        }
        if (scroll > elemPos - windowHeight + 800){
            $(this).css({"width":0})
        }
    });
    $('.long').each(function(){
        var elemPos = $(this).offset().top,
        scroll = $(window).scrollTop(),
        windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight + 100){
            $(this).css({"width":'20vw'})
        }
        if (scroll > elemPos - windowHeight + 800){
            $(this).css({"width":0})
        }
    });
});