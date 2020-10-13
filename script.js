$(document).ready(function(){
    
var timeNow = moment().format('LLLL');
$("#date").text(timeNow);


var timeNow = moment().hour();

})


$('.saveBtn').on('click', function() {
   console.log('save button clicked');

   var buttonClicked = $(this);
   console.log(buttonClicked);

});
