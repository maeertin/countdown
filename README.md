# Countdown JS

A fancy animated countdown timer done in css and javascript.

## Usage

Example:

```
<div class="countdown"></div>

<script>
// Set desired timestamp
var timestamp = new Date('Sun Dec 24 2013 23:59:59 GMT+0100');
$('.countdown').countdown({
	timestamp: timestamp,
	callback: function(secondsLeft) {
		// ...
	}
});
</script>
```