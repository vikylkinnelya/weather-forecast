const API_key = '03d6788b090850555c7924df3b5462b4'

const getForecast = async (city_name) => {
    const API_base = `https://api.openweathermap.org/data/2.5/forecast?q=${city_name}&appid=${API_key}`
    const res = await fetch(`${API_base}`) //передаем адрес ресурса, кот хотим получить 
    if (!res.ok) {
        throw new Error(`Could not find forecast for ${city_name}` + `, reseived ${res.status}`)
    }
    const resp = await res.json()

    const cityName = document.querySelector('.city-name')
    cityName.innerHTML = ` at ${resp.city.name}&nbsp`

    return resp
}

export default getForecast