let clock = document.getElementById('clock'),
	color = document.getElementById('color');

function clockColor() {
	let time = 	new Date(),
		h = 	time.getHours().toString(),
		m = 	time.getMinutes().toString(),
		s = 	time.getUTCSeconds().toString();

		if (h.length < 2) {
			h = '0' + h;
		}
		if (m.length < 2) {
			m = '0' + m;
		}
		if (s.length < 2) {
			s = '0' + s;
		}

		let clockString = h + ' : ' + m + ' : ' + s;
		let colorString = '#' + h + m + s;

		clock.textContent = clockString;
		color.textContent = colorString;

		document.body.style.background = colorString;

}

setInterval(clockColor, 1000);


