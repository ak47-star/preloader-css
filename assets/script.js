// ( function () {
// 	var preload = document.getElementById('preload');
// 	var loading = 0;
// 	var id = setInterval(frame, 64);

// 	function frame () {
//         if( loading == 100) {
//            clearInterval(id);
//            window.open('welcome.html','_self')
//         } else {
//         	loading = loading + 1;
//         	if( loading == 90) {
//                preload.style.animation = "fadeout is ease";
//         	}
//         	console.log('aihi');
//         }
// 	}
// })();

const array1 = [1,2,3,4];
const reducer = (accumulartor, currentvalue) => accumulartor + currentvalue;
console.log(array1.reduce(reducer));

let company = {
	sales: [
	{
      name: 'john',
      salary: 1000
	},
	{
		name: 'alex',
		salary: 2000
	}
	],

	development: {
		sites: [
		{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
		internals: [{name: 'Jack', salary: 1300}]
	}
}

function sumSalaries(department) {
 if(Array.isArray(department)) {
    return department.reduce((previous,current)=> {previous + current.salary},0);
 } else {
 	let sum = 0;
 	for( let sub in Object.values(department)) {
         sum += sumSalaries(sub);
 	}
 	return sum;
 }
}
// sumSalaries(company);

console.log(Object.values(company));

var car = {
	registrationNumber: 'GA12345',
	brand: 'Toyota',
	dislplayDetails: function () {
		console.log(this.registrationNumber +"  "+this.brand);
	}
}

car.dislplayDetails();

var newcar = car.dislplayDetails;
newcar();
// the bind method
var myCarDetials = car.dislplayDetails.bind(car);
myCarDetials();

let fruits = ["Banana"];
let arr = fruits;
arr.push("Pear"); 
console.log(fruits);

console.log(arr);
// almost all the time the second syntaxx
// 
 let arrr = ["Apple", "Orange", "Pear"];

for (let i = 0; i < arrr.length; i++) {

  alert( arrr[i] );
  console.log(arrr.length);
  arrr.pop(arrr[i]);
 console.log(arrr.length);
}