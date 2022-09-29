class AlarmClock {
	constructor() {
		this.alarmCollection = [];
		this.timerId = null;
	}
	addClock(time, callback, id) {
		if (!id) {
			throw new Error('error text');
		} else if (this.alarmCollection.some(bell => bell.id === id)) {
			console.error('Такой идентификатор уже есть');
			return;
		}
		this.alarmCollection.push({ id, time, callback });
	}
	removeClock(id) {
		const lengthBeforeFilter = this.alarmCollection.length;
		this.alarmCollection = this.alarmCollection.filter(bell => bell.id !== id);
		return this.alarmCollection.length !== lengthBeforeFilter;
	}
	getCurrentFormattedTime() {
		return new Date().toLocaleTimeString("ru-Ru", {
			hour: "2-digit",
			minute: "2-digit",
		});

	}
	start() {
		if (this.timerId) {
			return;
		}
		const checkClock = (alarm) => {
			if (alarm.time === this.getCurrentFormattedTime()) {
				alarm.callback();
			}
		}
		this.timerId = setInterval(() => {
			this.alarmCollection.forEach(checkClock);
		}, 1000);
	}
	stop() {
		if (this.timerId) {
			clearInterval(this.timerId);
			this.timerId = null;
		}
	}
	printAlarms() {
		this.alarmCollection.forEach((bell) => console.log('Будильник №' + bell.id + ' заведён  на ' + bell.time));
	}

	clearAlarms() {
		this.stop();
		this.alarmCollection = [];
	}

}