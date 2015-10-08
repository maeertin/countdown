/**
 * Countdown timer 0.1.0
 * @author Martin Barri
 * @website https://github.com/maeertin/countdown
 */
(function($) {
	
	// Creating the plugin
	$.fn.countdown = function(settings) {
		var $el = this;
		
		// Number of seconds in every time division
		var days    = 24*60*60,
			hours   = 60*60,
			minutes = 60;

		var _left, left, d, h, m, s;

		// Extend settings
		settings = $.extend({
			timestamp : new Date(+new Date() + 12096e5), // two weeks from now
			theme     : 'advanced'
		}, settings);

		// Initialize the plugin
		init();

		function init() {
			$el.append(
				'<div class="countdown-flip js-dayPlay" />' +
				'<div class="countdown-flip js-hourPlay" />' +
				'<div class="countdown-flip js-minutePlay" />' +
				'<div class="countdown-flip js-secondPlay" />'
			).addClass('countdown theme-' + settings.theme);

			tick();
		}

		function twoDigit(number) {
			return number < 10 ? '0' + number : number;
		}

		function animate(target, number) {
			if (settings.theme !== 'advanced') {
				$el.find(target).html(number);

				return;
			}

			var $target  = $el.find(target),
				pageLoad = $target.is(':empty'),
				active   = $target.find('.start, .active').data('active'),
				before   = ~~number - 1 !== 10 ? ~~number - 1 : 0;

			if (number != active) {
				$target.find('.before').remove();
				$target.find('.start, .active').removeClass('start active').addClass('before');

				var output = 
					'<div class="countdown-ticker ' + ( pageLoad ? 'start' : 'active' ) + '" data-active="' + number + '">' +
						'<a>' +
							'<div class="up">' +
								'<div class="shadow"></div>' +
								'<div class="inn">' + number + '</div>' +
							'</div>' +
							'<div class="down">' +
								'<div class="shadow"></div>' +
								'<div class="inn">' + number + '</div>' +
							'</div>' +
						'</a>' +
					'</div>';

				$target.append(output);
			}
		}

		function tick() {
			// Time left
			left = Math.floor((settings.timestamp - (new Date())) / 1000);
			left = _left = Math.max(left, 0);

			// Callback
			if (settings.callback)
				settings.callback(left);
			
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
			animate('.js-dayPlay', d);

			// Hours
			animate('.js-hourPlay', h);

			// Minutes
			animate('.js-minutePlay', m);

			// Seconds
			animate('.js-secondPlay', s);

			// Scheduling another call of this function in 1s
			if (_left > 0)
				setTimeout(tick, 1000);
		}

		return this;
	};

})(jQuery);