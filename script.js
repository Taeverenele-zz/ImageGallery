let imagesContainer = document.getElementById('image_gallery');
let imagesArray = Array.from(document.querySelectorAll('.image'));
let input = document.getElementById('image_filter');
let images = document.getElementsByTagName('img');

// Function to create random number
function randNum(){ 
    return (Math.round(Math.random())-0.5);
 }

// Shuffle images function
shuffleImages = () => {
    imagesArray.sort(randNum);
    for (let i = 0; i < imagesArray.length; i++) {
        imagesContainer.appendChild(imagesArray[i]);
    }
}


// Search for images function
imageSearch = () => {
    input.addEventListener('keyup', function() {
        let inputValue = input.value;
        for (let i = 0; i < images.length; i ++) {
            let imagesAltValue = images[i].alt;
            if (imagesAltValue.indexOf(inputValue) > -1) {
                images[i].style.display = '';
            } else {
                images[i].style.display = 'none';
            }
        }
    })
}
shuffleImages();
imageSearch();