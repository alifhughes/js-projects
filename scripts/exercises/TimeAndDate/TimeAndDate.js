/**
 * Time and date class containing the methods by exercise
 *
 * @returns {TimeAndDate}
 */
var TimeAndDate = function () {
    "use strict";
    return this;
};

/**
 * Log message.
 *
 * @param {string} message
 * @returns {console.log}
 */
TimeAndDate.prototype.log = function (message){
    return console.log(message);
};

/**
 * Get today's day and current time
 *
 *Sample Output : 
 * Today is : Friday. 
 * Current time is : 4 PM : 50 : 22
 *
 */
TimeAndDate.prototype.CurrentDayAndTime = function () {

    // Get day as an index (0-6) (Sunday-Saturday)
    var date = new Date();

    // Initialise array of days of the week
    var daysOfWeek = [
        'Sunday', 'Monday', 'Tuesday', 
        'Wednesday', 'Thursday', 'Friday', 'Saturday'
    ];

    this.log('Today is : ' + daysOfWeek[date.getDay()]);

    // Time identifer
    var timeIdentifiers = ['AM', 'PM'];

    // Get current hour, minutes and seconds
    var hour = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    // Check if past 12 o'clock
    if (hour > 12) {
        hour = hour - 12;
        hour = hour + ' ' + timeIdentifiers[1];
    } else {
        hour = hour + ' ' + timeIdentifiers[0];
    }

    this.log('Current time is : ' + hour + ' : ' + minutes + ' : ' + seconds);
};