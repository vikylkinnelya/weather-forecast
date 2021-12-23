const removeList = () => {
    const list = document.querySelector('.list-wrapper')
    list != null && list.parentNode.removeChild(list)
}

export default removeList