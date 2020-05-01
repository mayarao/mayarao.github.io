let carouselWidth = 1440;

let prevButton = document.getElementById("button-previous");
let nextButton = document.getElementById("button-next");
let imageRow = document.getElementById("carousel-image-row");

let imageNum = 0;

function showNextImage() {
	imageNum = imageNum + 1;
	let pixels = (imageNum * carouselWidth) * (-1);
	imageRow.style.left = pixels + "px";
	checkControls.call();
}

nextButton.onclick = showNextImage;

function showPrevImage() {
	imageNum = imageNum - 1;
	let pixels = (imageNum * carouselWidth) * (-1);
	imageRow.style.left = pixels + 'px';
	checkControls.call();
}

prevButton.onclick = showPrevImage;

let totalImages = document.getElementsByClassName("carousel-image").length;

 function checkControls() {
	if (imageNum == 0) {
		prevButton.classList.add('hidden');
	}
	else if (prevButton.classList.contains("hidden")) {
		prevButton.classList.remove('hidden');
	}
	if (imageNum == 2) {
		nextButton.classList.add('hidden');
	}
	else if (nextButton.classList.contains("hidden")) {
		nextButton.classList.remove('hidden');
	}
}
