require("dotenv").config();
// var request = require("request");

function openDoor(location, callback) {
}

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
  theRightTiming: function (day, time) {
    return this.between8AmAnd5Pm(time) && this.theRightDay(day);
  },

  /**
   * Check the time between 8 AM and 6 PM
   * @param {*} time
   * @returns
   */
  between8AmAnd5Pm: function (time) {
    return isInRange(time, eightAmAndSixPm);
  },

  /**
   *
   * @returns
   */
  theRightDay: function (day) {
    return isInRange(day, weekDays);
  },
};

function isInRange(value, range) {
  return value >= range[0] && value <= range[range.length - 1];
}

const eightAmAndSixPm = ["08:00", "17:00"];
const weekDays = [1, 2, 3, 4, 5];
