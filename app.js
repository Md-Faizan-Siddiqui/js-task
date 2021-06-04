//example
// var user = prompt("enter a week days");

// switch (user) {
//     case "monday": case "tuesday": case "wednesday": case "thursday": case "friday":
//         document.write("Working day")
//         break;

//     case "saturday": case "sunday":
//         document.write("aram kro");
//         break;

//     default:
//         document.write("Enter valid week day");
// }



/////////////////// 6-3-21

//Assignment # 38-44 JAVASCRIPT (Q.1)

// var base = +prompt("enter a base value")
// var exp = +prompt("enter a power value")

// function power() {
//     var result = Math.pow(base,exp);
//     document.write(result);
// }
// console.log(power());

//Assignment # 38-44 JAVASCRIPT (Q.1)

// var base = +prompt("enter a base value")
// var exp = +prompt("enter a power value")

// function power() {
//     var result = base ** exp;
//     document.write(result);
// }
// console.log(power());

//Assignment # 38-44 JAVASCRIPT (Q.3)

// var a = +prompt("value of a");
// var b = +prompt("value of b");
// var c = +prompt("value of c");

// function calTriangleArea(){
//     var s = (a+b+c)/2;
//     console.log(s);
//     var temp = s*(s-a)*(s-b)*(s-c)
//     console.log(temp);
//     var area = Math.sqrt(temp);
//     console.log(area);
// }
// calTriangleArea();

////////////////

// var english = +prompt("marks of english")
// var urdu = +prompt("marks of urdu")
// var maths = +prompt("marks of math")

// // function avg() {
// //     avgMarks = (english + urdu + maths) / 3;
// //     console.log(avgMarks);
// // }
// // avg();

// function per() {
//     tMarks = english + urdu + maths;
//     console.log(avgMarks);
// }
// per();



//  dlt image start

// function dlt1(){
//         var inp=document.getElementById("img1");
//         inp.remove();
//     }

//  dlt image end


// counter start

// var data = 0;

// document.getElementById("pera").innerText = data;

// function decrement() {
//     data -= 1;
//     document.getElementById("pera").innerText = data;
// }
// function increment() {
//     data += 1;
//     document.getElementById("pera").innerText = data;
// }

// counter end

//Assignment # 43-48 JAVASCRIPT (Q.3)

// dlete value from arry "start"
// var arr = ["jahanzib 10", "faizan 14", "zeshan 38", "salaman 30"]//array jis sy value dlt krni h..
// var ul = document.createElement('ul'); // create a ul

// function show() { //data show kr raha h....
//     ul.innerHTML = null; // ye function br br chal raha hy jis ki waja sy ul ko null rakha h...
//     for (let i = 0; i < arr.length; i++) {
//         var items = document.createElement('li'); //create li
//         items.appendChild(document.createTextNode(arr[i])); //li m arry print krwaya...
//         let button = document.createElement("button"); // create button 
//         button.innerHTML = "delete"; //button text
//         button.addEventListener('click', function () { // event listner use kia or dlete ka function claya...
//             dlt(i);// function call kia
//         });
        
//         items.appendChild(button); //li k 7 button ko rakha

//         ul.appendChild(items); //ul m li show krwaya
//     }
//     console.log(ul);

//     document.getElementById("print").appendChild(ul); //html div m ul show krwaya
// }
// function dlt(i) { //create function dlete krny k lye
//     arr.splice(i, 1); //delete the value 
//     show();
// }
// show();
////"end"//////