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

export default createMinMax