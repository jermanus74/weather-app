
'use strict';

const apiKey = 'd22bc8f49087b7637159dc32db395732';
const searchField = document.querySelector('input.text');
const searchBtn = document.querySelector('button.icon');
const resultContainer = document.querySelector('.result-container');

async function checkWeather(city) {
  try {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error('Failed to fetch weather data');
    }

    const data = await response.json();
    console.log(data);

    const cityElement = document.querySelector('.place');
    cityElement.innerHTML = data.name;
    
    const tempElement = document.querySelector('.temp');
    tempElement.innerHTML = data.main.temp + ' °C';

    const humidityElement = document.querySelector('.humidity');
    humidityElement.innerHTML = data.main.humidity + '%';

    const windElement = document.querySelector('.wind');
    windElement.innerHTML = data.wind.speed + ' km/h';

    // resultContainer.style.display = 'block';
  } catch (error) {
    console.error('Error occurred while fetching weather data:', error);
  }
}

searchBtn.addEventListener('click', () => {
  const city = searchField.value;
  checkWeather(city);
});

