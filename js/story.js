$(function(){
    $('.top h1').css({"opacity":1})
    $('.top h1').css({"font-size":'6vw'})
    setTimeout(late, 500);
    setTimeout(late2, 1000);
});

function late() {
    $('.navy_box3').css({"width":'45vw'})
    $('.beige_box5').css({"height":'45vh'})
}
function late2() {
    $('.top_st').css({"width":'35vw'})
    $('.top p').css({"opacity":1})
}

time = $('.times p');
var pics_src = new Array("./image/6.32.png","./image/7.38.png","./image/8.43.png","./image/12.0.png",
"./image/16.21.png","./image/17.27.png","./image/19.38.png","./image/22.54.png","./image/0.00.png","./image/2.10.png");
$('.times p').click(function() {
    time.css({"background-color":'transparent'})
    time.css({"color":'var(--mainblack)'})
    $(this).css({"background-color":'var(--mainblack)'})
    $(this).css({"color":'var(--subwhite)'})
    time = $(this);
    n = Number($(this).attr('id'));
    document.getElementById("time_img").src = pics_src[n];
    console.log(pics_src[n]);
});