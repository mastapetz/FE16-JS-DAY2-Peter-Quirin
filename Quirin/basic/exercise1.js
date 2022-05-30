document.getElementById('submit').onclick = () => {
    let numChildren = document.getElementById('numChildren').value;
    let partnerName = document.getElementById('partnerName').value;
    let location = document.getElementById('location').value;
    let jobTitle = document.getElementById('jobTitle').value;

    crystalGazer(numChildren, partnerName, location, jobTitle);
}

function crystalGazer(numChildren, partnerName, location, jobTitle) {
    document.getElementById('output').innerHTML = `You will be a ${jobTitle} in ${location} and married to ${partnerName} with ${numChildren} children`;
}