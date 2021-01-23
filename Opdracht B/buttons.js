var container = document.getElementById("container");

var buttons = document.getElementsByClassName("buttons");

var aantalButtons = 0;

function qtyButtons() {
	var loop = true;
	while (loop == true) {
		aantalButtons = prompt("How many buttons would you like to see?");
		if (isNaN(aantalButtons) || aantalButtons <= 0) {
			alert("Incorrect input");
			console.log("hello world")
		}
		else {
			loop = false
		}
	}
}
qtyButtons();

for (i=1; i<=aantalButtons; i++) {
	var addButton = document.createElement("button");
	var buttonText = document.createTextNode(i);
	addButton.appendChild(buttonText);
	addButton.classList = "buttons"
	addButton.id = "button"+i;
	addButton.addEventListener("click", function(){
		event.target.style.backgroundColor = "red";
	})
	container.appendChild(addButton);
}









