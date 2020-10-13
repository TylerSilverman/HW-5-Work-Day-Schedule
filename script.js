// Function for setting the time

$(document).ready(function(){
    
var timeNow = moment().format('LLLL');
$("#date").text(timeNow);


var timeNow = moment().hour();

})
// function for the save button 

$('.saveBtn').on('click', function() {
   console.log('save button clicked');

   var buttonClicked = $(this);
   console.log(buttonClicked);

});
// funtion for storing the save information 

// var information = localStorage.getItem("storedItem");

// function buttonClicked(){

//   var information = document.getElementById("input").value;

//   localStorage.setItem("storedItem", information);
//   document.getElementById("saveText").innerHTML = item + " save";
// }