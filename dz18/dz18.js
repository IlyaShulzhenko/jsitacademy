(function(){
const clockCanvas = document.getElementById('canvas');
const context = clockCanvas.getContext('2d');
const width = parseFloat(clockCanvas.getAttribute('width'));
const height = parseFloat(clockCanvas.getAttribute('height'));
const widthHalf = width / 2;
const heightHalf = height / 2;
const bias = 30;
const radiusClock = widthHalf;
const radiusNumber = 0.8 * radiusClock;

function drawClock(drawing) {
	
	context.beginPath();
	context.arc(300, 300, 300, 0, 2*Math.PI);
	context.fillStyle = 'yellow';
	context.fill();

	for (let i = 1; i <= 12; i++) {

		const biasRad = (bias * i * (2 * Math.PI)) / 360;
		const centerCircleX = radiusClock + radiusNumber * Math.sin(biasRad);
		const centerCircleY = radiusClock - radiusNumber * Math.cos(biasRad);
		
		context.beginPath();
		context.arc(centerCircleX, centerCircleY, 40, 0, 2 * Math.PI);
		context.fillStyle = 'green';
		context.fill();

		context.fillStyle = 'black';
		context.textAlign = 'center';
		context.textBaseline = 'middle';
		context.font = 'normal bold 2rem Time New Roman';
		context.fillText(i, centerCircleX, centerCircleY); 

		const digitalСlock = new Date();
		const time = digitalСlock.toLocaleTimeString('ru');
		context.fillStyle = 'black';
		context.font = 'normal 2rem Time New Roman';
		context.fillText(time, 300, 200);

		const seconds = digitalСlock.getSeconds() * 6 - 90;
		const minutes = digitalСlock.getMinutes() * 6 - 90;
		const hours = (digitalСlock.getHours() + digitalСlock.getMinutes() / 60 + digitalСlock.getSeconds() * 3600) * 30 - 90;

		let secondsRadian = seconds * 2 * Math.PI / 360,
			minutesRadian = minutes * 2 * Math.PI / 360,
			hoursRadian = hours * 2 * Math.PI / 360;

		let secondLength = 250,
			minuteLength = 210,
			hourLength = 170;

		let secondX = radiusClock + secondLength * Math.cos(secondsRadian),
		    secondY = radiusClock + secondLength * Math.sin(secondsRadian);

		context.beginPath();
		context.strokeStyle = 'white';
		context.lineWidth = 4;
		context.lineCap = 'round';
		context.moveTo(300, 300);
		context.lineTo(secondX, secondY);
		context.stroke();

		let minuteX = radiusClock + minuteLength * Math.cos(minutesRadian),
		    minuteY = radiusClock + minuteLength * Math.sin(minutesRadian);

		context.beginPath();
		context.strokeStyle = 'red';
		context.lineWidth = 4;
		context.lineCap = 'round';
		context.moveTo(300, 300);
		context.lineTo(minuteX, minuteY);
		context.stroke();

		let hourX = radiusClock + hourLength * Math.cos(hoursRadian),
		    hourY = radiusClock + hourLength * Math.sin(hoursRadian);

		context.beginPath();
		context.strokeStyle = 'black';
		context.lineWidth = 4;
		context.lineCap = 'round';
		context.moveTo(300, 300);
		context.lineTo(hourX, hourY);
		context.stroke();
	}
}
setInterval(drawClock, 1000);
}())
