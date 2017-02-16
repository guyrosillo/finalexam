var context = document.querySelector('canvas').getContext('2d');
var selectedColor = $('.selected').css('background-color');

function chooseColor(event) {
    //Remove white ring from other colors
    $(event.target).siblings().removeClass('selected');
    //Make selected color have the white ring
    $(event.target).addClass('selected');
    //Set selected color to current color
    selectedColor = $(event.target).css('background-color');
}

//When clicking on a color
$('.controls li').click(chooseColor);

//When "New Color" button is pressed
$('#revealColorSelect').click(function() {
    //hide/unhide the color select div
    $('#colorSelect').toggle();
});

function changeColor() {
    var color = 'rgb(' + $('#red').val() + ', ' + $('#green').val() + ', ' + $('#blue').val() + ')';
    $('#newColor').css('background-color', color);
}

//When color sliders changes
$('input').on('input', function() {
    //update the new color box
    changeColor();
});

//When "Add Color" button is pressed
$('#addNewColor').click(function() {
    var newColor = $('<li></li>').css('background-color', $('#newColor').css('background-color'));
    //append the new color to the controls ul
    $('.controls ul').append(newColor);
    // set click listener for the new color
    newColor.click(chooseColor);
});

//on mouse events on the canvas
  //draw lines
var lastMouseEvent;
var isMouseDown = false;

$('canvas').mousedown(function(event) {
    lastMouseEvent = event;
    isMouseDown = true;
});

$('canvas').mousemove(function(currentMouseEvent) {
    if(isMouseDown === true) {
        context.beginPath();
        context.moveTo(lastMouseEvent.offsetX, lastMouseEvent.offsetY);
        context.lineTo(currentMouseEvent.offsetX, currentMouseEvent.offsetY);
        context.strokeStyle = selectedColor;
        context.lineWidth = $('#thickness').val();
        context.stroke();
        console.log(lastMouseEvent.offsetX, currentMouseEvent.offsetX);
        lastMouseEvent = currentMouseEvent;
    }
});

$('canvas').mouseup(function() {
    isMouseDown = false;
});
