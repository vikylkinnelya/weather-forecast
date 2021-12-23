const getCities = () => {
    fetch('cities.json', {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
        .then(response => response.json())
        .then(jsonResponse => {
            const datalist = document.querySelector('#data-list-cities')
            jsonResponse.forEach(el => {
                const option = document.createElement('option')
                option.value = el.name
                datalist.appendChild(option)
            })
        })
}

export default getCities