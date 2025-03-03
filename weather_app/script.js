const getWeather=()=>{
    const city=document.getElementById('cityName').value;
    const apikey='a49c71d1481e5cac637dee217388e860';
    const apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`

    fetch(apiUrl)
    .then(res=>res.json())
    .then(data =>{
        
        const weatherInfo=document.getElementById('weatherInfo');

        const description=data.weather[0].description;
        const temperature=data.main.temp;
        const humidity=data.main.humidity;
        const wind=data.wind.speed;

        weatherInfo.innerHTML=`
        <p>Description : ${description}</p>
        <p>Temperature : ${temperature} &#x2103</p>
        
        <p>Humidity : ${humidity} &#x0025</p>
        <p>wind Speed : ${wind} m/s</p>
        `

    
    
    })
} 