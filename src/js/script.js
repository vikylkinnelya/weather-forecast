'use strict';

const API_key = '03d6788b090850555c7924df3b5462b4'

const list = []

const getForecast = async (city_name) => {
    const API_base = `https://api.openweathermap.org/data/2.5/forecast?q=${city_name}&appid=${API_key}`
    const res = await fetch(`${API_base}`) //передаем адрес ресурса, кот хотим получить 
    if (!res.ok) {
        throw new Error(`Could not find forecast for ${city_name}` + `, reseived ${res.status}`)
    }
    const resp = await res.json()

    const cityName = document.querySelector('.city-name')
    cityName.innerHTML = ` at ${resp.city.name}&nbsp`
    console.log(resp)

    return resp
}

const setForecastDay = (dt) => {

    const day = new Date(dt * 1000).getDate()
    const today = new Date().getDate()

    if (day == today) {
        return 1
    }
    else if (day == today + 1) {
        return 2
    }
    else if (day == today + 2) {
        return 3
    }
    else if (day == today + 3) {
        return 4
    }
    else if (day == today + 4) {
        return 5
    }
    else {
        return 6
    }
}

const createList = () => {
    const forecastList = document.querySelector('.forecast-list')

    const list = document.createElement('div')

    list.classList.add('list-wrapper')
    forecastList.appendChild(list)

    for (let i = 1; i <= 6; i++) {
        let day = document.createElement('div')
        day.classList.add(`forecast-${i}`, 'forecast-day')
        list.appendChild(day)
    }
}

const removeList = () => {
    const list = document.querySelector('.list-wrapper')
    list != null && list.parentNode.removeChild(list)
}

const createMinMax = (type, dayNum) => {

    const el = document.createElement('div')
    const c = document.createElement('span')
    el.classList.add(`${type}-temp-${dayNum}`)

    const minMaxWrapper = document.querySelector(`.min-max-wrapper-${dayNum}`)
    c.innerText = '°C'
    const space = document.createElement('span')
    space.innerText = ('...')
    minMaxWrapper.appendChild(el)
    minMaxWrapper.appendChild(c)
    type === 'min' && minMaxWrapper.appendChild(space)

    return document.querySelector(`.${type}-temp-${dayNum}`)
}

const setMinMaxTemp = (temp, dayNum) => {

    const forecastDay = document.querySelector(`.forecast-${dayNum}`)
    const minMaxWrapper = document.createElement('div')
    minMaxWrapper.classList.add(`min-max-wrapper-${dayNum}`, 'min-max-wrapper')
    forecastDay.appendChild(minMaxWrapper)

    const min = document.querySelector(`.min-temp-${dayNum}`) || createMinMax('min', dayNum)
    const max = document.querySelector(`.max-temp-${dayNum}`) || createMinMax('max', dayNum)

    min.innerText = Math.min(min.innerText, temp)
    max.innerText = Math.max(max.innerText, temp)
}

const setTempByHours = (el, idx) => {

    const { dt_txt, dt, weather, main } = el
    let dayNum = setForecastDay(dt)

    let h = new Date(dt * 1000).getHours()
    h < 10 ? h = '0' + h : h

    const hoursTempInfo = document.createElement('div')
    const dayTime = document.createElement('div')
    const timeTemp = document.createElement('div')

    const temp = Math.floor(main['temp'] - 273, 15)
    setMinMaxTemp(temp, dayNum)

    const forecastDay = document.querySelector(`.forecast-${dayNum}`)
    hoursTempInfo.classList.add('hours-temp-info', `hti-d${dayNum}-h${h}`)
    forecastDay.appendChild(hoursTempInfo)

    dayTime.classList.add('day-time')
    dayTime.innerText = h + ":00"
    hoursTempInfo.appendChild(dayTime)

    timeTemp.classList.add('time-temp')
    timeTemp.innerText = temp + "°C"
    hoursTempInfo.appendChild(timeTemp)


}

window.addEventListener('DOMContentLoaded', () => {

    const form = document.getElementById('form')
    const input = document.getElementById('city-input')

    form.addEventListener('change', e => {
        e.preventDefault();
        const inputVal = input.value;
    })

    form.addEventListener("submit", e => {
        e.preventDefault();
        removeList()
        createList()

        const inputCity = input.value;

        getForecast(inputCity)
            .then(res => res.list.forEach((el, idx) =>
                setTempByHours(el, idx)
            )
            )
            .catch(err => console.log(err))
    });



})