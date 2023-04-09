// Get all the text boxes
const textboxes = document.querySelectorAll(".text-box");

// Set the index of the current active text box to 0
let currentTextboxIndex = 0;

// Show the first text box
textboxes[currentTextboxIndex].classList.add("active");

// Start the rotation timer
setInterval(() => {
	// Hide the current active text box
	textboxes[currentTextboxIndex].classList.remove("active");

	// Increment the index of the current active text box
	currentTextboxIndex = (currentTextboxIndex + 1) % textboxes.length;

	// Show the next text box
	textboxes[currentTextboxIndex].classList.add("active");

	// Animate the text slider in the active text box
	const activeTextbox = textboxes[currentTextboxIndex];
	const textSlider = activeTextbox.querySelector(".text-slider");
	const firstSlide = textSlider.querySelector(".slide:first-child");
	const slideHeight = firstSlide.offsetHeight;
	textSlider.style.transform = `translateY(-${slideHeight}px)`;
	setTimeout(() => {
		textSlider.appendChild(firstSlide);
		textSlider.style.transition = "none";
		textSlider.style.transform = "translateY(0)";
		setTimeout(() => {
			textSlider.style.transition = "transform 1s ease";
		}, 0);
	}, 1000);
}, 10000);




