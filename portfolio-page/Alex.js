
const imageUrls = [
   'Image 1.jpg',
   'Image 2.jpg',
   'Image 3.jpg',
   'Image 4.jpg',
   'Image 5.jpg',
   'Image 6.jpg',


];


const mainImage = document.getElementById('Main Image');
const nextButton = document.getElementById('next-button');

let currentIndex = 0;


function showNextImage() {
    currentIndex = (currentIndex + 1) % imageUrls.length;
    mainImage.src = imageUrls[currentIndex];
}

// Add click event listener to the "Next" button
nextButton.addEventListener('click', showNextImage);