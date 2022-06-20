
//gets current time and displays current day for user. also changes time to military time to avoid AM/PM confusion.
var currentDay = document.getElementById("currentDay");
currentDay.textContent = moment().format('dddd MMMM Do');
currentTime = moment().format('HH')


//Loads users previous saves from local storage

$("#9 .task").val(localStorage.getItem("9"));
$("#10 .task").val(localStorage.getItem("10"));
$("#11 .task").val(localStorage.getItem("11"));
$("#12 .task").val(localStorage.getItem("12"));
$("#13 .task").val(localStorage.getItem("13"));
$("#14 .task").val(localStorage.getItem("14"));
$("#15 .task").val(localStorage.getItem("15"));
$("#16 .task").val(localStorage.getItem("16"));
$("#17 .task").val(localStorage.getItem("17"));


//When user clicks on save icon on page it saves their task to local storage
$(".saveBtn").on("click", function () {
    console.log("clicked");
    var time = $(this).siblings(".task").attr("id");
    var text = $(this).siblings(".task").val();

    localStorage.setItem(time, text);
})

//changes colors of .task class according to time in day
var timeColors = function() {
    $(".task").each(function() {
        var hourShift = parseInt($(this).attr("id"));
        console.log(hourShift)


        //if .task class time has already passed, changes .task class to grey
        if (hourShift < currentTime) {
            $(this).removeClass("present");
            $(this).removeClass("future");
            $(this).addClass("past");
            // console.log(this)
            
        }

        //if current time matches time of .task it changes colors to red
        else if (hourShift === currentTime) {
            $(this).removeClass("future");
            $(this).removeClass("past");
            $(this).addClass("present");
            // console.log(this)
        }

        //if time has not yet occured, .task class is set to green
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
            // console.log(this)
        }
    })
}

//runs timeColors function to appropriately change colors of .task class.
timeColors();