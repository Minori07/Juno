$(function(){

    $('html,body').animate({ scrollTop: 0,scrollLeft: 0 }, '1');
    $('.beige_box3').css({"height":'100vh'})
    $('.navy_line').css({"width":'20vw'})
    setTimeout(fadein, 500);
});

function fadein() {
    $('.top_in').css({"opacity":1})
}