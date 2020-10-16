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

// function for textbox info for each time to save when clicking save button and also the function to remove the text and console.log the information
$(document).ready(function(){
    $(".saveBtn").click(function(){
        var textInformation9am = $.trim($("#textInformation9am").val());
        if (textInformation9am !=""){
            console.log(textInformation9am);
        } 
        $("#textInformation9am").val("");
    });
    $(".saveBtn").click(function(){
        var textInformation10am = $.trim($("#textInformation10am").val());
        if (textInformation10am !=""){
            console.log(textInformation10am);
        } 
        $("#textInformation10am").val(""); 
    });
    $(".saveBtn").click(function(){
        var textInformation11am = $.trim($("#textInformation11am").val());
        if (textInformation11am !=""){
            console.log(textInformation11am);
        }
        $("#textInformation11am").val("");
    });
    $(".saveBtn").click(function(){
        var textInformation12pm = $.trim($("#textInformation12pm").val());
        if (textInformation12pm !=""){
            console.log(textInformation12pm);
        }
        $("#textInformation12pm").val("");
    });
    $(".saveBtn").click(function(){
        var textInformation1pm = $.trim($("#textInformation1pm").val());
        if (textInformation1pm !=""){
            console.log(textInformation1pm);
        }
        $("#textInformation1pm").val("");
    });
    $(".saveBtn").click(function(){
        var textInformation2pm = $.trim($("#textInformation2pm").val());
        if (textInformation2pm !=""){
            console.log(textInformation2pm);
        }
        $("#textInformation2pm").val("");
    });
    $(".saveBtn").click(function(){
        var textInformation3pm = $.trim($("#textInformation3pm").val());
        if (textInformation3pm !=""){
            console.log(textInformation3pm);
        }
        $("#textInformation3pm").val("");
    });
    $(".saveBtn").click(function(){
        var textInformation4pm = $.trim($("#textInformation4pm").val());
        if (textInformation4pm !=""){
            console.log(textInformation4pm);
        }
        $("#textInformation4pm").val("");
    });
    $(".saveBtn").click(function(){
        var textInformation5pm = $.trim($("#textInformation5pm").val());
        if (textInformation5pm !=""){
            console.log(textInformation5pm);
        };
        $("#textInformation5pm").val("");
    });
});

//save to local storage and then get it from local storage
    $('#hour9am').click(function(){
        var textInformation9am = $("#textInformation9am").val();

        document.getElementById("textInformation9am").innerHTML = localStorage;;

        console.log("events are saved, correctly!");
    });
    $('#hour10am').click(function(){
        var textInformation = $("#textInformation10am").val();

        document.getElementById("textInformation10am").innerHTML = localStorage;;

        console.log("events are saved, correctly!");
    });

    // trying another funtion to savelocal storage inside the HTML 

    // $('#hour9am').click(function(){
    //     var textInformation = $("#textInformation9am").val();

    //     document.getElementById("textInformation9am").innerHTML = localStorage;;

    //     console.log("events are saved, correctly!");
    // });


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
        }else if (militaryT === timeNow) {
            $('document').addClass('.hour','.presemt');
        } else {
            $('document').addClass('.hour','.future');
        };
    });
};











