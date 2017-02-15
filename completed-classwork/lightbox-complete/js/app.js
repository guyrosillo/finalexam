//Problem: User when clicking on image goes to a dead end
//Solution: Create an overlay with the large image - Lightbox

var overlay = document.querySelector('.overlay');
var figure = document.querySelector('figure');
var figureImg = document.querySelector('figure img');
var figcaption = document.querySelector('figure figcaption');

//1. Capture the click event on a link to an image
document.querySelectorAll("#imageGallery a").forEach(function(anchor) {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        //1.1 Show the overlay.
        overlay.classList.toggle('show');
        //1.2 Update overlay with the image linked in the link
        //1.3 Get child's alt attribute and set caption
        var alt = event.target.getAttribute('alt');
        var src = event.target.getAttribute('src');

        figureImg.setAttribute('alt', alt);
        figureImg.setAttribute('src', src);
        figcaption.innerHTML = alt;

        figure.classList.toggle('show');
    });
});

overlay.addEventListener('click', function() {
    overlay.classList.remove('show');
    figure.classList.remove('show');
});

figure.addEventListener('click', function() {
    overlay.classList.remove('show');
    figure.classList.remove('show');
});

//2. Add overlay
//2.1 An image
//2.2 A caption
//3. When overlay is clicked
//3.1 Hide the overlay
