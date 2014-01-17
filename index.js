var timestr = require('timestr');

function atNext(interval, cb) {
	if(typeof interval === 'string') interval = timestr(interval);

	var msInterval = interval.toMilliseconds(),
		msCurrent = Date.now(),
		msElapsed = msCurrent % msInterval,
		msRemaining = msInterval - msElapsed;

	setTimeout(cb, msRemaining);
}

function atEvery(interval, cb) {
	interval = timestr(interval);

	function setNext() {
		atNext(interval, function() {
			if(typeof process !== 'undefined')
				process.nextTick(cb);
			else
				cb();
			setNext();
		});
	}

	setNext();
}

module.exports = {
	atNext: atNext,
	atEvery: atEvery
};
