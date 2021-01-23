var clicks = [];
var colors = ["red", "purple", "blue", "black"];
for (i=1; i<=30; i++) {
	var addButton = document.createElement("button");
	var buttonText = document.createTextNode(i);
	addButton.appendChild(buttonText);
	addButton.id = "button"+i;
	clicks[i] = 0;
	addButton.addEventListener("click", function(){
		event.target.style.backgroundColor = colors[clicks[event.target.innerHTML]];
		clicks[event.target.innerHTML]++
		if (clicks[event.target.innerHTML] > 4) {
			event.target.remove();
		}	
	})
	container.appendChild(addButton);
}