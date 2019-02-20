/*
*functions and behavior for image slider built for front page of Allenby Art
*/

//get reference to the box containing the images
var elem = document.getElementById("animate");
//get reference to the box bounding the image container	
var container = document.getElementById("animation-container");
//get array of references to children of the image container
var image = new Array(elem.children.length);
for (var i = 0; i < image.length; i++) {
	image[i] = elem.children[i];
}
//get distance from left edge of image container to center of third image
var pos = image[0].offsetWidth + (image[1].offsetWidth/2);
elem.style.left = ((container.offsetWidth/2) - pos) + 'px';

function imageSliderMove() {
	
	//rearrange images in array
	var imageHolder = image[image.length-1];
	for (var i = image.length-1; i > 0; i--) {
		image[i] = image[i-1];
	}
	image[0] = imageHolder;

	//rearrange image order in container
	for (var i = 0; i < image.length; i++) {
		image[i].style.order = i+1;
	}

	//move slider to center what is now third image, to give the illusions it did not move.
	pos = image[0].offsetWidth + image[1].offsetWidth + (image[2].offsetWidth/2);
	elem.style.left = ((container.offsetWidth/2) - pos) + 'px';

	//get distance from left edge of container to the center of the second image
	var newPos =image[0].offsetWidth + image[1].offsetWidth/2;

	//slide container holding images from center of third image to center of second
	$(elem).animate(
		{left: ((container.offsetWidth/2) - newPos) + 'px' },
		2000
	)
}
//var startTimer = setInterval(imageSliderMove, 4000);

window.onload = setInterval(imageSliderMove, 4000);