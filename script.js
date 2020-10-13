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
//Saving in the text area 

// var buttonClicked = $('#information').val();

// localStorage.setItem("information", information);

// document.getElementById("results").innerHTML = localStorage.getItem = $ {text + information};

// $(".saveBtn").on("click", function(){

//   $("#textarea").text(buttonClicked);
// });

// function myFunction () {
//   var text = document.getElementById("information").value;
//   document.getElementById(" ").innerHTML = text;
// }