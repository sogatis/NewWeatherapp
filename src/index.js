let apiKey="c9626ae5cb2588cbaae80c763135f4c7";
let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}&units=metric`;

axios.get(apiKey).then(displayTemperature);