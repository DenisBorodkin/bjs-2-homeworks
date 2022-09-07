
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























