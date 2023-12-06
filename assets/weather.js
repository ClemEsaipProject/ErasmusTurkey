const apiKey = '38749ab830be5aac618b1f6d6b49ce2c';
const city = 'Gebze'; 

const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

// Make a GET request to the OpenWeatherMap API
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    // Handle the data from the API response
    console.log(data);

    // Extract relevant information (example: temperature)
    const temperature = data.main.temp;
    console.log(`Current temperature in ${city}: ${temperature}°C`);
    
      const weatherDescription = data.weather[0].description;

      // Display the information on the page
      const weatherInfo = document.getElementById('weather');
      weatherInfo.textContent = ` la temperature à ${city}: ${temperature}°C, ${weatherDescription}`;
      document.weatherInfo(weatherInfo);
    })
  
  .catch(error => {
    console.error('Fetch error:', error);
  });