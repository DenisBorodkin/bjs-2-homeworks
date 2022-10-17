//Задание 1

function cachingDecoratorNew(func) {
	let cache = {};
	return function wrapper(...rest) {
		let key = rest.toString();
		if (key in cache) {
			console.log('Из кеша', cache[key]);
			return cache[key];
		}
		else if (Object.entries(cache).length > 5) {
			cache.shift();
			return cache[key];
		}
		else {
			let result = func(...rest);
			cache[key] = result;
			console.log('Вычисляем', result);
			return result;
		}

	}
}



/*function cachingDecoratorNew(func) {
	let cache = [];
	function wrapper(...args) {
		const hash = args.join(','); // получаем правильный хэш
		let objectInCache = cache.find((item) => item.hash === cache[hash]); // ищем элемент, хэш которого равен нашему хэшу
		if (!objectInCache) { // если элемент не найден
			console.log("Из кэша: " + cache[hash]); // индекс нам известен, по индексу в массиве лежит объект, как получить нужное значение?
			return "Из кэша: " + cache[hash];
		}
		let result = func(...args); // в кэше результата нет - придётся считать
		cache.push(args); // добавляем элемент с правильной структурой
		if (cache.length > 5) {
			cache.shift();// если слишком много элементов в кэше надо удалить самый старый (первый) 
		}
		console.log("Вычисляем: " + result);
		return "Вычисляем: " + result;
	}
	return wrapper;
}*/

//Задание 2

function debounceDecoratorNew(func) {
	// Ваш код
}