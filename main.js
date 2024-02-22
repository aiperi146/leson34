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
   document.getElementById('inputField').addEventListener('input', function() {
    const inputText = this.value;
    const itemsArray = inputText.split(',').map(item => item.trim()).filter(item => item !== '');
    const outputDiv = document.getElementById('outputDiv');
    outputDiv.innerHTML = '';

    if (itemsArray.length > 0) {
        const olElement = document.createElement('ol');
        itemsArray.forEach(item => {
            const liElement = document.createElement('li');
            liElement.textContent = item;
            olElement.appendChild(liElement);
        });
        outputDiv.appendChild(olElement);
    }
});
document.getElementById('outputDiv').addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        const clickedItem = event.target;
        const olElement = clickedItem.parentNode;
        olElement.removeChild(clickedItem);
        olElement.insertBefore(clickedItem, olElement.firstChild);
    }
});
