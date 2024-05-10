interface User {
  name: String;
  age: number;
}

function sumOfAge(user1: User, user2: User) {
  return user1.age + user2.age;
}

const result = sumOfAge({ name: 'Sumit', age: 20 }, { name: 'John', age: 18 });

console.log(result);
