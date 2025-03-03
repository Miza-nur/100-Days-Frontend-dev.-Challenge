const getWeather=()=>{
    const city=document.getElementById('cityName').value;
    const apikey='a49c71d1481e5cac637dee217388e860';
    const apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`

    fetch(apiUrl)
    .then(res=>res.json())
    .then(data =>{
        console.log(data)

        const description=data.weather[0].description;
        const temperature=data.main.temp;
        const humidity=data.main.humidity;
    
    
    })
} 