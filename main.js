// 1.1

let users = {};

for (let i = 1; i <= 3; i++) {
    users[i] = {};
    users[i].id = `Пользователь: ${i}`;
    users[i].name = prompt(`Введите имя пользователя ${i}`);
    users[i].age = +prompt(`Введите возраст пользователя ${i}`);
    for (let key in users) {
        for (let newKey in users[key]) {
            console.log(users[key][newKey]);
        }
    }
}

console.log(users);

// 1.2

// let rec = receipt();
// let sum = 0;
// let nya = '';

// for (let key in rec) {
//     sum += rec[key].price;
//     nya += [key] + ' ' + rec[key].info + ' ';
// }
// console.log(` Вы заказали ${nya}, Общая стоимость c доставкой : ${sum+9000} (9000сум)`);