// Задание 1
function getArrayParams(arr) {
	let min, max, sum, avg;
	min = arr[0];
	max = arr[0];
	sum = 0;


	for (let i = 0; i < arr.length; i++) {

		if (arr[i] > max) {
			max = arr[i];
		} else if (arr[i] < min) {
			min = arr[i];

		}
		sum += arr[i];

	}
	avg = sum / arr.length;

	avg = +avg.toFixed(2);



	return { min: min, max: max, avg: avg };


}
getArrayParams();

// Задание 2
function worker(arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}

	return sum;
}
worker(arrOfArr);

function makeWork(arrOfArr, func) {
	let max = 0;
	for (let i = 0; i < arrOfArr.length; i++) {

		let result = func(arrOfArr[i]);
		if (result > max) {
			max = result;
		}

	}
	return max;
}
makeWork(arrOfArr, worker);

// Задание 3
function worker2(arr) {
	let min, max, difference;
	min = arr[0];
	max = arr[0];
	difference = 0;


	for (let i = 0; i < arr.length; i++) {

		if (arr[i] > max) {
			max = arr[i];
		} else if (arr[i] < min) {
			min = arr[i];

		}

	}
	difference = max - min;

	return difference;
}
worker2(arrOfArr);

makeWork(arrOfArr, worker2);




