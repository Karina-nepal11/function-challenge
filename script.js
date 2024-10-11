// Challenge 1: getCelsius function
const getCelsius = (F) => (F - 32) * 5 / 9;

console.log(`The temperature is ${getCelsius(32)} \xB0C`);
// Output: The temperature is 0 °C

// Challenge 2: minMax function
const minMax = (arr) => {
    return {
        min: Math.min(...arr),
        max: Math.max(...arr)
    };
};

console.log(minMax([1, 2, 3, 4, 5]));
// Output: { min: 1, max: 5 }

// Challenge 3: IIFE for rectangle area
(function(length, width) {
    const area = length * width;
    console.log(`The area of a rectangle with a length of ${length} and a width of ${width} is ${area}.`);
})(10, 5);
// Output: The area of a rectangle with a length of 10 and a width of 5 is 50.