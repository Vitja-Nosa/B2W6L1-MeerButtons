var container = document.getElementById("container");

var aantalButtons = 30;

for (i=1; i<=aantalButtons; i++) {
	var addButton = document.createElement("button");
	var buttonText = document.createTextNode(i);
	addButton.appendChild(buttonText);
	addButton.classList = "buttons"
	addButton.id = "button"+i;
	addButton.addEventListener("click", function(){
		if (event.target.style.backgroundColor != "red" && event.target.style.backgroundColor != "purple" && event.target.style.backgroundColor != "blue" && event.target.style.backgroundColor != "black") {
			event.target.style.backgroundColor = "red"
		}
		else if (event.target.style.backgroundColor == "red") {
			event.target.style.backgroundColor = "purple"
		}
		else if (event.target.style.backgroundColor == "purple") {
			event.target.style.backgroundColor = "blue"
		}
		else if (event.target.style.backgroundColor == "blue") {
			event.target.style.backgroundColor = "black"
		}
		else {
			event.target.remove()
			console.log("hello world")
		}
	})
	container.appendChild(addButton);
}









