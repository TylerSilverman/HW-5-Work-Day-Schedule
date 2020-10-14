// Function for setting the time

$(document).ready(function(){
    
var timeNow = moment().format('LLLL');
$("#date").text(timeNow);


var timeNow = moment().hour();

})

// clientInformation.getElementById(" ").innerHTML = text;

// function for the save button 

$('.saveBtn').on('click', function() {
   console.log('saveBtn clicked');

   var buttonClicked = $(this);
   console.log(buttonClicked);

});


//function for saving text 


//    // var textereaContent = button.parent().siblings('.textarea').find('.information').val();
//    // console.log(textereaContent);

// })
// console.log("schedule events in textbox");

// funtion for setting the color's based on the hours

// var hour = currentTimeNow;
// var hourPast = hourPast < currentTimeNow;
// var hourFuture = hourFuture < currentTimeNow;

// var hour = currentTimeNow;
//   console.log(hour)
//   console.log(currentTimeNow)

// $(".hour")

// $('#changeColor').click(function() {
//   console.log("color of the hour")
//   var backgroundColor = $(this);
//   console.log("color of the hour")
// })

// $('.description').each(function(){
//    var descriptionEl = $(this);
//    console.log(descriptionEl);

//    var hour = descriptionEl.parent().find(".hour").attr("data-hour");
//    console.log(hour);

// })

// // function ChangeBackgroundColor(backgroundColor) {
// //   document.body.style.background = color;
// function ChangeBackgroundColor (){
//    console.log(moment().hours());
// }
 
// }
// window.addEventListener("load",function() { changeBackground('.present', '.past', '.future') });

// $('#changeColorButton').click(function() {
//   var color = $('#changeColorSelect').val();
//   console.log(color)
  // $('body').css("background-color",color);
  // localStorage.setItem('background', color);