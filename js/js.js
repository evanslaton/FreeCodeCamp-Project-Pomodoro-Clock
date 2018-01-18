$(document).ready(function() {
	var sessionTime = 25;
	var breakTime = 5;
	var minCounter;
	var secCounter;
	var resetTracker = false;
	var oneSecondInterval;

	var startCountDown = () => {
		oneSecondInterval = setInterval(function() {
			countDown();
		}, 1000);
	};

	var stopCountDown = () => {
	    clearInterval(oneSecondInterval);
	}

	var countDown = () => {
    	if (secCounter === 60) {
    		minCounter--
    		$('#main-time-mins').text(minCounter);
    	}
        
        secCounter--;
        
        if (secCounter < 10) {
        	$('#main-time-sec').text('0' + secCounter);        	
        } else {
        	$('#main-time-sec').text(secCounter);
        }
        
        if (secCounter === 0) { secCounter = 60; }

        if (minCounter < 10) { $('#main-time-mins').text('0' + minCounter);	}

        if (minCounter === 0 && secCounter === 60) {
        	stopCountDown();
        }
	}



$('#start').on('click', () => {
	if (!resetTracker) {
		secCounter = 59;
		minCounter = sessionTime - 1;

		if (sessionTime < 10) {
			$('#main-time-mins').text('0' + minCounter);
		} else {
			$('#main-time-mins').text(minCounter);
		}
		$('#main-time-sec').text(secCounter);
		startCountDown();		
	} else {
		secCounter--;
		$('#main-time-sec').text(secCounter);		
		startCountDown();
	}
});

//Stop
$('#stop').on('click', () => {
	stopCountDown();
	resetTracker = true;
});

//Reset
$('#reset').on('click', () => {
	stopCountDown();
	resetTracker = false;
});

//Adds time to session/break counters
$('.add-time').on('click', function() {
	sessionTime = parseInt($(this).parent().parent().find($('.time')).text());
	sessionTime++;
	if (sessionTime > 99) {
		sessionTime = 1;
	}
	$(this).parent().parent().find($('.time')).text(sessionTime);
});

//Subtractss time to session/break counters
$('.subtract-time').on('click', function() {
	sessionTime = parseInt($(this).parent().parent().find($('.time')).text());
	sessionTime--;
	if (sessionTime < 1) {
		sessionTime = 99;
	}
	$(this).parent().parent().find($('.time')).text(sessionTime);
});




























});