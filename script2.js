// variable for hoursPerDay
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

 //function to set up the time 

 $(document).ready(function(){
    
    var timeNow = moment().format('LLLL');
    $("#date").text(timeNow);
    
    
    var timeNow = moment().hour();
    
});



