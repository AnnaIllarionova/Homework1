//Задание 1
// const people = [
//     { name: 'Глеб', age: 29 },
//     { name: 'Анна', age: 17 },
//     { name: 'Олег', age: 7 },
//     { name: 'Оксана', age: 47 }
// ];

// function sortArray(a, b) {
//     if (a.age > b.age) {
//         return 1;
//     }
//     if (a.age < b.age) {
//         return -1;
//     }
//     return 0;
// }

// console.log(people.sort(sortArray));

//Задание 2
// function isPositive(number) {
//     return number > 0;
// }

// function isMale(person) {
//     return person.gender === 'male';
// }

//     function filter(arr, ruleFunction) {
//         const output = [];

//         for (let i = 0; i < arr.length; i++) {
//             if (ruleFunction(arr[i])) {
//                 output.push(arr[i]); 
//             }
//         }
//         return output;
//     }
    
//     console.log(filter([3, -4, 1, 9], isPositive)); // Должен выводить [3, 1, 9]
    
//     const people = [
//        {name: 'Глеб', gender: 'male'},
//        {name: 'Анна', gender: 'female'},
//        {name: 'Олег', gender: 'male'},
//        {name: 'Оксана', gender: 'female'}
//     ];
    
//     console.log(filter(people, isMale)); // Должен выводить [{name: 'Глеб', gender: 'male'},  {name: 'Олег', gender: 'male'}]


//Задание 3
// let timerId = setInterval(() =>{ 
//     let currentDay = new Date();
//     console.log(currentDay)}, 3000);

// setTimeout(() => {
//     clearInterval(timerId);
//     console.log('30 секунд прошло');
// }, 30000);

//Задание 4
// function delayForSecond(callback) {
//     setTimeout(callback, 1000);
// };

// delayForSecond(function () {
//     console.log('Привет, Глеб!');
// });

//Задание 5
// function delayForSecond(cb) {
//     setTimeout(() => {
//         console.log('Прошла одна секунда');
// 				if(cb) { 	
//                     cb(); }
//     }, 1000)
// }

// function sayHi (name) {
//     console.log(`Привет, ${name}!`);
// }

// // Нужно изменить код ниже:
// delayForSecond(() => sayHi('Глеб'));