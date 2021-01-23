var container = document.getElementById("container");

var aantalButtons = 30;

var clicks = [];

var colors = [];

var aantalKleuren = 0;

colorInfo();
for (i=1; i<=aantalButtons; i++) {
	var addButton = document.createElement("button");
	var buttonText = document.createTextNode(i);
	addButton.appendChild(buttonText);
	addButton.classList = "buttons"
	addButton.id = "button_"+i;
	clicks["button_"+i] = 0;
	addButton.addEventListener("click", function(){
		event.target.style.backgroundColor = colors[clicks[event.target.id]];
		clicks[event.target.id]++
		if (clicks[event.target.id] > aantalKleuren) {
			event.target.remove();
		}
		console.log(clicks[event.target.id])
	})
	container.appendChild(addButton);
}

function colorInfo() {
	var loop = true;
	while (loop == true) {
		aantalKleuren = prompt("Hoeveel kleuren wil je zien?");
		if (isNaN(aantalKleuren) || aantalKleuren < 1) {
			alert("Ongeldige invoer");
		}
		else {
			loop = false;
		}
	}
	for (i=0; i<aantalKleuren; i++) {
		colors[i] = prompt("Kleur " + (i+1));
		if (colors[i] != "red" && colors[i] != "blue" && colors[i] != "green" && colors[i] != "black" && colors[i] != "purple" && colors[i] != "brown" && colors[i] != "yellow" && colors[i] != "white") {
			alert("Ongeldige invoer");
			i--
		}
	}
	console.log(colors);
}









