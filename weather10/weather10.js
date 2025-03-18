

const API_KEY = "6bfb9513087266868473f272a4c76a91";
// Your API key

let form= document.querySelector("form");
let search= document.querySelector("#search");
 let weather= document.querySelector("#weather");
 
form.addEventListener("submit",function(event){
   
    getWeather(search.value);
    event.preventDefault();

});

getWeather = async (city) =>{
    weather.innerHTML = `<h2> Loading... </h2>`;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

try{

 const response= await fetch(url);
 
 const data=   await response.json();
 
showWeather(data);

}

catch{

    weather.innerHTML=`<h2>Error: ${error.message}</h2>`;
}
}

showWeather =(data) =>{
console.log(data);

    if (data.cod === "404") {
        weather.innerHTML = `<h2>City Not Found</h2>`;
        return;
    }

    weather.innerHTML = `
        <div>
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Weather Icon">
        </div>
        <div>
            <h2>${data.main.temp} ℃</h2>
            <h4>${data.weather[0].main}</h4>
        </div>
    `;
}