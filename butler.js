require("dotenv").config();
// var request = require("request");

function openDoor(location, callback) {
  // var appId = 'aa0f1b0be45dca476178787f941c76dc'; // This is a managed key - I don't mind if you steal it ;)
  // var url = 'http://api.openweathermap.org/data/2.5/weather?q='+location+'&appid='+appId;
  // request({
  //     url: url,
  //     json: true
  // }, function (error, response, body) {
  //     if (!error && response.statusCode === 200) {
  //         callback(processResults(body));
  //     }
  // });
}

// function processResults(allResults){
//     return {
//         'minTemp'   : kelvinToCelcius(allResults.main.temp_min),    // Celsius
//         'maxTemp'   : kelvinToCelcius(allResults.main.temp_max),    // Celsius
//         'chanceRain': 0.83,                                         // 0 - 1 //TODO find new api
//         'rainFall'  : getRainFall(allResults.rain),                 // mm
//         'cloudCover': allResults.clouds.all                         // percentage
//     }
// }

// function kelvinToCelcius(kTemp){
//     return Math.round(kTemp - 273);
// }

// function getRainFall(rainObj){
//     if (!rainObj) return 0;
//     return (rainObj['1h'] || rainObj['2h'] || rainObj['3h'] || 0);
// }

exports.openDoor = openDoor;

module.exports.isThis = {
    /**
     * Parses the command text to check if it is the right command to open the door
     * @param {string} command Text message containing the command
     * @returns {boolean} True if it the command is parsed the right way
     */
    theRightCommand: function (command) {
      return command.indexOf("open the door") < 0 ? false : true;
    },
  
    /**
     *
     * @param {string} channel
     * @returns {boolean}
     */
    theRightChannel: function (channel) {
      return channel !== process.env.SLACK_STUTTGART_OFFICE_CHANNEL_ID
        ? false
        : true;
    },
  
    /**
     *
     * @param {*} time
     * @returns
     */
    theRightTiming: function (time) {
      return theRightTime(time);
    },
  
    /**
     * Check the time between 8 AM and 6 PM
     * @param {*} time
     * @returns
     */
    between8AmAnd6Pm: function (time) {
      return isInRange(time, eightAmAndSixPm);
    },
  
    /**
     *
     * @returns
     */
    theRightDay: function () {
      return false;
    },
  };
  
  function isInRange(value, eightAmAndSixPm) {
    return value >= eightAmAndSixPm[0] && value <= eightAmAndSixPm[1];
  }
  
  const eightAmAndSixPm = ["08:00", "18:00"];
