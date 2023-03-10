const { App } = require("@slack/bolt");
require("dotenv").config();

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  socketMode: true,
  appToken: process.env.SLACK_APP_TOKEN,
  // logLevel: "debug",
});

app.event("app_mention", async ({ event, context, client, body, say }) => {
  try {
    var butler = require("./butler");

    if (!butler.isThis.theRightCommand(event.text)) {
      await say({
        // `<@${event.user}> I can't recognize that order. I am sorry! Want to try again? :pray:`
        text: `I can't recognize that order. I am sorry! Want to try again? :pray:`,
        thread_ts: event.ts,
      });
      return;
    }

    if (!butler.isThis.theRightChannel(event.channel)) {
      await say({
        // `<@${event.user}> wrong channel! :cry: I can only open the door in the #office-stuttgart channel.`
        text: `wrong channel! :cry: I can only open the door in the #office-stuttgart channel.`,
        thread_ts: event.ts,
      });
      return;
    }

    var moment = require("moment-timezone");

    // Get user who sent the message
    var userWhoSentMessage = await app.client.users.info({
      user: event.user,
    });

    // Current time
    var now = moment().utc();
    var userDate = now.tz(userWhoSentMessage.user.tz);

    console.log("the day is: " + userDate.isoWeekday());

    if (
      !butler.isThis.theRightTiming(
        userDate.isoWeekday(),
        userDate.format("HH:mm")
      )
    ) {
      await say({
        // `<@${event.user}> I am not allowed to open the door at this time :pray: I am sorry!.`
        text: `I am not allowed to open the door at this time :pray: I am sorry!`,
        thread_ts: event.ts,
      });
      return;
    }

    butler.openDoor();

    await say({
      // `<@${event.user}> I will open the door! Give me some seconds :run:`
      text: `I will open the door! Give me some seconds :run:`,
      thread_ts: event.ts,
    });
  } catch (error) {
    console.error(error);
  }
});

(async () => {
  const port = 3000;

  // Start the app
  await app.start(process.env.PORT || port);
  console.log(`?????? Slack Bolt app is running on port ${port}!`);
})();
