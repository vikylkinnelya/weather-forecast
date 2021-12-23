import createMinMax from "./createMinMax"

const setMinMaxTemp = (temp, dayNum) => {

    const forecastDay = document.querySelector(`.forecast-${dayNum}`)
    const minMaxWrapper = document.createElement('div')
    minMaxWrapper.classList.add(`min-max-wrapper-${dayNum}`, 'min-max-wrapper')
    document.querySelector(`.min-max-wrapper-${dayNum}`) || forecastDay.appendChild(minMaxWrapper)

    const min = document.querySelector(`.min-temp-${dayNum}`) || createMinMax('min', dayNum)
    const max = document.querySelector(`.max-temp-${dayNum}`) || createMinMax('max', dayNum)

    min.innerText = Math.min(min.innerText, temp)
    max.innerText = Math.max(max.innerText, temp)
}

export default setMinMaxTemp