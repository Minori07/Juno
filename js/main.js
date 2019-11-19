var rellax = new Rellax(' .rellax ',{

  // 中央寄せ
  center: true
  
});

$(window).scroll(function (){

    $('.fadein').each(function(){
        var elemPos = $(this).offset().top,
        scroll = $(window).scrollTop(),
        windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight + 100){
            $(this).addClass('scrollin');
        }
        if (scroll > elemPos - windowHeight + 800){
            $(this).removeClass('scrollin');
        }
    });

    $('body').each(function(){
        var elemPos = $(this).offset().top,
        scroll = $(window).scrollTop(),
        windowHeight = $(window).height();
        // console.log(scroll);
        if(scroll >= 700){
            $('.beige_line').css({"width":'100vw'});
        }
        if(scroll < 700){
            $('.beige_line').css({"width":'0'});
        }
        if(scroll >= 1800){
            $('.beige_box1').css({"width":'35vw'});
            $('.navy_box1').css({"height":'32vw'});
        }
        if(scroll < 1800){
            $('.beige_box1').css({"width":'0'});
            $('.navy_box1').css({"height":'0'});
        }
        if(scroll > 2700 && scroll<4300){
            var video_pos = (scroll - 2700)/16;
            var ob_pos = "50% "+video_pos + "%";
            $('.mv_img').css({"object-position": ob_pos})
        }
        if(scroll >=370){
            $('.nav').removeClass('white');
        }
        if(scroll < 370){
            $('.nav').addClass('white');
        }
    });
});

$(function(){
    if($(window).width() >= 640){
    $('html,body').animate({ scrollTop: 0,scrollLeft: 0 }, '1');
    $('.logo img').css({"opacity":'1'})
    setTimeout(logo, 1000);
    }

    function logo() {
        $('.logo img').css({"top":'50vh'})
        $('.logo img').css({"left":'50vw'})
        $('.top_img').css({"opacity":'1'})
        $('.top_img').css({"width":'100vw'})
        $('.top_img').css({"filter": 'blur(3px);'})
    }

     // #で始まるアンカーをクリックした場合に処理
    $('a[href^="#"]').click(function() {
        $("li").addClass('rainbow');
        // スクロールの速度
        var speed = 400; // ミリ秒
        // アンカーの値取得
        var href= $(this).attr("href");
        // 移動先を取得
        var target = $(href == "#" || href == "" ? 'html' : href);
        // 移動先を数値で取得
        var position = target.offset().top;
        // スムーススクロール
        $('body,html').animate({scrollTop:position, scrollLeft:0}, speed, 'swing');
        return false;
    });
});

var url = ""
function linkUrl() {
    location.href = url

}

$('#go_top').click(function() {
    url = './index.html'
    $('#cover').css({"width":'100vw'});
    setTimeout(linkUrl, 1000);
});
$('#go_about, #go_about2').click(function() {
    url = './about.html'
    $('#cover').css({"width":'100vw'});
    setTimeout(linkUrl, 1000);
});
$('#go_product, #go_product2').click(function() {
    url = './product.html'
    $('#cover').css({"background-color":'var(--mainblack)'});
    $('#cover').css({"width":'100vw'});
    setTimeout(linkUrl, 1000);
});
$('#go_story ,#go_story2').click(function() {
    url = './story.html'
    $('#cover').css({"width":'100vw'});
    setTimeout(linkUrl, 1000);
});
$('#go_movie, #go_movie2').click(function() {
    url = './movie.html'
    $('#cover').css({"width":'100vw'});
    setTimeout(linkUrl, 1000);
});
$('#go_designer, #go_designer2').click(function() {
    url = './designer.html'
    $('#cover').css({"background-color":'var(--mainnavy)'});
    $('#cover').css({"width":'100vw'});
    setTimeout(linkUrl, 1000);
});

if($(window).width() < 640){
    var nav_non = true;
    $('ul').addClass('none');
    $('.menu-trigger').click(function(){
        if(nav_non){
            $('ul').removeClass('none');
            console.log(nav_non = false);
        }else{
            $('ul').addClass('none');
            console.log(nav_non= true);
        }
    });
}