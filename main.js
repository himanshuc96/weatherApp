// Get the search button and input elements
const searchButton = document.getElementById("search-button");
const searchInput = document.getElementById("search-input");
window.onload = function () {
  searchButton.addEventListener("click", () => {
    // Get the value of the search input
    const query = searchInput.value;

    // Send a request to the API with the query and API key
    fetch(
      `https://api.weatherapi.com/v1/current.json?key=9772a9cd390a463391a151137232404&q=${query}`
    )
      .then((response) => response.json())
      .then((data) => {
        // Extract the necessary information from the JSON data
        const city = data.location.name;
        const country = data.location.country;
        const temperature = data.current.temp_c;
        const condition = data.current.condition.text;
        const date = data.location.localtime;
        const icon = data.current.condition.icon;
        const feelslike = data.current.feelslike_c;
        // Create a string with the weather data

        const weatherData = `
              <h2>${city}, ${country}</h2>
              <p>Temperature: ${temperature}°C</p>
              <p>Condition: ${condition}</p>
              <img src="${icon}" alt="${condition}">
              <p>Date: ${date}</p>
                <p>Feels like: ${feelslike}°C</p>
            
            `;

        // Set the weather data in the weather data element
        document.getElementById("weather-data").innerHTML = weatherData;
      })
      .catch((error) => {
        // Display an error message if there was an error fetching the data
        
         const errorMessage = `
         <h2 id = "error">Enter a valid City or Country</h2>
             `;

        // Set the error message in the weather data element
        document.getElementById("weather-data").innerHTML = errorMessage;
      });
  });
};
// Add an event listener to the search button
