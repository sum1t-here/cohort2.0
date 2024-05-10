"use strict";
function sumOfAge(user1, user2) {
    return user1.age + user2.age;
}
const result = sumOfAge({ name: 'Sumit', age: 20 }, { name: 'John', age: 18 });
console.log(result);
