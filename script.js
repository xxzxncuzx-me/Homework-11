const str = prompt('Введіть через пробіл елементи масиву (мінімум 4 елементи!). Елементи мають бути числами!');

if (str) {
    let arr = str.split(' ');
    if (arr.length < 4) {
        alert('Помилка! Ви задали недостаньо елементів:( ')
    } else {
        let newArr = arr.sort(function (a, b) {
            return a - b;
        });
        alert(`Відсортований за зростанням масив: ${newArr.join(' ')}`);

        newArr.splice(1, 3);
        alert(`З масиву видалено елементи з 2 по 4 (включно): ${newArr.join(' ')}`); 
    }
} else {
    alert('Помилка! Ви нічого не ввели :( ')
}
