var moreFruits = function(fruits) {
  var results = [];

  _.each(fruits, function(fruit, index, collection) {
    results.push(fruit);
  });

  return results;
};

var multiplesOfFive = function(numbers) {
  var multiplesOfFiveTotal = 0;

  _.each(numbers, function(number, index, collection) {
    if (number % 5 === 0) {
      multiplesOfFiveTotal++;
    }
  });
  return multiplesOfFiveTotal;
};

var onlyOneFruit = function(fruits, targetFruit) {
  var locateTargetFruit = function(fruit) {
    if (targetFruit === fruit) {
      return fruit;
    }
  };
  var desiredFruit = _.filter(fruits, locateTargetFruit);
  return desiredFruit;
};

var startsWith = function(fruits, letter) {
  var locateWords = function(fruit) {
    if (fruit.charAt(0) === letter) {
      return fruit;
    }
  };
  var finalFruits = _.filter(fruits, locateWords);
  return finalFruits;
};

var cookiesOnly = function(desserts) {
  var locateDessert = function(dessert) {
    if (dessert.type === 'cookie') {
      return dessert;
    }
  };
  var chosenDessert = _.filter(desserts, locateDessert);
  return chosenDessert;
};

// return the total price of all products.
var sumTotal = function(products) {
};

// return an object consisting of dessert types and how many of each.
// exampleOutput: { dessertType: 3, dessertType2: 1 }
var dessertCategories = function(desserts) {
};

// given an array of movie data objects,return an array containing
// movies that came out between 1990 and 2000.
// TIP: use an array as your accumulator - don't push to an external array!
var ninetiesKid = function(movies) {
};

// return an boolean stating if there exists a movie with a shorter
// runtime than your time limit.
// timeLimit is an integer representing a number of minutes.
var movieNight = function(movies, timeLimit) {
};

/*
 *
 *  _.map
 *
 */

// given an array of strings, use _.map to return a new array containing all
// strings converted to uppercase letters.
var upperCaseFruits = function(fruits) {
};

// given an array of dessert objects, return a new array of objects
// that have a new "glutenFree" property, with a boolean value.
// TIP: Items that contain flour are not gluten-free.
var glutenFree = function(desserts) {
};

// use _.map to return an array of items with their sale prices, with a new property
// containing the sale price. round any decimals to 2 places.
//
// having trouble with decimals? check out this article:
// http://adripofjavascript.com/blog/drips/avoiding-problems-with-decimal-math-in-javascript.html
//
/*

 example output:
  var salePrices = applyCoupon(groceries, 0.20);
  [
    {
      id: 1,
      product: 'Olive Oil',
      price: '$12.1',
      salePrice: '$9.68'
    }
  ];

*/
var applyCoupon = function(groceries, coupon) {
};
