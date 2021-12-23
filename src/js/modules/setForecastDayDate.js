const setForecastDayDate = (dt, dayNum) => {
    const forecastDay = document.querySelector(`.forecast-${dayNum}`)

    const date = new Date(dt * 1000)
    const dY = date.getFullYear()
    const dM = date.getMonth() + 1
    const dD = date.getDate()
    const fullDate = [dD, dM, dY].join('.')

    const forecasDayDate = document.createElement('div')
    forecasDayDate.classList.add(`forecast-day-date-${dayNum}`, 'forecast-day-date')
    forecasDayDate.innerHTML = `<h3>${fullDate}</h3>`

    document.querySelector(`.forecast-day-date-${dayNum}`) || forecastDay.appendChild(forecasDayDate)
}

export default setForecastDayDate