//variable for hoursPerDay
var hoursPerday = [
   {
      id: "hour9am",
      textInformation: "",
   },
   {
      id: "hour10am",
      textInformation: "",
   },
   {
      id: "hour11am",
      textInformation: "",
   },
   {
      id: "hour12pm",
      textInformation: "",
   },
   {
      id: "hour1pm",
      textInformation: "",
   },
   {
      id: "hour2pm",
      textInformation: "",
   },
   {
      id: "hour3pm",
      textInformation: "",
   },
   {
      id: "hour4pm",
      textInformation: "",
   },
   {
      id: "hour5pm",
      textInformation: "",
   },
]

// Function for setting the time

$(document).ready(function(){
    
var timeNow = moment().format('LLLL');
$("#date").text(timeNow);


var timeNow = moment().hour();

})

// function for the save button 

function textInformation () {
   localStorage.setItem("hoursPerDay", JSON.stringify(hoursPerday));
}

$('.saveBtn').on('click', function(event) {
   console.log('clicked Save Button');

   var buttonClicked = $(this).siblings(".description").children(".past", ".present", ".future").attr("id");
   console.log(textInformation);

   // textInformation[buttonClicked].localStorage = $(this).siblings(".description").children(".past", ".present", ".future").val ();
   // console.log(buttonClicked);

   textInformation();
   // displayInformation ();

});

// var buttonClicked = document.getElementById ('.hour9am');

// var textereaContent = buttonClicked.parent().siblings('.textarea').find('.information').val();

$('.texterea').on("click". function);


var curremtDayHour = JSON.parse(localStorage.getItem("hoursPerDay"));{
   if (curremtDayHour) {
      hoursPerday = curremtDayHour;
      // console.log("information saved per hour");
      // console.log("schedule events in textbox");
   }
};



//function for saving text 
// $(document).on('.saveBtn', 'texterea', function(event){
//    event.preventDefault();

//    var document = $(this).attr("saveBtn");
//    $.ajax ({
//       url: html,
//       type: 'POST',
//       dataType: 'JSON',
//       data: new FormData(this),
//       processData: true,
//       contentType: true,
//       success: function (data, status){
//          console.log("it works")
//       },
//       error: function (xhr,description, error){
//          console.log("error didnt work");
//       }
//    });
// });

// })

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