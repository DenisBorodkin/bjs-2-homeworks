function Student(name, gender, age) {
	// Ваш код
	this.name = name;
	this.gender = gender;
	this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
	//ваш код
	this.subject = subjectName;
}
Student.prototype.addMark = function (mark) {
	if (this.marks === undefined) {
		this.marks = [mark]; // Первая оценка добавляется в массив
	} else {
		this.marks.push(mark); // Все остальные оценки пушатся
	}
}
Student.prototype.addMarks = function (...mark) {
	if (this.marks === undefined) {
		this.marks = mark;

	} else {
		this.marks.push(...marks);
	}


}
Student.prototype.getAverage = function () {
	let sum = 0;

	for (let i = 0; i < this.marks.length; i++) {
		sum += this.marks[i];
	}
	return sum / this.marks.length;
}
Student.prototype.exclude = function (reason) {
	this.excluded = reason;
	delete marks;
	delete subject;
}


// ваш код для остальных методов
let student1 = new Student("Tony", "male", 37);
student1.addMarks(3, 3, 3);
student1.addMarks(4, 4, 4);
console.log(student1.marks);