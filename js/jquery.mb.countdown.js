/**
 * Countdown timer 0.0.1
 * @author Martin Barri
 */
(function($){
	
	// Creating the plugin
	$.fn.countdown = function(settings){
		
		var options = $.extend({
			timestamp: 0
		}, settings);
		
		// Number of seconds in every time division
		var days    = 24*60*60,
			hours   = 60*60,
			minutes = 60;

		var left, d, h, m, s;

		// Initialize the plugin
		init(this);

		(function tick(){
			
			// Time left
			left = Math.floor((options.timestamp - (new Date())) / 1000);
			
			if (left < 0) {
				left = 0;
			}
			
			// Number of days left
			d = Math.floor(left / days);
			d = twoDigit(d);
			left -= d*days;
			
			// Number of hours left
			h = Math.floor(left / hours);
			h = twoDigit(h);
			left -= h*hours;
			
			// Number of minutes left
			m = Math.floor(left / minutes);
			m = twoDigit(m);
			left -= m*minutes;
			
			// Number of seconds left
			s = left;
			s = twoDigit(s);
			
			// Days
			animate('.dayPlay', d);

			// Hours
			animate('.hourPlay', h);

			// Minutes
			animate('.minutePlay', m);

			// Seconds
			animate('.secondPlay', s);

			// Scheduling another call of this function in 1s
			setTimeout(tick, 1000);
		})();

		function init(element) {
			element.append('\
				<div class="flip dayPlay" />\
				<div class="flip hourPlay" />\
				<div class="flip minutePlay" />\
				<div class="flip secondPlay" />\
			');
		}

		function twoDigit(number) {
			return number < 10 ? '0' + number : number;
		}

		function animate(target, number) {
			var pageLoad = $(target).is(':empty'),
				active = $('.start, .active', target).data('active'),
				before = ((parseInt(number) - 1) !== 10) ? parseInt(number) - 1 : 0;

			if ( number != active ) {
				$('.before', target).remove();
				$('.start, .active', target).removeClass('start active').addClass('before');

				var output = '\
					<div class="ticker ' + ( pageLoad ? 'start' : 'active' ) + '" data-active="' + number + '">\
						<a>\
							<div class="up">\
								<div class="shadow"></div>\
								<div class="inn">' + number + '</div>\
							</div>\
							<div class="down">\
								<div class="shadow"></div>\
								<div class="inn">' + number + '</div>\
							</div>\
						</a>\
					</div>';
				$(target).append(output);
			}
		}

		return this;
	};

})(jQuery);