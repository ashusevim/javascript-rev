const numbers = [1, 2, 3, 4, 5];
// const filterOperaton = numbers.filter((num) => num % 2 == 0);
// console.log(filterOperaton)

// const mapOperation = numbers.map(num => num*2)
// console.log(mapOperation)

const reduceOperation = numbers.reduce((accumulator, currentValue) => {
	return accumulator + currentValue;
}, 0) // 0 is a starting value
console.log(reduceOperation)
