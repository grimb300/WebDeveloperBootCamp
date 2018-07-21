function isEven(num) {
	if (num % 2 === 0) {
		return true;
	} else {
		return false;
	}
}

if (isEven(4)) { console.log("Pass");}
else {console.log("Fail");}
if (!isEven(21)) { console.log("Pass");}
else {console.log("Fail");}
if (isEven(68)) { console.log("Pass");}
else {console.log("Fail");}
if (!isEven(333)) { console.log("Pass");}
else {console.log("Fail");}

function factorial(num) {
	if (num === 0) {
		return 1;
	}
	var product = 1;
	for (var i = num; i > 0; i--) {
		product = product * i;
	}
	return product;
}

if (factorial(5) === 120) { console.log("Pass");}
else {console.log("Fail");}
if (factorial(2) === 2) { console.log("Pass");}
else {console.log("Fail");}
if (factorial(10) === 3628800) { console.log("Pass");}
else {console.log("Fail");}
if (factorial(0) === 1) { console.log("Pass");}
else {console.log("Fail");}

function kebabToSnake(name) {
	return name.replace(/-/g,"_");
}

if (kebabToSnake("hello-world") === "hello_world") { console.log("Pass");}
else {console.log("Fail");}
if (kebabToSnake("dogs-are-awesome") === "dogs_are_awesome") { console.log("Pass");}
else {console.log("Fail");}
if (kebabToSnake("blah") === "blah") { console.log("Pass");}
else {console.log("Fail");}
