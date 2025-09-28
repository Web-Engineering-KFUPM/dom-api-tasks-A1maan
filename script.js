/*
=======================================
📘 JavaScript & Web APIs Lab
All tasks in one file (script.js)
=======================================
*/

/*  
=======================================
TODO1: Welcome Board
---------------------------------------
When the page loads, display a welcome message 
inside the <p> element with id="t1-msg".

✅ Task:
- Select the element with id "t1-msg".
- Change its text to "Hello, World!".

💡 Hint:
document.getElementById("t1-msg").innerHTML = "Hello, World!";
*/
 
document.addEventListener("DOMContentLoaded", function() {
    const p_tag = document.getElementById("t1-msg");
    p_tag.innerHTML = "Hello, World!";
});

/*  
=======================================
TODO2: Interaction Corner
---------------------------------------
There is a button with id="t2-btn".
When the button is clicked, change the text inside 
the <p> with id="t2-status" to:
    "You clicked the button!"

✅ Task:
- Get the button element.
- Add a click event listener.
- Inside the event, change the text of the status paragraph.

💡 Hint:
button.addEventListener("click", function () {
    // change text here
});
*/
 
const button = document.getElementById("t2-btn");
button.addEventListener("click", function() {
    const status = document.getElementById("t2-status");
    status.innerHTML = "Hi! My name is Almaan Khan.";
});

/*  
=======================================
TODO3: Inspiring Quote Board
---------------------------------------
Use the Quotable API to display a random quote.

🌍 API Link:
https://dummyjson.com/quotes/random

✅ Task:
- When the button with id="t3-loadQuote" is clicked:
    - Fetch a random quote from the API.
    - Display the quote text inside the <p> with id="t3-quote".
    - Display the author inside the <p> with id="t3-author".

💡 Hint:
The API returns JSON like:
{
  "content": "Do not watch the clock. Do what it does. Keep going.",
  "author": "Sam Levenson"
}

Use:
data.content   // the quote text
data.author    // the author
*/
 
const quoteButton = document.getElementById("t3-loadQuote");
quoteButton.addEventListener("click", async function() {
    try {
        const response = await fetch("https://dummyjson.com/quotes/random");
        const data = await response.json();
        const quote = document.getElementById("t3-quote");
        const author = document.getElementById("t3-author");
        quote.innerHTML = data.quote;
        author.innerHTML = data.author;
    } catch (error) {
        console.error('Error fetching quote:', error);
    }
});

/*  
=======================================
TODO4: Dammam Weather Now
---------------------------------------
Use the OpenWeatherMap API to display live weather data.

🌍 API Link:
https://api.openweathermap.org/data/2.5/weather?q=Dammam&appid=API_KEY=metric

⚠️ Replace YOUR_API_KEY with your actual API key from:
https://openweathermap.org/api

✅ Task:
- When the button with id="t4-loadWx" is clicked:
    - Fetch current weather data for Dammam.
    - Show temperature in the element with id="t4-temp".
    - Show humidity in the element with id="t4-hum".
    - Show wind speed in the element with id="t4-wind".

💡 Hint:
data.main.temp      → temperature (°C)
data.main.humidity  → humidity (%)
data.wind.speed     → wind speed (m/s)
*/

const base  = "https://api.openweathermap.org/data/2.5/weather";
const city  = "Dammam";
const units = "metric";
const key   = "eaeb7748b5d3aacb9571a967d2fb56d1";

// console.log("API KEY: ", key);

const url = `${base}?q=${encodeURIComponent(city)}&appid=${key}&units=${units}`;

const weatherButton = document.getElementById("t4-loadWx");
weatherButton.addEventListener("click", function() {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const temp = document.getElementById("t4-temp");
            const hum = document.getElementById("t4-hum");
            const wind = document.getElementById("t4-wind");
            temp.innerHTML = `Temperature: ${data.main.temp} °C`;
            hum.innerHTML = `Humidity: ${data.main.humidity} %`;
            wind.innerHTML = `Wind Speed: ${data.wind.speed} m/s`;
        })
        .catch(error => console.error('Error fetching weather data:', error));
});