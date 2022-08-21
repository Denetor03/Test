const apiKey = "97430b983c734d0514c220ae2e152e99";
let weather = {
    apiKey: "97430b983c734d0514c220ae2e152e99",
    fetchWeather: function (city) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}&units=metric`)
            .then(response => response.json())
            .then(( data ) => this.displayWeather(data));
    },
    displayWeather: function (data) {
        try{
        const {temp} = data.main;
        console.log(temp);
        console.log(data);
        const {description} = data.weather[0];
        document.getElementById("temperatur").innerHTML =
        '<div style="text-align: left; width: 40%; margin: 0%;">Temp: <br>description: </div><div style="text-align: right; width: 40%; margin: 0%;">' + temp + ' C° <br>' + description + '</div>';
        var oImg = document.createElement("img");
        var icon = data.weather[0].icon;
        console.log(icon);
        document.getElementById("weatherIcon").src='http://openweathermap.org/img/wn/'+icon+'@2x.png'
        } catch(error) {
            console.log(error);
            document.getElementById("temperatur").innerHTML = "City not found";
        }
    }

};
const button = document.getElementById("wButton");
button.addEventListener("click", () => {

    weather.fetchWeather(document.getElementById("wInput").value)

 });


var input = document.getElementById("wInput");

input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("wButton").click();
  }
});


