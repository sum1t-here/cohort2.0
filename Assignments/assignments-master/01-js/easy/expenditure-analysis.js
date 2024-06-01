/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let totalSpending = {};

  transactions.forEach((obj) => {
    if(totalSpending[obj["category"]]){
      totalSpending[obj["category"]] += obj["price"];
    }else {
      totalSpending[obj["category"]] = obj["price"];
    }
  });

  let result = [];

  for(const key of Object.keys(totalSpending)){
    result.push({category: key, totalSpent: totalSpending[key]})
  }
  return result;
}

module.exports = calculateTotalSpentByCategory;
