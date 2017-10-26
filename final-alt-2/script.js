// no API key required for this API
const API_URL = 'https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?'

const quoteText = document.querySelector('.quote-text');
const quoteAuthor = document.querySelector('.quote-author');


function getQuote() {
    $.ajax({
        url: API_URL,
        dataType: 'json'
    })
    .done(function (response) {
        console.log(response)
        quoteText.textContent = response.quoteText;
        quoteAuthor.textContent = response.quoteAuthor;
        
    
    })
}

getQuote();

const button = document.querySelector('#button').addEventListener('click', function(){
    console.log(getQuote())
})
