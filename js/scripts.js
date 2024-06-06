/** @format */
// Question 1: The following three questions are based on the two paragraphs under the
// section which says "For Question 1" in the index.html file.
// 1.1 Select the element with an id of "sample1".
// 1.2 Print the element itself on the console upon page refresh.
// 1.3 Print the content of the element on the console upon page refresh.

// 1.1
var q1 = document.getElementById("sample1");
// 1.2
console.log(q1);
// 1.3
console.log(q1.textContent);

// Question 2: The following questions are based on the HTML code found under the
// section labeled "For question 2".
// 2.1 Select the element with an ID of "techCompanies" and display it on your
// console. (Do not use "querySelector" for this question)
// 2.2 Use "querySelector" to select the element with an ID of "techCompanies" and
// display it on your console.
// 2.3 How many tech companies are listed under the ul element with an id of
// "techCompanies"? Use "querySelectorAll" to count the total.
// 2.4 Select all elements with a class name of "red" and display them on the console.
// Use both "querySelectorAll" and "getElementByClass"
// 2.5 Create a new li HTML element with a content of "Facebook" and display it on
// console
// 2.6 Give the newly created element a class of "blue" using JavaScript
// 2.7 Append the newly created element next to the the "Sony" li element
// 2.8 How many of the tech companies are labeled blue? Find the result using
// JavaScript and display the result inside the "blueCompanies" div.

// 2.1
var tech = document.getElementById("techCompanies");
console.log(tech);
// 2.2
var techh = document.querySelector("#techCompanies");
console.log(techh);
// 2.3
var count = document.querySelectorAll("#techCompanies li");
console.log(count);
// 2.4
var className = document.querySelectorAll('.red');
console.log(className);
var className2 = document.getElementsByClassName('red');
console.log(className2);
// 2.5
let newElement = document.createElement('li')
newElement.innerText = 'Facebook'
console.log(newElement)
// 2.6
newElement.className = 'blue'
// 2.7
let parent = document.getElementById("techCompanies");
parent.appendChild(newElement);
// 2.8
var tech = document.querySelectorAll(".blue");
var count = 0;
for (i = 0; i < tech.length; i++){
    count++
}
var blueCompanies = document.getElementById("blueCompanies");
blueCompanies.innerText ='there are '+ count +' blue companies';
console.log(blueCompanies);
 
// Question 3:
// Change the background color of the page to light-blue (#99ecff) when clicked on the text
// that says "Yes". If there is a background color set already, change it to none when clicked
// on "No"
// Hint: First, write two functions to alter the backgroundColor of the page. One to add a
// background color, another to remove. Then, select the "yesBackground" or
// "noBackground" element and bind the selected element with the click event. Finally,
// attach the function you wrote to alter the background color when the respective element
// is clicked on.
function changeBgColor() {
    document.body.style.backgroundColor = "#99ecff";
}
function removeBgColor() {
    document.body.style.backgroundColor=''
}
var yes = document.getElementById("yesBackground");
var no = document.getElementById("noBackground");
yes.addEventListener("click", changeBgColor);
no.addEventListener("click", removeBgColor);

// Question 4:
// A form with two text fields is provided under the section which says "For question 4".
// Write a JavaScript code which takes the values of the two fields, checks if they are
// number values and calculate the sum of the two numbers.
// 1. Display the result on the console
// 2. Display the result underneath the form
// 3. If any of the numbers provided is not a number, display a message that says
// "Please enter numerical values only" underneath the form

var adder = document.getElementById("adder");

function checkTheForm(e) {
    e.preventDefault();
    myInput = document.querySelectorAll(".form-values input");
    result = document.getElementById('sum');
    if (isNaN(myInput[0].value || myInput[1].value)) {
        alert("Please enter numerical values only");
    } else if (myInput[0].value.length == 0) {
      alert("please enter first value");
      myInput[0].style.backgroundColor = "pink";
    } else if (myInput[1].value.length == 0) {
      alert("please enter second value");
      myInput[1].style.backgroundColor = "pink";
    } else {
      var sum = parseInt(myInput[0].value) + parseInt(myInput[1].value);
      result.innerText = "the sum is " + sum;
    }
        
  
}

adder.addEventListener("submit", checkTheForm)
