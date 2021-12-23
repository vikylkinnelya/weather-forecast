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

export default setForecastDay