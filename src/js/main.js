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

$(function(){
    $('.feature__xur-timer-countdown').countdown({
        until: getTarget(),
        format: 'dHM',
        labels: ['Y', 'M', 'W', 'D', 'H', 'M', 'S'],
        labels1: ['Y', 'M', 'W', 'D', 'H', 'M', 'S'],
        onExpiry: function(){
            $(this).countdown('option', {until: getTarget()});
        }
    });

    function getTarget() {
        //var target = new Date();
        //if (target.getHours() < 12 || (target.getHours() == 12)) {
        //
        //    target.setHours(12, 0, 0, 0);
        //}
        //else if (target.getHours() < 16 || (target.getHours() == 16 && target.getMinutes() < 20)) {
        //    target.setHours(16, 20, 0, 0);
        //}
        //else {
        //    target.setDate();
        //    target.setHours(12, 0, 0, 0);
        //}
        var today = moment(),
        target = today.clone().set('hour', 12).set('minute', 0).set('second', 0).day(today.isoWeekday() == 5 && today.get('hour') >= 12 ? 12 : 5).toDate();
        return target;
    }

    function restartCountdown() {
        $('.feature__xur-timer-countdown').countdown({until: getTarget()});
    }
});