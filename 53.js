var element;
// element = document.getElementById("head").innerText;
// console.log(element);
// document.getElementById("head").innerText = "<h1>wow</h1>";
// document.getElementById("head").innerHTML = "<h1>wow</h1>";

// element = document.getElementById("head").innerHTML;


// console.log(element);



// set attributes 


document.getElementById("head").innerHTML = "<h1>wow</h1>";

document.getElementById("head").setAttribute("class","xyz");

element = document.getElementById("head").getAttribute("class");
console.log(element);