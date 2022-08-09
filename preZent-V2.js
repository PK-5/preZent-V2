//Attendance Present, Absent, Late buttons

// Student 1

let present1 = document.querySelector("#present1")
let absent1 = document.querySelector("#absent1")
let late1 = document.querySelector("#late1")

function pFunction1(){
    present1.style.background = ("#98BF64")
    absent1.style.background = ("#EFEFEF")
    late1.style.background = ("#EFEFEF")

}

function aFunction1(){
    absent1.style.background = ("#BC544B")
    present1.style.background = ("#EFEFEF")
    late1.style.background = ("#EFEFEF")
}

function lFunction1(){
   late1.style.background = ("#ED820E")
   absent1.style.background = ("#EFEFEF")
   present1.style.background = ("#EFEFEF")
}


// Student 2

let present2 = document.querySelector("#present2")
let absent2 = document.querySelector("#absent2")
let late2 = document.querySelector("#late2")

function pFunction2(){
    present2.style.background = ("#98BF64")
    absent2.style.background = ("#EFEFEF")
    late2.style.background = ("#EFEFEF")

}

function aFunction2(){
    absent2.style.background = ("#BC544B")
    present2.style.background = ("#EFEFEF")
    late2.style.background = ("#EFEFEF")
}

function lFunction2(){
    late2.style.background = ("#ED820E")
    absent2.style.background = ("#EFEFEF")
    present2.style.background = ("#EFEFEF")
}

// Student 3

let present3 = document.querySelector("#present3")
let absent3 = document.querySelector("#absent3")
let late3 = document.querySelector("#late3")

function pFunction3(){
    present3.style.background = ("#98BF64")
    absent3.style.background = ("#EFEFEF")
    late3.style.background = ("#EFEFEF")
}

function aFunction3(){
    absent3.style.background = ("#BC544B")
    present3.style.background = ("#EFEFEF")
    late3.style.background = ("#EFEFEF")
}

function lFunction3(){
    late3.style.background = ("#ED820E")
    absent3.style.background = ("#EFEFEF")
    present3.style.background = ("#EFEFEF")
}

//Total students

let total = document.querySelector("#total")

function totalFunction(){

   let wholeTable = document.querySelector("#Schedule").rows.length;
   var buttonColor = wholeTable.rows[i].cells[0].getAttribute('bgcolor'); }
   if (bgcolour = "#98BF64") {
    
   }
   for (var i = 0; i < wholeTable.rows.length-4; i++) {
   
  

   let totalPresent = 
   totalCalculated = wholeTable + -4 ;
   total.innerHTML= totalCalculated
}

// Schedule 

//prgramming ctrl + k

//function linkFunction(){
   // window.getSelection().toString() 
     //   var a = document.createElement('a');
       // a.href = 'http://www.google.com';
        //a.title = 'GOOGLE';
        //window.getSelection().getRangeAt(0).surroundContents(a)
//}
//document.onkeydown = linkFunction();
