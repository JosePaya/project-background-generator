var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector(".button1");

function setBodyGradient() {

	var gradientStyle = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	body.style.background = gradientStyle
	css.textContent = body.style.background + ";";
	button.style.backgroundImage = gradientStyle;

}

// This function returns an array of random numbers
function getRandomNumbers(totalNumbers) {
	var index = 0;
	var numbers = [];
	var rdmNumber = "";

	if (totalNumbers > 0) while (index < totalNumbers) {
		rdmNumber = Math.floor(Math.random() * 255).toString(16).padStart(2,'0');
		numbers.push(rdmNumber);
		index++;
	}

	return transformIntoRGB(numbers);
	
}

// This function transforms the array into a RGB CSS code
function transformIntoRGB(numbers) {

	var output = "#"
	for (var i = 0; i < numbers.length; i++) {
		output += numbers[i];
	}

	return output;
}

function setRandomGradient() {
	color1.value = getRandomNumbers(3);
	color2.value = getRandomNumbers(3);
	setBodyGradient();
}

setBodyGradient();
color1.addEventListener("input", setBodyGradient);
color2.addEventListener("input", setBodyGradient);
button.addEventListener("click", setRandomGradient)