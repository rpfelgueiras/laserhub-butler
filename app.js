const { App } = require("@slack/bolt");
require("dotenv").config();
const { moment } = require("moment-timezone");

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  socketMode: true,
  appToken: process.env.SLACK_APP_TOKEN,
  logLevel: "debug",
});

app.message(/^(hi|hello|hey).*/, async ({ context, say }) => {
  // RegExp matches are inside of context.matches
  const greeting = context.matches[0];

  await say(`${greeting}, how are you?`);
});

// This will match any message that contains 👋
app.message(":wave:", async ({ message, say }) => {
  await say(`Hello, <@${message.user}>`);
});

app.message("/^(open the door).*/", async ({ message, say }) => {
  // await say(`Door, <@${message.user}>`);
  console.log(message);

  // call remote door opener

  // return success or not :)
});

app.event("app_mention", async ({ event, context, client, body, say }) => {
  try {
    if (event.text.indexOf("open the door") < 0) {
      await say(
        `<@${event.user}> I can't recognize that order. I am sorry! Want to try again? :pray:`
      );
      return;
    }

    if (event.channel !== process.env.SLACK_STUTTGART_OFFICE_CHANNEL_ID) {
      await say(
        `<@${event.user}> wrong channel! :cry: I can only open the door in the #office-stuttgart channel.`
      );
      return;
    }

    // Get user who sent the message
    var userWhoSentMessage = await app.client.users.info({
      user: event.user,
    });

    // Current time
    var now = moment().utc();
    var userDate = now.tz(userWhoSentMessage.user.tz).toDate();

    // Check the time between 8 AM and 6 PM
    var inRange = isInRange(userDate.getTime(), range);
    if (!inRange) {
      await say(
        `<@${event.user}> I am not allowed to open the door at this time :pray: I am sorry!.`
      );
      return;
    }

    // Check if weekday

    await say(
      `<@${event.user}> I will open the door! Give me some seconds :run:`
    );

    // await say({
    //   blocks: [
    //     {
    //       type: "section",
    //       text: {
    //         type: "mrkdwn",
    //         text: `Thanks for the mention <@${event.user}>! Here's a button`,
    //       },
    //       accessory: {
    //         type: "button",
    //         text: {
    //           type: "plain_text",
    //           text: "Button",
    //           emoji: true,
    //         },
    //         value: "click_me_123",
    //         action_id: "first_button",
    //       },
    //     },
    //   ],
    // });
  } catch (error) {
    console.error(error);
  }
});

(async () => {
  const port = 3000;

  // Start your app
  await app.start(process.env.PORT || port);
  console.log(`⚡️ Slack Bolt app is running on port ${port}!`);
})();

var range = ["08:00", "22:00"];

function isInRange(value, range) {
  return value >= range[0] && value <= range[1];
}

// ["04:59", "08:30", "23:15"].forEach(function (time) {
//   console.log(
//     time + " is " + (isInRange(time, range) ? " " : "not ") + "in range"
//   );
// });

// // Alternatively
// ["04:59", "23:15", "08:30"].forEach(function (time) {
//   var inRange = isInRange(time, range);
//   console.log(
//     time +
//       " is in range " +
//       (inRange ? range : range.slice().reverse()).join(" - ")
//   );
// });



