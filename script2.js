// variable for hoursPerDay
var time = [
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
        console.log('button clicked');
    });
});

// function for textbox info for each time to save when clicking save button 
$(document).ready(function(){
    $(".saveBtn").click(function(){
        var textInformation = $.trim($("#textInformation9am").val());
        if (textInformation !=""){
            console.log(textInformation);
        }
    });
    $(".saveBtn").click(function(){
        var textInformation = $.trim($("#textInformation10am").val());
        if (textInformation !=""){
            console.log(textInformation);
        }
    });
    $(".saveBtn").click(function(){
        var textInformation = $.trim($("#textInformation11am").val());
        if (textInformation !=""){
            console.log(textInformation);
        }
    });
    $(".saveBtn").click(function(){
        var textInformation = $.trim($("#textInformation12pm").val());
        if (textInformation !=""){
            console.log(textInformation);
        }
    });
    $(".saveBtn").click(function(){
        var textInformation = $.trim($("#textInformation1pm").val());
        if (textInformation !=""){
            console.log(textInformation);
        }
    });
    $(".saveBtn").click(function(){
        var textInformation = $.trim($("#textInformation2pm").val());
        if (textInformation !=""){
            console.log(textInformation);
        }
    });
    $(".saveBtn").click(function(){
        var textInformation = $.trim($("#textInformation3pm").val());
        if (textInformation !=""){
            console.log(textInformation);
        }
    });
    $(".saveBtn").click(function(){
        var textInformation = $.trim($("#textInformation4pm").val());
        if (textInformation !=""){
            console.log(textInformation);
        }
    });
    $(".saveBtn").click(function(){
        var textInformation = $.trim($("#textInformation5pm").val());
        if (textInformation !=""){
            console.log(textInformation);
        }
    });
});

//save to local storage and then get it from local storage 


//function for setting up background color in the textbox, also changed the time to militaryT:

// $(document).ready(function(){
// var currentMilitaryT = moment().hour();

// if (currentMilitaryT > time);
// else(.past);
// )};












