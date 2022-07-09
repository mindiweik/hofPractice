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

var sumTotal = function(products) {
  var sum = _.reduce(products, function(accumulator, item) {
    return accumulator + parseFloat(item.price.slice(1));
  }, 0);
  return sum;
};

var dessertCategories = function(desserts) {
  var dessertResultObj = {};
  var dessertResult = _.reduce(desserts, function(total, dessert) {
    var dessertType = dessert.type;
    total[dessertType] = total[dessertType] || 0;
    total[dessertType]++;
    return total;
  }, {});
  return dessertResult;
};

var ninetiesKid = function(movies) {
  var movieResult = _.reduce(movies, function(total, movie) {
    var movieYear = movie.releaseYear;
    var movieTitle = movie.title;
    if (movieYear >= 1990 && movieYear <= 2000) {
      total.push(movieTitle);
    }
    return total;
  }, []);
  return movieResult;
};

var movieNight = function(movies, timeLimit) {
  var runtimeResult = _.reduce(movies, function(total, movie) {
    if (movie.runtime < timeLimit) {
      total = true;
    }
    return total;
  }, false);
  return runtimeResult;
};

var upperCaseFruits = function(fruits) {
  var resultFruits = _.map(fruits, function(value) {
    return value.toUpperCase();
  });
  return resultFruits;
};

var glutenFree = function(desserts) {
  var isGlutenFree = _.map(desserts, function(dessert) {
    if (dessert.ingredients.includes('flour')) {
      dessert.glutenFree = false;
    } else {
      dessert.glutenFree = true;
      return dessert;
    }
  });
  var removeUndefined = function(element) {
    if (element !== undefined) {
      return element;
    }
  };
  var filteredForGluten = _.filter(isGlutenFree, removeUndefined);
  return filteredForGluten;
};

var applyCoupon = function(groceries, coupon) {
  var couponApplied = _.map(groceries, function(item, key) {
    var price = parseFloat(groceries[key].price.slice(1));
    price -= coupon;
    var saleApplied = "$" + price;
    if (!item.hasOwnProperty('salePrice')) {
      item.salePrice = saleApplied;
    }
    return item;
  });
  console.log(couponApplied);
  return couponApplied;
};