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

    $('.name_beige').each(function(){
        var elemPos = $(this).offset().top,
        scroll = $(window).scrollTop(),
        windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight + 100){
            $(this).css()
        }
        if (scroll > elemPos - windowHeight + 800){
            $(this).removeClass('scrollin');
        }
    });

    $('body').each(function(){
        var elemPos = $(this).offset().top,
        scroll = $(window).scrollTop(),
        windowHeight = $(window).height();
        console.log(scroll);
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
    });
});

$(function(){

    $('html,body').animate({ scrollTop: 0,scrollLeft: 0 }, '1');

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


function linkUrl() {
    location.href = './about.html'

}
var bt5 = document.getElementById('go_about');
bt5.addEventListener('click', function() {
    $('#cover').css({"width":'100vw'});
    setTimeout(linkUrl, 1000);
});