require("dotenv").config();

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
    return isInRange(time);
  },

  /**
   * Check the time between 8 AM and 6 PM
   * @param {*} time
   * @returns
   */
  theRightTime: function (time) {
    return isInRange(time);
  },

  /**
   *
   * @returns
   */
  theRightDay: function () {
    return false;
  },
};

function isInRange(value) {
  var range = ["08:00", "18:00"];
  return value >= range[0] && value <= range[1];
}