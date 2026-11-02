console.log('Hey');
window.alert('you are going on the deepend');

//comment
/* comments
multi line*/
document.getElementById('myP').textContent = 'Hey';

//varibles
let x;
x = 100;
let price = 10.00;
let age = 6;
let email = 'jjbrownwash@gmail.com';



console.log(price)
//must use backticks (by escape) to use varibles.
console.log(`you are ${age} years old`);
console.log(`your email: ${email}`);

//web VAribles
let fullName = "Jeremiah Washington";
age = 21;
let school = true;

document.getElementById("myP1").textContent = fullName;
document.getElementById("myP2").textContent = age;
document.getElementById("myP3").textContent = `Are you a ${school}`;