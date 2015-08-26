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

    $('.js-feature-podcast-trigger').on('click', function(e) {
        e.preventDefault();
        $(this).closest('.flip-container').toggleClass('flip');
    });

    $('.feature__content-podcast-playlist-item-like').on('click', function(e) {
        e.preventDefault();
        $(this).toggleClass('feature__content-podcast-playlist-item-like--active');
    });

    $('.feature__content-podcast-playlist-item-play').on('click', function(e) {
        e.preventDefault();
    });

    function getTarget() {
        var today = moment(),
            target = today.clone().set('hour', 12).set('minute', 0).set('second', 0).day(today.isoWeekday() == 5 && today.get('hour') >= 12 ? 12 : 5).toDate();
        return target;
    }
});