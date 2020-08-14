// GIVEN I am using a daily planner to create a schedule

// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar

// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours

// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future

// WHEN I click into a timeblock
// THEN I can enter an event

// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage

// WHEN I refresh the page
// THEN the saved events persist
//=======================================================================

// console.log(moment().format('LLLL'));


//====== sets current day + time  =============
$("#currentDay").text(moment().format('LLLL'));




//======   change background color dependent of current time   ============

// var currentTime = moment().format('LLLL');

// console.log(currentTime);
console.log(moment().format('LT'));
var currentTime = moment().hours();
// console.log(currentHour)


function changeBackground() {
    $(".timeBlock").each(function () {
        var blockTime = parseInt($(this).data('block'));
        console.log(blockTime)
        

        if (blockTime < currentTime) {
            $(this).find('.text-block').removeClass('present future').addClass('past');

        } else if (blockTime === currentTime) {
            $(this).find('.text-block').removeClass('past future').addClass('present');

        } else if (blockTime > currentTime) {
            $(this).find('.text-block').removeClass('past present').addClass('future');
        }
    });
};
changeBackground();




