const options = {
	method: 'GET',
	headers: {

		'X-RapidAPI-Key': '763c810bdfmshb9f4669b80c3925p18d818jsn3db5be365864',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather = (city) =>{

	cityName.innerHTML = city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city , options)
	.then(response => response.json())
	.then(response => {

		console.log(response)

		temp.innerHTML = response.temp
		feels_like.innerHTML = response.feels_like
		humidity.innerHTML = response.humidity
		max_temp.innerHTML = response.max_temp
		min_temp.innerHTML = response.min_temp
		sunrise.innerHTML = response.sunrise
		sunset.innerHTML = response.sunset
		temp.innerHTML = response.temp
		wind_degrees.innerHTML = response.wind_degrees
		wind_speed.innerHTML = response.wind_speed


	})
	.catch(err => console.error(err));
}
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi' , options)
	.then(response => response.json())
	.then(response => {

		console.log(response)

		temp2.innerHTML = response.temp
		feels_like2.innerHTML = response.feels_like
		humidity2.innerHTML = response.humidity
		max_temp2.innerHTML = response.max_temp
		min_temp2.innerHTML = response.min_temp
		wind_degrees2.innerHTML = response.wind_degrees
		wind_speed2.innerHTML = response.wind_speed


	})
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Lucknow' , options)
	.then(response => response.json())
	.then(response => {

		console.log(response)

		temp3.innerHTML = response.temp
		feels_like3.innerHTML = response.feels_like
		humidity3.innerHTML = response.humidity
		max_temp3.innerHTML = response.max_temp
		min_temp3.innerHTML = response.min_temp
		wind_degrees3.innerHTML = response.wind_degrees
		wind_speed3.innerHTML = response.wind_speed


	})
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Chennai' , options)
	.then(response => response.json())
	.then(response => {

		console.log(response)

		temp4.innerHTML = response.temp
		feels_like4.innerHTML = response.feels_like
		humidity4.innerHTML = response.humidity
		max_temp4.innerHTML = response.max_temp
		min_temp4.innerHTML = response.min_temp
		wind_degrees4.innerHTML = response.wind_degrees
		wind_speed4.innerHTML = response.wind_speed


	})
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Srinagar' , options)
	.then(response => response.json())
	.then(response => {

		console.log(response)

		temp5.innerHTML = response.temp
		feels_like5.innerHTML = response.feels_like
		humidity5.innerHTML = response.humidity
		max_temp5.innerHTML = response.max_temp
		min_temp5.innerHTML = response.min_temp
		wind_degrees5.innerHTML = response.wind_degrees
		wind_speed5.innerHTML = response.wind_speed


	})
submit.addEventListener("click",(e) => {
	e.preventDefault()
	getWeather(city.value)
} )

getWeather("Varanasi")