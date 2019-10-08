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
        console.log(scroll);
        if(scroll >=370){
            $('ul').removeClass('white');
        }
        if(scroll < 370){
            $('ul').addClass('white');
        }

        if(scroll >=2000){
            $('.beige_line2').css({"width":'100vw'});
        }
        if(scroll < 2000){
            $('.beige_line2').css({"width":'0'});
        }
    });
});

$(function(){

    // $('html,body').animate({ scrollTop: 0,scrollLeft: 0 }, '1');
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