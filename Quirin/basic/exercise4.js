document.getElementById('submit').onclick = () => {
    let deg = document.getElementById('deg').value;
    document.getElementById('output').innerHTML = 'Radians: ' + convertDegRad(deg);
}

function convertDegRad(deg) {
    return deg * (Math.PI / 180);
}