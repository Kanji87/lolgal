/**
 * Created by RPolonkoev on 18.08.15.
 */
/*
 *   Third party
 */

//= ../../bower_components/jquery/dist/jquery.min.js
//= parts/moment.min.js
//= parts/jquery.plugin.min.js
//= parts/jquery.countdown.min.js
//= parts/social-likes.min.js
//= parts/mediaelement-and-player.min.js

/*
 *   Custom
 */

$(function() {
    $('.feature__xur-timer-countdown').countdown({
        until: getTarget(),
        format: 'dHM',
        labels: ['Y', 'M', 'W', 'D', 'H', 'M', 'S'],
        labels1: ['Y', 'M', 'W', 'D', 'H', 'M', 'S'],
        onExpiry: function() {
            $(this).countdown('option', {until: getTarget()});
        }
    });

    $('.header__search-form-input').focusin(function(){
        $('.header__search').addClass('focused');
    });
    $('.header__search-form-input').focusout(function(){
        $('.header__search').removeClass('focused');
    });


    function getTarget() {
        var today = moment(),
            target = today.clone().set('hour', 12).set('minute', 0).set('second', 0).day(today.isoWeekday() == 5 && today.get('hour') >= 12 ? 12 : 5).toDate();
        return target;
    }
});