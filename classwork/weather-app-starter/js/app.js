var id = '033e634bbf41bdc9a0735d00d62399ee';
var city = $('#city');
var weather = $('#weather');
var icon = $('#icon');
var temp = $('#temp');
var humidity = $('#humidity');
var pressure = $('#pressure');
var form = $('#form');
var changeTemp = $('#changeTemp');

getData();

form.submit(function(event) {
    event.preventDefault();
    getData();
});

changeTemp.click(function() {
    if(changeTemp.html() === 'F') {
        changeTemp.html('C');
        temp.html( ftoc(temp.html()) );
    }
    else {
        changeTemp.html('F');
        temp.html( ctof(temp.html()) );
    }
});

function getData() {
    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?zip=' + $('#zip').val() + ',us&appid=' + id,
        success: function(data) {
            console.log(data);
            city.html(data.name + ", " + data.sys.country);
            weather.html(data.weather[0].description);
            icon.attr('src', setIcon(data.weather[0].id));
            temp.html(ktof(data.main.temp));
            changeTemp.html('F');
            humidity.html(data.main.humidity + ' %');
            pressure.html(data.main.pressure);
        }
    });
}

function ktof(kelvin) {
    return Math.round((kelvin - 273) * (9/5) + 32);
}

function ftoc(fahr) {
    return Math.round( (fahr - 32) * (5/9) );
}

function ctof(cel) {
    console.log(cel);
    return Math.round( (cel * (9/5)) + 32 );
}

function setIcon(id) {
    if(id < 300) {
        return './img/thunderstorm.png';
    }
    if(id < 600) {
        return './img/rain.png';
    }
    if(id < 700) {
        return './img/snow.png';
    }
    if(id === 800) {
        return './img/sun.png';
    }
    if(id === 801) {
        return './img/partly-cloudy.png';
    }
    if(id < 900) {
        return './img/cloudy.png';
    }
}
