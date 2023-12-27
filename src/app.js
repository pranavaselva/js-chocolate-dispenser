var chocolates = [
  'green',
  'green',
  'green',
  'silver',
  'blue',
  'crimson',
  'purple',
  'red',
  'crimson',
  'purple',
  'purple',
  'green',
  'pink',
  'blue',
  'red',
  'silver',
  'crimson',
  'purple',
  'silver',
  'silver',
  'red',
  'green',
  'red',
  'silver',
  'pink',
  'crimson',
  'purple',
  'green',
  'red',
  'silver',
  'crimson',
  'pink',
  'silver',
  'blue',
  'pink',
  'crimson',
  'crimson',
  'crimson',
  'red',
  'purple',
  'purple',
  'green',
  'pink',
  'blue',
  'red',
  'crimson',
  'silver',
  'purple',
  'purple',
  'purple',
  'red',
  'purple',
  'red',
  'blue',
  'silver',
  'green',
  'crimson',
  'silver',
  'blue',
  'crimson',
  'purple',
  'green',
  'pink',
  'green',
  'red',
  'silver',
  'crimson',
  'blue',
  'green',
  'red',
  'red',
  'pink',
  'blue',
  'silver',
  'pink',
  'crimson',
  'purple',
  'green',
  'red',
  'blue',
  'red',
  'purple',
  'silver',
  'blue',
  'pink',
  'silver',
  'crimson',
  'silver',
  'blue',
  'purple',
  'purple',
  'green',
  'blue',
  'blue',
  'red',
  'red',
  'silver',
  'purple',
  'silver',
  'crimson',
];

// x and y ==> can take any of the values from the below list-
// [ green, red, purple, blue, crimson, silver, pink ]
// z ==> can take a number from 0<=a<=100

//Progression 1: Add z chocolates of x color

function helperAddChocolate(chocolates, color, count) {
  Array.from({ length: count }).forEach(function(){
    chocolates.unshift(color);
  });
  return chocolates;
}

function addChocolates(chocolates, color, count) {
  if (count <= 0) {
    return 'Number cannot be zero/negative';
  }
  return helperAddChocolate(chocolates, color, count);
}

//Progression 2: Remove z chocolates from the top the dispenser

function helperToRemoveChocolate(chocolates, number) {
  let removedChocolates = [];

  Array.from({ length: number }).forEach(function () {
    let removedElement = chocolates.shift();
    removedChocolates.push(removedElement);
  });
  return removedChocolates;
}

function removeChocolates(chocolates, number) {
  return number <= 0
    ? 'Number cannot be zero/negative'
    : number > chocolates.length
    ? 'Insufficient chocolates in the dispenser'
    : helperToRemoveChocolate(chocolates, number);
}

//Progression 3: Dispense z chocolates

function helperDispenser(chocolates, number) {
  let removedItemsFromstore = [];

  Array.from({ length: number }).forEach(function () {
    let elementChocolate = chocolates.pop();
    removedItemsFromstore.push(elementChocolate);
  });
  return removedItemsFromstore;
}

function dispenseChocolates(chocolates, number) {
  return number <= 0
    ? 'Number cannot be zero/negative'
    : number > chocolates.length
    ? 'Insufficient chocolates in the dispenser'
    : helperDispenser(chocolates, number);
}

//Progression 4: Dispense z chocolates of x color

function helperDispenseOfColor(chocolates, number, color) {
  let removedElements = [];

  Array.from({ length: number }).forEach(function () {
    removedElements.push(chocolates.pop());
  });
  return removedElements;
}

function dispenseChocolatesOfColor(chocolates, number, color) {
  return number <= 0
  ? 'Number cannot be zero/negative'
  : number > chocolates.length
  ? 'Insufficient chocolates in the dispenser'
  : helperDispenseOfColor(chocolates, number, color)
}

//Progression 5: Display z chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]

function noOfChocolates(chocolates) {
  let ans = []
  const GiveArray = [
    'green',
    'silver',
    'blue',
    'crimson',
    'purple',
    'red',
    'pink',
  ];

  
  for (let i = 0; i < GiveArray.length; i++) {
    let count = 0;

    for (let j = 0; j < chocolates.length; j++) {
      if (GiveArray[i] == chocolates[j]) {
        count = count + 1;
      }
    }
    if (count > 0) {
      ans.push(count);
    }
  }

  return ans;
}

//Progression 6: Sort chocolates based on count in each color. Return array of colors

function sortChocolateBasedOnCount(chocolates) {
  let GiveArray = [
    'silver',
    'green',
    'blue',
    'crimson',
    'purple',
    'red',
    'pink ',
  ];

  chocolates.sort();

  let obj = {};
  let ans = [];

  for (let i = 0; i < chocolates.length; i++) {
    let elementFromArray = chocolates[i];
    if (obj[elementFromArray] == undefined) {
      obj[elementFromArray] = 1;
    } else {
      obj[elementFromArray] = obj[elementFromArray] + 1;
    }
  }
  const sortable = Object.fromEntries(
    Object.entries(obj).sort(([, a], [, b]) => b - a)
  );

  Object.keys(sortable).forEach((key) => {
    for (let i = 0; i < sortable[key]; i++) {
      ans.push(key);
    }
  });

  return ans;
}

//Progression 7: Change z chocolates of x color to y color

function changeChocolateColor(chocolates, number, color, finalColor){
  return number <= 0
  ? 'Number cannot be zero/negative'
  : number > chocolates.length
  ? []
  : color == finalColor
  ? "Can't replace the same chocolates"
  : helperChangeColor(chocolates, number, color, finalColor)
}

function helperChangeColor(chocolates, number, color, finalColor) {
  return chocolates.map((chocolate) =>
    number > 0 && chocolate === color ? finalColor : chocolate
  );
}

//Progression 8: Change all chocolates of x color to y color and return [countOfChangedColor, chocolates]

function changeChocolateColorAllOfxCount(chocolates, color, finalColor) {
  return  color === finalColor
  ? "Can't replace the same chocolates"
  : helperChange(chocolates, color, finalColor)
}

function helperChange(chocolates, color, finalColor) {
  const modifiedChocolates = chocolates.map((chocolate) =>
    chocolate === color ? finalColor : chocolate
  );
  const countOfChangedColor = modifiedChocolates.filter(
    (chocolate) => chocolate === finalColor
  ).length;

  return [countOfChangedColor, modifiedChocolates];
}

//Challenge 1: Remove one chocolate of x color from the top

function removeChocolateOfColor(chocolates, Color) {
  let indeXofColor = chocolates.indexOf(Color);

  if (indeXofColor >= 0) {
    chocolates.splice(indeXofColor, 1);
  }
  return chocolates;
}

//Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed

function dispenseRainbowChocolates(chocolates, number) {
  let objStore = {};

  for (let i = 0; i < chocolates.length; i++) {
    if (objStore[chocolates[i]] === undefined) {
      objStore[chocolates[i]] = 1;
    } else {
      objStore[chocolates[i]] = objStore[chocolates[i]] + 1;
    }
  }

  let valuesOfObjInArray = Object.values(objStore);

  console.log(valuesOfObjInArray);

  let countRainBowDispensed = 0;
  for (let i = 0; i < valuesOfObjInArray.length; i++) {
    if (valuesOfObjInArray[i] % 3 == 0) {
      countRainBowDispensed = countRainBowDispensed + valuesOfObjInArray[i] / 3;
    }
  }

  return Math.floor(countRainBowDispensed);
}
dispenseRainbowChocolates(chocolates, 3);