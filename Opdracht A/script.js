var container = document.getElementById("container");

for (i=1; i<4; i++) {
	var addButton = document.createElement("button");
	var textButton = document.createTextNode("Button " + i);
	addButton.appendChild(textButton);
	addButton.classList = "buttons"
	addButton.id = "button"+i;
	container.appendChild(addButton);
}

button1.addEventListener("click", function(){
	document.body.style.backgroundColor = "green";
})
button2.addEventListener("click", function(){
	document.body.style.backgroundColor = "red";
})
button3.addEventListener("click", function(){
	document.body.style.backgroundColor = "blue";
})
