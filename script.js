var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li");
var dltbutton = document.getElementsByClassName("delete");
var createdButton = document.createElement("button");
createdButton.className = "delete";
createdButton.innerHTML = "Delete";

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.appendChild(createdButton);
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", function(e) {
    if (e.target.tagName === 'LI'){
      e.target.className = "done";  // Check if the element is a LI
    }
});

ul.addEventListener("click", function(e) {
    if (e.target.tagName === 'BUTTON'){
      e.target.parentNode.parentNode.removeChild(e.target.parentNode);  // Check if the element is a LI
    }
});
