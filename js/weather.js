const apiKey = "97430b983c734d0514c220ae2e152e99";
let weather = {
    apiKey: "97430b983c734d0514c220ae2e152e99",
    fetchWeather: function (city) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}&units=metric`)
            .then(response => response.json())
            .then(( data ) => this.displayWeather(data));
    },
    displayWeather: function (data) {
        const {temp} = data.main;
        console.log(temp);
        const {description} = data.weather[0];
        document.getElementById("temperatur").innerHTML =
        "Temp: " + temp + "°" + "<br>" + 
        "description: " + description;
    }
};
const button = document.getElementById("wButton");
button.addEventListener("click", () => {
weather.fetchWeather(document.getElementById("wInput").value)
});


