# Countdown JS

A fancy animated countdown timer done in css and javascript.

## Usage

Example:

```
<div class="countdown"></div>

<script>
/*
 * Set desired timestamp
 * 
 * Example:
 * var timestamp = new Date('Sun Dec 24 2013 23:59:59 GMT+0100');
 */
var timestamp = new Date(+new Date() + 12096e5); // Two weeks from now
$('.countdown').countdown({
	timestamp : timestamp,
	callback: function(secondsLeft) {
		console.log('seconds left', secondsLeft);
	}
});
</script>
```