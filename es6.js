
const r = 100;
const g = 40;
const b = 255;

const message = `The color is (${r}, ${g}, ${b})`;
console.log(message);

function getColor() {
    return `(${r}, ${g}, ${b})`;
}
const multiply = (a, b) => {
    return a * b;
}
const add = (a, b) => a + b;

const result = mult(20, 3);
console.log(result);

const divide = (den, num) => {
    if (den === 0) {

        return undefined;
    }
    return num / den;
}