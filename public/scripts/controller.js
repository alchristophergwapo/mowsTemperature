// basic functionalities

client = mqtt.connect("wss://test.mosquitto.org:8081/mqtt");


// connect callback function
client.on("connect", function () {
	Swal.fire({
		position: 'top-end',
		type: 'success',
		title: 'Your successfully connect to the broker!',
		showConfirmButton: false,
		timer: 1000
	})
	console.log("success");
});
client.on("message", function (topic, payload) {
	console.log([topic, payload].join(": "));
	if (topic == "rosedaine") {
		var payl = String(payload).split(",");
		var c = (payl[0].substring(1,payl[0].length)).split(".");
		var f = payl[1].substring(0,payl[1].replace(")","").length).split(".");
		$('#temperature3').text(c[0]+":"+c[1].substring(0,2)+" C,"+f[0]+":"+f[1].substring(0,2)+" F");
	}
	if (topic == "amabel") {
		payl = String(payload).split(",");
		var c = (payl[0].substring(1,payl[0].length)).split(".");
		var f = payl[1].substring(0,payl[1].replace(")","").length).split(".");
		$('#temperature16').text(c[0]+":"+c[1].substring(0,2)+" C,"+f[0]+":"+f[1].substring(0,2)+" F");
	}
	if (topic == "sample") {
		payl = String(payload).split(",");
		var c = (payl[0].substring(1,payl[0].length)).split(".");
		var f = payl[1].substring(0,payl[1].replace(")","").length).split(".");
		$('#temperature11').text(c[0]+":"+c[1].substring(0,2)+" C,"+f[0]+":"+f[1].substring(0,2)+" F");
	}
	if (topic == "MaryAira/temperature") {
		payl = String(payload).split(",");
		var c = (payl[0].substring(1,payl[0].length)).split(".");
		var f = payl[1].substring(0,payl[1].replace(")","").length).split(".");
		$('#temperature4').text(c[0]+":"+c[1].substring(0,2)+" C,"+f[0]+":"+f[1].substring(0,2)+" F");
	}
	if (topic == "louie/cindy/temp") {
		payl = String(payload).split(",");
		var c = (payl[0].substring(1,payl[0].length)).split(".");
		var f = payl[1].substring(0,payl[1].replace(")","").length).split(".");
		$('#temperature7').text(c[0]+":"+c[1].substring(0,2)+" C,"+f[0]+":"+f[1].substring(0,2)+" F");
	}
	if (topic == "diansin/gabatan/temp") {
		payl = String(payload).split(",");
		var c = (payl[0].substring(1,payl[0].length)).split(".");
		var f = payl[1].substring(0,payl[1].replace(")","").length).split(".");
		$('#temperature8').text(c[0]+":"+c[1].substring(0,2)+" C,"+f[0]+":"+f[1].substring(0,2)+" F");
	}
	if (topic == "Luz-Ian/temp") {
		payl = String(payload).split(",");
		var c = (payl[0].substring(1,payl[0].length)).split(".");
		var f = payl[1].substring(0,payl[1].replace(")","").length).split(".");
		$('#temperature15').text(c[0]+":"+c[1].substring(0,2)+" C,"+f[0]+":"+f[1].substring(0,2)+" F");
	}
	if (topic == "pasores/temperature") {
		payl = String(payload).split(",");
		var c = (payl[0].substring(1,payl[0].length)).split(".");
		var f = payl[1].substring(0,payl[1].replace(")","").length).split(".");
		$('#temperature9').text(c[0]+":"+c[1].substring(0,2)+" C,"+f[0]+":"+f[1].substring(0,2)+" F");
	}
	if (topic == "alobar/temperature") {
		payl = String(payload).split(",");
		var c = (payl[0].substring(1,payl[0].length)).split(".");
		var f = payl[1].substring(0,payl[1].replace(")","").length).split(".");
		$('#temperature10').text(c[0]+":"+c[1].substring(0,2)+" C,"+f[0]+":"+f[1].substring(0,2)+" F");
	}
	if (topic == "preAnn/tem") {
		payl = String(payload).split(",");
		var c = (payl[0].substring(1,payl[0].length)).split(".");
		var f = payl[1].substring(0,payl[1].replace(")","").length).split(".");
		$('#temperature13').text(c[0]+":"+c[1].substring(0,2)+" C,"+f[0]+":"+f[1].substring(0,2)+" F");
	}
	if (topic == "tychu/temp") {
		payl = String(payload).split(",");
		var c = (payl[0].substring(1,payl[0].length)).split(".");
		var f = payl[1].substring(0,payl[1].replace(")","").length).split(".");
		$('#temperature12').text(c[0]+":"+c[1].substring(0,2)+" C,"+f[0]+":"+f[1].substring(0,2)+" F");
	}
	if (topic == "renzyclaire/temp") {
		payl = String(payload).split(",");
		var c = (payl[0].substring(1,payl[0].length)).split(".");
		var f = payl[1].substring(0,payl[1].replace(")","").length).split(".");
		$('#temperature18').text(c[0]+":"+c[1].substring(0,2)+" C,"+f[0]+":"+f[1].substring(0,2)+" F");
	}

})

// function for subscribe button

client.subscribe({
	'sample': { qos: 0 },
	'MaryAira/temperature': { qos: 0 },
	'rosedaine': { qos: 0 },
	'louie/cindy/temp': { qos: 0 },
	'amabel': { qos: 0 },
	'diansin/gabatan/temp': {qos: 0},
	'Luz-Ian/temp': {qos: 0},
	'pasores/temperature': {qos: 0},
	'alobar/temperature': {qos: 0},
	'preAnn/tem': {qos: 0},
	'tychu/temp': {qos: 0},
	'renzyclaire/temp': {qos: 0},
}, function (err) {
	if (err) {
		Swal.fire({
			type: 'error',
			title: 'Oops...',
			text: 'An error occurs!',
		});
	}



});
