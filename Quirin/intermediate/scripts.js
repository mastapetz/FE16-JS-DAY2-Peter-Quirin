var capitalize = (function() {
    return capitalizeFirstLetter('booboo');
}());

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

console.log(capitalize);


function averageGrade(math, physics, english) {
    if (!Number.isInteger(math) || !Number.isInteger(physics) || !Number.isInteger(english)) {
        document.write('Not a number something');
        return;
    }
    math = Number(math);
    physics = Number(physics);
    english = Number(english);

    let sum = math + physics + english;
    let avg = sum / 3;
    document.write(
        `Sum: ${sum}, Average: ${avg}`
    );
}

averageGrade(3, 4, 5);