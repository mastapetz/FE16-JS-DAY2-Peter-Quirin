document.getElementById('submit').onclick = () => {
    let date = new Date();
    let birthYear = document.getElementById('birthYear').value;
    let currentYear = date.getFullYear();
    document.getElementById('output').innerHTML = ageCalculator(birthYear, currentYear);
}

function ageCalculator(birthYear, currentYear) {
    return `You are either ${currentYear-birthYear} or ${currentYear-birthYear-1}`;
}