# Countdown Timer

A fancy animated countdown timer done in css and javascript. Demo: http://martin-barri.com/demos/countdown/

## Usage

Include javascript and css files.

Example:

```
<div class="countdown"></div>

<script>
// Set desired timestamp
var ts = new Date('Sun Dec 24 2013 23:59:59 GMT+0100');
$('.countdown').countdown({
	timestamp: ts,
	callback: function(secondsLeft) {
		// ...
	}
});
</script>
```