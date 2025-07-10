const timeElement = document.querySelector('#time');

setInterval(() => {
    let currentTime = new Date()
    let hours = currentTime.getHours()
    let minutes = currentTime.getMinutes()
    let seconds = currentTime.getSeconds()
    let ampm = hours >= 12 ? 'PM' : 'AM'
    hours = hours < 10 ? '0' + hours : hours
    minutes = minutes < 10 ? '0' + minutes : minutes
    seconds = seconds < 10 ? '0' + seconds : seconds
    timeElement.textContent = `${hours}:${minutes}:${seconds} ${ampm}`
}, 1000)