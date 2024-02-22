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


function mergeObjects() {
    const result = {};

    for (const arg of arguments) {
        
        if (typeof arg === 'object' && arg !== null) {

            for (const key in arg) {
             
                if (Object.prototype.hasOwnProperty.call(arg, key)) {
                   
                    result[key] = arg[key];
                }
            }
        }
    }

    return result;
}


console.log(mergeObjects({type: 'bass', string: 4}, {type: 'ukulele'}));
console.log(mergeObjects({name: 'John', age: 42}, {type: 'car', name: 'ferrari'}, {type: 'bike'}));
console.log(mergeObjects());
