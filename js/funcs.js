/**
 * Created by wes on 1/16/16.
 */

var loc = {};

function toggleScreenTop (element, state) {
    $(element).toggleClass('pos-fixed', state);
    //console.log('Ran posFixed ' + state);
}

function float_tops() {
    $('.float-top').each(function() {
        loc[$(this).attr('id')] = $(this).offset().top;
    });

    $(document).resize(function() {
        $('.float-top').each(function() {
            loc[$(this).attr('id')] = $(this).offset().top;
        });
    });

    $(window).scroll(function(){
        $('.float-top').each(function() {
            var hH = $(this).outerHeight(),
                wS = $(document).scrollTop();
            toggleScreenTop(this, (wS > (loc[$(this).attr('id')]-hH)));
            console.log(wS, loc[$(this).attr('id')]-hH);
        });
    });
}
