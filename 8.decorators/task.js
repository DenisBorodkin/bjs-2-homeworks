//Задание 1

function cachingDecoratorNew(func) {
	debugger;
	let cache = [];
	function wrapper(...args) {
		const hash = args.join(','); // получаем правильный хэш
		let objectInCache = cache.find(item => item.hash === hash); // ищем элемент, хэш которого равен нашему хэшу
		if (objectInCache) { // если элемент  найден
			console.log("Из кэша: " + objectInCache.value); // индекс нам известен, по индексу в массиве лежит объект, как получить нужное значение?
			return "Из кэша: " + objectInCache.value;
		}

		let result = func(...args); // в кэше результата нет - придётся считать
		cache.push({ hash, value: result }); // добавляем элемент с правильной структурой
		if (cache.length > 5) {
			cache.shift(); // если слишком много элементов в кэше надо удалить самый старый (первый) 
		}
		console.log("Вычисляем: " + result);
		return "Вычисляем: " + result;
	}
	return wrapper;
}


//Задание 2

function debounceDecoratorNew(func) {
	
	

}