document.getElementById('submit').onclick = () => {
    let width = document.getElementById('width').value;
    let height = document.getElementById('height').value;
    let depth = document.getElementById('depth').value;
    let result = areaVolume(width, height, depth);
    document.getElementById('output').innerHTML = 'The area of the box is: ' + result[0] + '<br>The volume of the box is: ' + result[1];
}

function areaVolume(width, height, depth) {
    return [width * height, width * height * depth];
}