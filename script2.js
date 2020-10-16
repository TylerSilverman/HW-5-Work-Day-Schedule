// variable for hoursPerDay
var hoursPerDay = [
    {
       id: "hour9am",
       militaryT: "09",
       textInformation: "",
       time:"9am",
    },
    {
       id: "hour10am",
       militaryT: "10",
       textInformation: "",
       time: "10am",
    },
    {
       id: "hour11am",
       militaryT: "11",
       textInformation: "",
       time: "11am",
    },
    {
       id: "hour12pm",
       militaryT: "12",
       textInformation: "",
       time: "12pm",
    },
    {
       id: "hour1pm",
       militaryT: "13",
       textInformation: "",
       time: "1pm",
    },
    {
       id: "hour2pm",
       militaryT: "14",
       textInformation: "",
       time: "2pm",
    },
    {
       id: "hour3pm",
       militaryT: "15",
       textInformation: "",
       time: "3pm",
    },
    {
       id: "hour4pm",
       militaryT: "16",
       textInformation: "",
       time: "4pm",
    },
    {
       id: "hour5pm",
       militaryT: "17",
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

// function to set up save button 
$(document).ready(function(){
    $(".saveBtn").click(function(){
        // console.log("save button cliked");
    });
});

//save to local storage and then get it from local storage // function for textbox info for each time to save when clicking save button and also the function to remove the text and console.log the information
$(document).ready(function(){
    $('#hour9am').click(function(){
        var textInformation9am = $("#textInformation9am").val();
        document.getElementById("textInformation9am").innerHTML = localStorage;;
        console.log(textInformation9am + " " + "Events are saved!");
        $("#textInformation9am").val("");
    });
    $('#hour10am').click(function(){
        var textInformation10am = $("#textInformation10am").val();
        document.getElementById("textInformation10am").innerHTML = localStorage;;
        console.log(textInformation10am + " " + "events are saved!");
        $("#textInformation10am").val("");
    });
    $('#hour11am').click(function(){
        var textInformation11am = $("#textInformation11am").val();
        document.getElementById("textInformation11am").innerHTML = localStorage;;
        console.log(textInformation11am + " " + "Events are saved!");
        $("#textInformation11am").val("");
    });
    $('#hour12pm').click(function(){
        var textInformation12pm = $("#textInformation12pm").val();
        document.getElementById("textInformation12pm").innerHTML = localStorage;;
        console.log(textInformation12pm + " " + "events are saved!");
        $("#textInformation12pm").val("");
    });
    $('#hour1pm').click(function(){
        var textInformation1pm = $("#textInformation1pm").val();
        document.getElementById("textInformation1pm").innerHTML = localStorage;;
        console.log(textInformation1pm + " " + "Events are saved!");
        $("#textInformation1pm").val("");
    });
    $('#hour2pm').click(function(){
        var textInformation2pm = $("#textInformation2pm").val();
        document.getElementById("textInformation2pm").innerHTML = localStorage;;
        console.log(textInformation2pm + " " + "events are saved!");
        $("#textInformation2pm").val("");
    });
    $('#hour3pm').click(function(){
        var textInformation3pm = $("#textInformation3pm").val();
        document.getElementById("textInformation3pm").innerHTML = localStorage;;
        console.log(textInformation3pm + " " + "Events are saved!");
        $("#textInformation3pm").val("");
    });
    $('#hour4pm').click(function(){
        var textInformation4pm = $("#textInformation4pm").val();
        document.getElementById("textInformation4pm").innerHTML = localStorage;;
        console.log(textInformation4pm + " " + "events are saved!");
        $("#textInformation4pm").val("");
    });
    $('#hour5pm').click(function(){
        var textInformation5pm = $("#textInformation5pm").val();
        document.getElementById("textInformation5pm").innerHTML = localStorage;;
        console.log(textInformation5pm + " " + "events are saved!");
        $("#textInformation5pm").val("");
    });
});
//function for setting up background color in the textbox, also changed the time to militaryT:
$(document).ready(function(){
    
    var timeNow = moment().hour();
    $("#time-block").text(timeNow);

    var timeNow = moment().hour();  
});

// var hoursPerDay:[
// {militaryT:09},{militaryT:10},{militaryT:11},{militaryT:12},{militaryT:13},{militaryT:14},{militaryT:15},{militaryT:16},{militaryT:17},
// ];


function checkTime () {
    timeNow = moment().hour();
    hoursPerDay.forEach(function (){

        if (militaryT < timeNow){
            $('.document').addClass('.hour','.past');
        }else if (militaryT === timeNow){
            $('document').addClass('.hour','.presemt');
        } else {
            $('document').addClass('.hour','.future');
        };
    });
};











