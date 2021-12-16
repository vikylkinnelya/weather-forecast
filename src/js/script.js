'use strict';

const API_key = '03d6788b090850555c7924df3b5462b4'

const getForecast = async (city_name) => {
    const API_base = `https://api.openweathermap.org/data/2.5/forecast?q=${city_name}&appid=${API_key}&cnt=40`
    const res = await fetch(`${API_base}`) //передаем адрес ресурса, кот хотим получить 
    if (!res.ok) {
        throw new Error(`Could not find forecast for ${city_name}` + `, reseived ${res.status}`)
    }
    const resp = await res.json()

    const cityName = document.querySelector('.city-name')
    cityName.innerHTML = `at ${resp.city.name}`
    console.log(resp)

    return resp
}

const createDay = (el) => {

    const { dt_txt, main, weather } = el

    const forecastList = document.querySelector('.forecast-list')

    const forecastDay = document.createElement('div')
    forecastDay.classList.add('forecast-day');
    forecastList.appendChild(forecastDay)

    const dayDate = document.createElement('div')
    dayDate.classList.add('day-date')
    dayDate.innerText = dt_txt
    forecastDay.appendChild(dayDate)

}

window.addEventListener('DOMContentLoaded', () => {

    const form = document.getElementById('form')
    const input = document.getElementById('city-input')
    let forecastData = {}

    form.addEventListener('change', e => {
        e.preventDefault();
        const inputVal = input.value;
        console.log(inputVal, 'change')
    })

    form.addEventListener("submit", e => {
        e.preventDefault();
        const inputCity = input.value;

        getForecast(inputCity)
            .then(res => res.list.forEach((el, idx) => createDay(el)))
            .catch(err => console.log(err))
    });


})