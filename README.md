Welcome to the Laserhub Butler Slack application. This is a private application used by Laserhub and it helps in plenty administrative topics.

## Getting started
- Clone the repo to your machine.
- Run `yarn install` to install all the libraries.
- Create a new Slack application to get your `SLACK_SIGNING_SECRET` and `SLACK_BOT_TOKEN`.
- Install the app to your workspace
- Enable the socket mode
- Get your `SLACK_APP_TOKEN`
- Create a `.env` file and add the following.

```
SLACK_SIGNING_SECRET="YOUR SIGNING SECRET"
SLACK_BOT_TOKEN="YOUR BOT TOKEN"
SLACK_APP_TOKEN="YOUR BOT TOKEN"
```

## To do list

- [ ] Add long description of the Laserhub Butler application
- [ ] Refactor code to add some unit tests (extract IFs to small functions)

## Some useful links
https://blog.logrocket.com/build-a-slackbot-in-node-js-with-slacks-bolt-api/
https://api.slack.com/bot-users#creating-bot-user

Application settings - https://api.slack.com/apps/A04P0N7B34G/general

Continue here -> https://slack.dev/bolt-js/tutorial/getting-started
https://api.slack.com/apps/A04P0N7B34G/slash-commands?
