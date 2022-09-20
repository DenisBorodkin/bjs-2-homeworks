//Задание  №1

function parseCount(number) {
	if (isNaN(Number.parseInt(number))) {
		throw new Error('Невалидное значение')
	}
	return +number;
}

function validateCount(number) {
	try {
		return parseCount(number);
	} catch (error) {
		return error;
	}
}

//Задание  №2

class Triangle {
	constructor(a, b, c) {
		this.a = a;
		this.b = b;
		this.c = c;
		if ((a + b) < c || (a + c) < b || (b + c) < a) {
			throw new Error("Треугольник с такими сторонами не существует");
		}
	}
	getPerimeter() {
		return (this.a + this.b + this.c);
	}
	getArea() {
		const p = this.getPerimeter() / 2 //Вычисление полупериметра
		const s = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3);
		return +s;
	}
}
function getTriangle(a, b, c) {
	try {
		return new Triangle(a, b, c);
	} catch (e) {
		return {
			getPerimeter() {
				return "Ошибка! Треугольник не существует";
			},
			getArea() {
				return "Ошибка! Треугольник не существует";
			}
		}
	}
}






