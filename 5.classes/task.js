
//Задание 1

class PrintEditionItem {
	constructor(name,
		releaseDate,
		pagesCount, state = 100, type = null
	) {
		this.name = name;   //Название
		this.releaseDate = releaseDate;   //Дата выпуска
		this.pagesCount = pagesCount;   //Количество страниц
		this.state = state;   //Состояние
		this.type = type;   //Тип
	}
	fix() {
		return this.state = this.state * 1.5;;
	}




	set state(number) {
		if (number <= 0) {
			this._state = 0;
		} else if (number >= 100) {
			this._state = 100;
		} else {
			this._state = number;
		}
	}
	get state() {
		return this._state;
	}

}

class Magazine extends PrintEditionItem {
	constructor(name,
		releaseDate,
		pagesCount,
		state = 100,
		type = 'magazine') {
		super(name, releaseDate, pagesCount, state, type);

	}
}

class Book extends PrintEditionItem {
	constructor(author, name,
		releaseDate,
		pagesCount,
		state = 100,
		type = 'book') {
		super(name, releaseDate, pagesCount, state, type);
		this.author = author;
	}
}

class NovelBook extends Book {
	constructor(author, name,
		releaseDate,
		pagesCount,
		state = 100,
		type = 'novel') {
		super(author, name, releaseDate, pagesCount, state, type);

	}


}

class FantasticBook extends Book {
	constructor(author, name,
		releaseDate,
		pagesCount,
		state = 100,
		type = 'fantastic') {
		super(author, name, releaseDate, pagesCount, state, type);


	}
}

class DetectiveBook extends Book {
	constructor(author, name,
		releaseDate,
		pagesCount,
		state = 100,
		type = 'detective') {
		super(author, name, releaseDate, pagesCount, state, type);


	}
}

//Задание 2

class Library {
	constructor(name) {
		this.name = name;
		this.books = [];
	}
	addBook(PrintEditionItem) {
		if (PrintEditionItem.state > 30) {
			this.books.push(PrintEditionItem);
		}
	}

	findBookBy = (type, value) => this.books.find((book) => book[type] === value) || null;

	giveBookByName(bookName) {

		for (let i = 0; i < this.books.length; i++) {
			if (this.books[i].name === bookName) {
				let a = this.books[i];
				this.books.splice(i, 1);
				return a;
			}


		}
		return null;
	}
}

//Задание 3


class Student {
	constructor(name) {
		this.name = name;
		this.marks = {};
	}

	addMark(mark, subject) {
		if (mark > 5 || mark < 2) {
			return;
		}

		if (!this.marks[subject]) {
			this.marks[subject] = [];
		}

		this.marks[subject].push(mark);
	}

	getAverageBySubject(subject) {
		if (!this.marks[subject]) {
			return 0;
		}
		return this.marks[subject].reduce((acc, mark) => acc + mark, 0) / this.marks[subject].length;
	}

	getAverage() {
		/*return Object.keys(this.marks).reduce(
		  (acc, subject) => acc + this.getAverageBySubject(subject), 0
		) / Object.keys(this.marks).length; */

		const subjects = Object.keys(this.marks);
		let sum = 0;
		for (let i = 0; i < subjects.length; i++) {
			sum += this.getAverageBySubject(subjects[i]);
		}

		return sum / subjects.length;
	}
}

const student = new Student("Олег Никифоров");
student.addMark(5, "algebra");
student.addMark(5, "algebra");
student.addMark(5, "geometry");
student.addMark(4, "geometry");
student.addMark(6, "geometry"); // "Ошибка, оценка должна быть числом от 1 до 5"
student.getAverageBySubject("geometry"); // Средний балл по предмету geometry 4.5
student.getAverageBySubject("biology"); // Несуществующий предмет
student.getAverage(); // Средний балл по всем предметам 4.75
student.exclude("Исключен за попытку подделать оценки");























