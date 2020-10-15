//variable for hoursPerDay
var hoursPerday = [
   {
      id: "hour9am",
      textInformation: "",
   },
   {
      id: "hour10am",
      textInformation: "",
      time: "10am",
   },
   {
      id: "hour11am",
      textInformation: "",
      time: "11am",
   },
   {
      id: "hour12pm",
      textInformation: "",
      time: "12pm",
   },
   {
      id: "hour1pm",
      textInformation: "",
      time: "1pm",
   },
   {
      id: "hour2pm",
      textInformation: "",
      time: "2pm",
   },
   {
      id: "hour3pm",
      textInformation: "",
      time: "3pm",
   },
   {
      id: "hour4pm",
      textInformation: "",
      time: "4pm",
   },
   {
      id: "hour5pm",
      textInformation: "",
      time: "5pm",
   },
]

// Function for setting the time

$(document).ready(function(){
    
var timeNow = moment().format('LLLL');
$("#date").text(timeNow);


var timeNow = moment().hour();

})

// function for the save data

function dataSaved () {
   localStorage.setItem("hoursPerDay", JSON.stringify(hoursPerday));
}

//function for save button 

init ();

//function to show save data

function displayDataSavedInformation() {
   console.log(localStorage);
};

$('.saveBtn').on('click', function(event) {
   event.preventDefault ();

   var textereaContent = $(this).siblings(".description").children(".hour").attr("id");

   textereaContent[buttonClicked].parent = $(this).siblings(".description").children(".hour").val ();
   console.log(buttonClicked);

   dataSaved();
   displayDataSavedInformation ();
});

  

// var buttonClicked = document.getElementById ('.hour9am');
 // console.log(textInformation);

// var textereaContent = buttonClicked.parent().siblings('.textarea').find('.information').val();

$('.texterea').on("click". function);

var curremtDayHour = JSON.parse(localStorage.getItem("hoursPerDay"));{
   if (curremtDayHour) {
      hoursPerday = curremtDayHour;
      console.log(dataSaved);
   }
};

//function for saving text 

function init () {
   var curremtDayHour = JSON.parse(localStorage.getItem("hoursPerDay"));

   if (curremtDayHour) {
      hoursPerDay = curremtDayHour;
   }
   dataSaved();
   displayDataSavedInformation ();

};
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

// $('#changeColorButton').click(function() {
//   var color = $('#changeColorSelect').val();
//   console.log(color)
//   $('body').css("background-color",color);
//   localStorage.setItem('background', color);
// });