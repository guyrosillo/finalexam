const API_KEY = '033e634bbf41bdc9a0735d00d62399ee'
const api_root_url = 'http://api.openweathermap.org/data/2.5/weather?zip='

const body = document.querySelector('body')
const city = document.querySelector('.city')
const zip = document.querySelector('.zip')
const weather = document.querySelector('.weather')
const temp = document.querySelector('.temp')
const humidity = document.querySelector('.humidity')
const tempUnit = document.querySelector('.temp-unit')
const icon = document.querySelector('.icon')

function KtoF(Kelvin) {
    return Math.round(Kelvin * 9/5 - 459.67)
}

function CtoF(Celcius) {
    return Math.round(Celcius * 9/5 + 32)
}

function FtoC(Fahrenheit) {
    return Math.round( (Fahrenheit - 32) * 5/9 )
}

const groups = {
    'Thunderstorm': {
        icon: 'img/thunderstorm.png',
        bg: 'url(img/thunderstorm-bg.jpg)'
    },
    'Drizzle': {
        icon: 'img/rain.png',
        bg: 'url(img/rain-bg.jpg)'
    },
    'Rain': {
        icon: 'img/rain.png',
        bg: 'url(img/rain-bg.jpg)'
    },
    'Snow': {
        icon: 'img/snow.png',
        bg: 'url(img/snow-bg.jpg)'
    },
    'Clear': {
        icon: 'img/sun.png',
        bg: 'url(img/sun-bg.jpg)'
    },
    'Clouds': {
        icon: 'img/cloudy.png',
        bg: 'url(img/cloudy-bg.jpg)'
    }
}

function getWeather(zipCode) {
    $.ajax({
        url: `${api_root_url}${zipCode},us&appid=${API_KEY}`,
        success: function(response) {
            console.log(response)
            city.textContent = response.name
            weather.textContent = response.weather[0].description
            temp.textContent = KtoF(response.main.temp)
            tempUnit.textContent = 'F'
            humidity.textContent = response.main.humidity
            icon.setAttribute('src', groups[ response.weather[0].main ].icon)
            body.style.backgroundImage = groups[ response.weather[0].main ].bg
            zip.select()
        }
    })
}

getWeather('33166')

zip.addEventListener('keypress', function(event) {
    if(event.keyCode === 13) {
        getWeather(event.target.value)
    }
})

tempUnit.addEventListener('click', function() {
    if(tempUnit.textContent === 'C') {
        temp.textContent = CtoF(temp.textContent)
        tempUnit.textContent = 'F'
    } else {
        temp.textContent = FtoC(temp.textContent)
        tempUnit.textContent = 'C'
    }
})
