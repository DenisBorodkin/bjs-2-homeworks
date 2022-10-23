//Задание 1

function cachingDecoratorNew(func) {
	let cache = [];
	function wrapper(...args) {
		const hash = args.join(','); // получаем правильный хэш
   
		if (hash in cache) { // если элемент  найден
			console.log("Из кэша: " + cache[hash]); 
			return "Из кэша: " + cache[hach];
		}
		let result = func(...args); // в кэше результата нет - придётся считать
		cache.push(); // добавляем элемент с правильной структурой
		if (cache.length > 5) {
			cache.shift();// если слишком много элементов в кэше надо удалить самый старый (первый) 
		}
		console.log("Вычисляем: " + result);
		return "Вычисляем: " + result;
	}
	return wrapper;
}



//Задание 2

function debounceDecoratorNew(func) {
	// Ваш код
}