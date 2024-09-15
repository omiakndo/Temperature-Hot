// console.log('hi')

const API_KEY = '46ad7457603b9b0104e633e78cd60e16'

const loadtemp = async (city)=>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const res = await fetch(url)
    const data = await res.json()
    displaytemp(data)
}

const displaytemp = data =>{
    const temp = document.getElementById('temp');
    temp.innerText = data.main.temp
    document.getElementById('city-name').innerText=data.name
    document.getElementById('cloud').innerText = data.weather[0].main;
    console.log(data)
}

document.getElementById('search-btn').addEventListener('click', function(){
    const searchInput = document.getElementById('search-input');
    const city = searchInput.value
  
        loadtemp(city)
    
  
    
})



loadtemp('dhaka')