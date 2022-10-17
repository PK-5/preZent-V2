
//Attendance Present, Absent, Late buttons

//Defining the variables p1,p2,p3,p4 and p5 as 0

let p1 = 0;
let p2 = 0;
let p3 = 0;
let p4 = 0;
let p5 = 0;


// Student 1 - defining variables present1, absent1 and late1 with their corresponding classes "#present1" etc.
let present1 = document.querySelector("#present1") 
let absent1 = document.querySelector("#absent1")
let late1 = document.querySelector("#late1")

//creating a function that changes the colour of the buttons when pfunction1 is carried out and sets p1 as 1
function pFunction1(){
    present1.style.background = ("#98BF64")
    absent1.style.background = ("#EFEFEF")
    late1.style.background = ("#EFEFEF")

    p1 = 1;
}

//creating a function that changes the colour of the buttons when afunction1 is carried out and sets p1 as 0
function aFunction1(){
    absent1.style.background = ("#BC544B")
    present1.style.background = ("#EFEFEF")
    late1.style.background = ("#EFEFEF")

    p1 = 0 ;  
}

//creating a function that changes the colour of the buttons when lfunction1 is carried out and sets p1 as 1
function lFunction1(){
   late1.style.background = ("#ED820E")
   absent1.style.background = ("#EFEFEF")
   present1.style.background = ("#EFEFEF")

   p1 = 1 ;
}


// Student 2 - defining variables present2, absent2 and late2 with their corresponding classes "#present2" etc.

let present2 = document.querySelector("#present2")
let absent2 = document.querySelector("#absent2")
let late2 = document.querySelector("#late2")

//creating a function that changes the colour of the buttons when pfunction2 is carried out and sets p2 as 1
function pFunction2(){
    present2.style.background = ("#98BF64")
    absent2.style.background = ("#EFEFEF")
    late2.style.background = ("#EFEFEF")

    p2 = 1;
}

//creating a function that changes the colour of the buttons when afunction2 is carried out and sets p2 as 0
function aFunction2(){
    absent2.style.background = ("#BC544B")
    present2.style.background = ("#EFEFEF")
    late2.style.background = ("#EFEFEF")

     p2 = 0;
}

//creating a function that changes the colour of the buttons when lfunction2 is carried out and sets p2 as 1
function lFunction2(){
    late2.style.background = ("#ED820E")
    absent2.style.background = ("#EFEFEF")
    present2.style.background = ("#EFEFEF")

     p2 = 1;   
}

// Student 3 - defining variables present3, absent3 and late3 with their corresponding classes "#present3" etc.

let present3 = document.querySelector("#present3")
let absent3 = document.querySelector("#absent3")
let late3 = document.querySelector("#late3")

//creating a function that changes the colour of the buttons when pfunction3 is carried out and sets p3 as 1
function pFunction3(){
    present3.style.background = ("#98BF64")
    absent3.style.background = ("#EFEFEF")
    late3.style.background = ("#EFEFEF")

    p3 = 1;

}

//creating a function that changes the colour of the buttons when afunction3 is carried out and sets p3 as 0
function aFunction3(){
    absent3.style.background = ("#BC544B") 
    present3.style.background = ("#EFEFEF")
    late3.style.background = ("#EFEFEF")

    p3 = 0;

}

//creating a function that changes the colour of the buttons when lfunction3 is carried out and sets p3 as 1
function lFunction3(){
    late3.style.background = ("#ED820E")
    absent3.style.background = ("#EFEFEF")
    present3.style.background = ("#EFEFEF")

    p3 = 1;
}

// Student 4 - defining variables present4, absent4 and late4 with their corresponding classes "#present4" etc.

let present4 = document.querySelector("#present4")
let absent4 = document.querySelector("#absent4")
let late4 = document.querySelector("#late4")


//creating a function that changes the colour of the buttons when pfunction4 is carried out and sets p4 as 1
function pFunction4(){
    present4.style.background = ("#98BF64")
    absent4.style.background = ("#EFEFEF")
    late4.style.background = ("#EFEFEF")

    p4 = 1;
}

//creating a function that changes the colour of the buttons when afunction4 is carried out and sets p4 as 0
function aFunction4(){
    absent4.style.background = ("#BC544B")
    present4.style.background = ("#EFEFEF")
    late4.style.background = ("#EFEFEF")

    p4 = 0;
}

//creating a function that changes the colour of the buttons when lfunction4 is carried out and sets p4 as 1
function lFunction4(){
    late4.style.background = ("#ED820E")
    absent4.style.background = ("#EFEFEF")
    present4.style.background = ("#EFEFEF")

    p4 = 1;
}

// Student 5 - defining variables present4, absent4 and late4 with their corresponding classes "#present4" etc.

let present5 = document.querySelector("#present5")
let absent5 = document.querySelector("#absent5")
let late5 = document.querySelector("#late5")

//creating a function that changes the colour of the buttons when pfunction5 is carried out and sets p5 as 1
function pFunction5(){
    present5.style.background = ("#98BF64")
    absent5.style.background = ("#EFEFEF")
    late5.style.background = ("#EFEFEF")

    p5 = 1;
}

//creating a function that changes the colour of the buttons when afunction5 is carried out and sets p5 as 0
function aFunction5(){
    absent5.style.background = ("#BC544B")
    present5.style.background = ("#EFEFEF")
    late5.style.background = ("#EFEFEF")

    p5 = 0;   
}

//creating a function that changes the colour of the buttons when lfunction5 is carried out and sets p5 as 1
function lFunction5(){
    late5.style.background = ("#ED820E")
    absent5.style.background = ("#EFEFEF")
    present5.style.background = ("#EFEFEF")

    p5 = 1;   
}

//Total students

var table = document.querySelector("#Attendance");//defining table as the attendance table 
var tableLength = table.rows.length; //calculating the total number of rows

//calculates the total percentage of students in a class 
function totalFunction(){

    var Present = p1 + p2 + p3 + p4 + p5; //adding the varaibles that were set in the previous function to calculate the total number of students present in class
    var total = tableLength + -4; // calculating the total number of rows with student information = total students in a class
    var presentPercentage = (Present/total) * 100 // calculating the percentage of students present in class
    
   // making an if and else statment so that if the total percentage of students present in greater than or eqaul to 80% an alert -
   // - pops up and if the total percentage of students is lower than 80% a different alert pops up
    if (presentPercentage >= 80 ) { //setting a condition 

        //using external library to create alert 
        
        Swal.fire({ 
            position: 'bottom-end', // location of alert
            icon: 'info', //icon on alert
            iconColor: '#98BF64', // colour of the icon
            title: 'The attendance is 80% or above it seems to be a good day to teach key information', //text displayed
            showConfirmButton: false, //hiding the confirm button
            timer: 2500, //setting a timer for the alert to disapear in 
            timerProgressBar: true, //making a time progress bar visible 


          })
} else {
    Swal.fire({
      position: 'bottom-end', //location of alert
      icon: 'info', // icon on alert
      iconColor:'#BC544B', // colour of the icon
      title: 'The attendance is below 80% today consider replanning the lesson', //text displayed
      showConfirmButton: false, //hiding the confirm button
      timer: 2500, //setting a timer for the alret to disapper in
      timerProgressBar: true, //making a time progress bar visible
    })

   }
}
 


