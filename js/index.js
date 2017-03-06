/**
 * Created by yunlo on 2017/3/3.
 */
$(function () {

    var img = ['img/lx/lx_1.png',
        'img/lx/lx_2.png',
        'img/lx/lx_3.png',
        'img/lx/lx_4.png',
        'img/lx/lx_5.png',
        'img/lx/lx_6.png',
        'img/lx/lx_7.png',];
    meteorShowers.option(img);
    meteorShowers.start();


    $(".playBtn").click(function () {
        var src = $(this).attr("src");
        if (src == "img/pause.png") {
            $(this).attr("src", "img/play.png");
            $("audio").get(0).pause();
            $(".musicPanel").addClass("stopAniamtion");
            meteorShowers.stop();
        }
        else {
            $(this).attr("src", "img/pause.png");
            $("audio").get(0).play();
            $(".musicPanel").removeClass("stopAniamtion");
            meteorShowers.start();
        }
    });

    $("#code").typewriter();

    // $("#likeButton").click(function () {
    //     var img = $(this).find("img").get(0);
    //     var src = $(img).attr("src");
    //
    //     if(src == "img/unlike.png")
    //     {
    //         $(img).attr("src", "img/like.png");
    //     }
    //     else
    //     {
    //         $(img).attr("src", "img/unlike.png");
    //     }
    // });
    //
    // $("#starButton").click(function () {
    //
    //     var img = $(this).find("img").get(0);
    //     var src = $(img).attr("src");
    //
    //     if(src == "img/unstar.png")
    //     {
    //         $(img).attr("src", "img/star.png");
    //     }
    //     else
    //     {
    //         $(img).attr("src", "img/unstar.png");
    //     }
    // });
});

(function($) {
    $.fn.typewriter = function() {
        this.each(function() {
            var $ele = $(this), str = $ele.html(), progress = 0;
            $ele.html('');
            var timer = setInterval(function() {
                var current = str.substr(progress, 1);
                if (current == '<') {
                    progress = str.indexOf('>', progress) + 1;
                } else {
                    progress++;
                }
                $ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
                if (progress >= str.length) {
                    clearInterval(timer);
                }
            }, 100);
        });
        return this;
    };
})(jQuery);