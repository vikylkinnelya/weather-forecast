'use strict';
import getCities from './services/getCities'
import getForecast from './services/getForecast';
import createList from './modules/createList';
import removeList from './modules/removeList';
import setTempByHours from './modules/setTempByHours';


window.addEventListener('DOMContentLoaded', () => {

    const form = document.getElementById('form')
    const input = document.getElementById('city-input')

    form.addEventListener('change', e => {
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

window.onload = getCities()