//Attendance Present, Absent, Late buttons

//Total student in a class and total present 

var total = 0;
var totalPresent = 0;

// Student 1

let present1 = document.querySelector("#present1") 
let absent1 = document.querySelector("#absent1")
let late1 = document.querySelector("#late1")

function pFunction1(){
    present1.style.background = ("#98BF64")
    absent1.style.background = ("#EFEFEF")
    late1.style.background = ("#EFEFEF")

    total += 1;
    totalPresent += 1;

}

function aFunction1(){
    absent1.style.background = ("#BC544B")
    present1.style.background = ("#EFEFEF")
    late1.style.background = ("#EFEFEF")

    total+= 1;
}

function lFunction1(){
   late1.style.background = ("#ED820E")
   absent1.style.background = ("#EFEFEF")
   present1.style.background = ("#EFEFEF")

   total += 1;
   totalPresent += 1;
}


// Student 2

let present2 = document.querySelector("#present2")
let absent2 = document.querySelector("#absent2")
let late2 = document.querySelector("#late2")

function pFunction2(){
    present2.style.background = ("#98BF64")
    absent2.style.background = ("#EFEFEF")
    late2.style.background = ("#EFEFEF")

    total += 1;
    totalPresent += 1;

}

function aFunction2(){
    absent2.style.background = ("#BC544B")
    present2.style.background = ("#EFEFEF")
    late2.style.background = ("#EFEFEF")

    total += 1;
}

function lFunction2(){
    late2.style.background = ("#ED820E")
    absent2.style.background = ("#EFEFEF")
    present2.style.background = ("#EFEFEF")

    total += 1;
    totalPresent += 1;
}

// Student 3

let present3 = document.querySelector("#present3")
let absent3 = document.querySelector("#absent3")
let late3 = document.querySelector("#late3")

function pFunction3(){
    present3.style.background = ("#98BF64")
    absent3.style.background = ("#EFEFEF")
    late3.style.background = ("#EFEFEF")

    total += 1;
    totalPresent += 1;
}

function aFunction3(){
    absent3.style.background = ("#BC544B")
    present3.style.background = ("#EFEFEF")
    late3.style.background = ("#EFEFEF")

    total += 1;
}

function lFunction3(){
    late3.style.background = ("#ED820E")
    absent3.style.background = ("#EFEFEF")
    present3.style.background = ("#EFEFEF")

    total += 1;
    totalPresent += 1;
}

// Student 4

let present4 = document.querySelector("#present4")
let absent4 = document.querySelector("#absent4")
let late4 = document.querySelector("#late4")

function pFunction4(){
    present4.style.background = ("#98BF64")
    absent4.style.background = ("#EFEFEF")
    late4.style.background = ("#EFEFEF")

    total += 1;
    totalPresent += 1;
}

function aFunction4(){
    absent4.style.background = ("#BC544B")
    present4.style.background = ("#EFEFEF")
    late4.style.background = ("#EFEFEF")

    total += 1;
}

function lFunction4(){
    late4.style.background = ("#ED820E")
    absent4.style.background = ("#EFEFEF")
    present4.style.background = ("#EFEFEF")

    total += 1;
    totalPresent += 1;
}

// Student 5

let present5 = document.querySelector("#present5")
let absent5 = document.querySelector("#absent5")
let late5 = document.querySelector("#late5")

function pFunction5(){
    present5.style.background = ("#98BF64")
    absent5.style.background = ("#EFEFEF")
    late5.style.background = ("#EFEFEF")

    total += 1;
    totalPresent += 1;
}

function aFunction5(){
    absent5.style.background = ("#BC544B")
    present5.style.background = ("#EFEFEF")
    late5.style.background = ("#EFEFEF")

    total += 1;
}

function lFunction5(){
    late5.style.background = ("#ED820E")
    absent5.style.background = ("#EFEFEF")
    present5.style.background = ("#EFEFEF")

    total += 1;
    totalPresent += 1;
}

//Total students


var studentsPresent = document.querySelector("#total");


function totalFunction(){

    let Present = (totalPresent/total)*100 ;
    console.log(Present)

    if (Present >= 80 ) {

        Swal.fire({
            position: 'bottom-end',
            icon: 'info',
            iconColor: '#98BF64',
            title: 'The attendance is above 80% it seems to be a good day to teach key information',
            showConfirmButton: false,
            timer: 2500,
            timerProgressBar: true,


          })
} else {
    Swal.fire({
      position: 'bottom-end',
      icon: 'info',
      iconColor:'#BC544B',
      title: 'The attendance is below 80% today consider replanning the lesson',
      showConfirmButton: false,
      timer: 2500,
      timerProgressBar: true,
    })

   }
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
