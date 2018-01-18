$(document).ready(function() {
	var sessionTime;
	var breakTime;

//Adds time to session/break counters
$('.add-time').on('click', function() {
	sessionTime = $(this).parent().parent().find($('.time')).text();
	sessionTime++;
	if (sessionTime > 99) {
		sessionTime = 1;
	}
	$(this).parent().parent().find($('.time')).text(sessionTime);
});

//Subtractss time to session/break counters
$('.subtract-time').on('click', function() {
	sessionTime = $(this).parent().parent().find($('.time')).text();
	sessionTime--;
	if (sessionTime < 1) {
		sessionTime = 99;
	}
	$(this).parent().parent().find($('.time')).text(sessionTime);
});




























});