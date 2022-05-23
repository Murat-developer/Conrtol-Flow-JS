// Falsy Values

// undefined
// null
// 0
// false
// ''
// NaN

// Anything that is not Falsy -> Truthy

// Short - circuting

const userColor = undefined;
const defaultColor = 'yellow';
const currentColor = userColor || defaultColor;
console.log(currentColor);
