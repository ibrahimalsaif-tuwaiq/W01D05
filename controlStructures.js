// variables

let num1 = 10;
let num2 = 20;
let num3 = 30;

// compares “num1” and “num2” and displays the larger value

if (num1 > num2) {
  console.log(`The large number is ${num1}`);
} else if (num2 > num1) {
  console.log(`The large number is ${num2}`);
} else {
  console.log("The numbers are equal");
}

// determines whether “num1” is odd or even and displays the result

if (num1 % 2 == 0) {
  console.log(`The number ${num1} is even`);
} else {
  console.log(`The number ${num1} is odd`);
}

// sort the three numbers from largest to smallest

if (num1 > num2 && num1 > num3) {
  if (num2 > num3) {
    console.log(`${num1}, ${num2}, ${num3}`);
  } else {
    console.log(`${num1}, ${num3}, ${num2}`);
  }
} else if (num2 > num1 && num2 > num3) {
  if (num1 > num3) {
    console.log(`${num2}, ${num1}, ${num3}`);
  } else {
    console.log(`${num2}, ${num3}, ${num1}`);
  }
} else {
  if (num1 > num2) {
    console.log(`${num3}, ${num1}, ${num2}`);
  } else {
    console.log(`${num3}, ${num2}, ${num1}`);
  }
}

// variables called amount . print "Please enter a positive number" if it is not positive ...

let amount = "10";

if (amount < 0) {
  console.log("Please enter a positive number");
} else if (typeof amount != "number") {
  console.log("Please enter a number");
} else {
  console.log(amount);
}

// two string variables , username and password, and print a string "login successful" ...

let username = "ibrahim";
let password = "45612325";

if (username.length > 6 && password.length >= 8) {
  console.log("login successful");
} else {
  console.log("login failed");
}

// while loop that will display the numbers 0 - 20

let whileCounter = 0;

while (whileCounter <= 20) {
  console.log(whileCounter);
  whileCounter++;
}

// for loop that will display the numbers 20 - 0

for (let i = 20; i >= 0; i--) {
  console.log(i);
}

// for loop that will display all even numbers between 1 and 20

for (let i = 1; i <= 20; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

//two variable startRange and endRange Assign each variable a number ...

let startRange = 5;
let endRange = 8;

let range = "";

for (let i = startRange; i <= endRange; i++) {
  range += i;
  if (i != endRange) {
    range += ", ";
  }
}

console.log(range);

// for loop that will produce triangle star shape

let shape = "";

for (let i = 0; i <= 5; i++) {
  for (let j = 0; j <= i; j++) {
    shape += "*";
  }
  if (i != 5) {
    shape += "\n";
  }
}

console.log(shape);

// for loop to compute the greatest common divisor (GCD)

let a = Math.abs(270);
let b = Math.abs(192);
let R;

for (; a % b > 0; ) {
  R = a % b;
  a = b;
  b = R;
}

console.log(b);

// Extra - Turn string to camelCase

let str = "my name is";
let wodarr = str.split(" ");
let camelCase = "";

for (let i = 0; i < wodarr.length; i++) {
  if (i == 0) {
    camelCase += wodarr[i].toLowerCase();
  } else {
    let word = wodarr[i];
    for (let j = 0; j < word.length; j++) {
      if (j == 0) {
        camelCase += word[j].toUpperCase();
      } else {
        camelCase += word[j].toLowerCase();
      }
    }
  }
}

console.log(camelCase);
