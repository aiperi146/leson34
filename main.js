function listItems(arr, number) {
    if (!Array.isArray(arr)) {
        console.log('Первый параметр должен быть массивом строк');
        return arr;
    }

    if (!Number.isInteger(number) || number <= 0) {
        console.log('Второй параметр должен быть натуральным числом');
        return  number;
    }

    for (let i = 1; i <= number; i++) {
       
        for( let str of arr ){
            console.log(str, i)
        }
    }

}
console.log(listItems(['этаж', 'вагон'], 3))


