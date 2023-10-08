var images = [
    'images/bird.jpg',
    'images/camel.jpg',
    'images/cat.jpg',
    'images/owl.jpg',
    'images/seahorse.jpg'
];

var i = 0;
var isRunning = false;

function startSlideshow() {
    if (isRunning) {
        return;
    }
    isRunning = true;
    fadeImage();
}

function fadeImage() {
    $("#slideshow").fadeOut(1000, () => {
        i = (i + 1) % images.length;
        $("#slideshow").attr('src', images[i]);
        $("#slideshow").fadeIn(1000, () => {
            if(isRunning) {
                fadeImage();
            }
        });
    });
}

function stopSlideshow() {
    isRunning = false;
}

$('#start').click(startSlideshow);
$('#stop').click(stopSlideshow);