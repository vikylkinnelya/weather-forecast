'use strict';

const API_key = '03d6788b090850555c7924df3b5462b4'

const getForecast = async (city_name) => {
    const API_base = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_key}`
    const res = await fetch(`${API_base}`) //передаем адрес ресурса, кот хотим получить 
    if (!res.ok) {
        throw new Error(`Could not find forecast for ${city_name}` + `, reseived ${res.status}`)
    }
    return await res.json()
}

window.addEventListener('DOMContentLoaded', () => {

    const form = document.getElementById('form')
    const input = document.getElementById('city-input')

    form.addEventListener('change', e => {
        e.preventDefault();
        const inputVal = input.value;
        console.log(inputVal, 'change')
    })

    form.addEventListener("submit", e => {
        e.preventDefault();
        const inputVal = input.value;

        getForecast(inputVal)
            .then(res => console.log(res))
            .catch(err => console.log(err))

        console.log(inputVal)
    });


})