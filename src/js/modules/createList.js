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

export default createList