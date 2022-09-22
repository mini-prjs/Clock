let date, hours, minutes, seconds, ampm;
const time = document.getElementById('time');


const getCurrentTime = () => {
	date = new Date();
	hours = date.getHours();
	minutes = date.getMinutes();
	seconds = date.getSeconds();
}
const formatOneDigital = () => {
	hours = hours < 10 ? '0' + hours : hours;
	minutes = minutes < 10 ? '0' + minutes : minutes;
	seconds = seconds < 10 ? '0' + seconds : seconds;
}
const reset12 = () => {
	if (hours > 12) {
		hours -= 12;
		ampm = `PM`;
	} else {
		ampm = `AM`;
	}
}


setInterval(setTime = () => {
	getCurrentTime();
	reset12();
	formatOneDigital();
	time.innerText = hours + ":" + minutes + ":" + seconds + " " + ampm;
}, 1000);