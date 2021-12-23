import setForecastDayDate from './setForecastDayDate'
import setMinMaxTemp from './setMinMaxTemp'
import setForecastDay from './setForecastDay'

const setTempByHours = (el) => {

    const { dt, main } = el

    let dayNum = setForecastDay(dt)

    let h = new Date(dt * 1000).getHours()
    h < 10 ? h = '0' + h : h

    const hoursTempInfo = document.createElement('div')
    const dayTime = document.createElement('div')
    const timeTemp = document.createElement('div')

    const temp = Math.floor(main['temp'] - 273, 15)

    setForecastDayDate(dt, dayNum)
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

export default setTempByHours