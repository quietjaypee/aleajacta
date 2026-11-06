const buttons = document.querySelectorAll("input");
buttons.forEach(button => {
	button.addEventListener("click", function (e) {
		console.log(button)
		let res = Math.floor((Math.random() * parseInt(e.target.value)) + 1);
		document.getElementById("result").innerHTML= `${res}`
	});
});

