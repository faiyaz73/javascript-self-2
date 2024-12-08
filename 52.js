// var element;
// element = document.getElementsByClassName("main").innerHTML;
// console.write(element);


// var element;
// element = document.getElementById("content").innerText;       //print the content 
// element = document.getElementById("content").innerHTML;        // print the html full file
// console.log(element);

// var num;
// num = document.getElementById("main").getAttribute("class");
// num = document.getElementById("main").getAttributeNode("style").value;
// num = document.getElementById("main").attributes[1].value;                          // all attributes show ex -- id,class and style
// console.log(num)


var element;
element = document.getElementById("main").getAttribute("style").getAttributeNode("style").value;
console.log(element);



