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
- [x] Refactor code to add some unit tests (extract IFs to small functions)
- [ ] Add image to the Slack bot
- [ ] Add code coverage "snippet" to GitHub
- [ ] Where to host this bot?


## Some useful links
https://blog.logrocket.com/build-a-slackbot-in-node-js-with-slacks-bolt-api/
https://api.slack.com/bot-users#creating-bot-user

Application settings - https://api.slack.com/apps/A04P0N7B34G/general

Continue here -> https://slack.dev/bolt-js/tutorial/getting-started
https://api.slack.com/apps/A04P0N7B34G/slash-commands?


Refactor Javascript code
https://github.com/Lissy93/quick-example-of-testing-in-nodejs
https://gomytech.gomycode.co/en/node-js-design-patterns-module-definitions-patterns/

Arduino
Servo Motor - https://docs.arduino.cc/learn/electronics/servo-motors - check the code
Servo Motor Control Tutorial - https://www.allaboutcircuits.com/projects/servo-motor-control-with-an-arduino/ - check the schematics
https://www.the-diy-life.com/how-long-can-an-arduino-run-on-batteries-i-tested-6-of-the-most-common-boards/ -> Batteries in Arduino

## Setup the Arduino wifi - instructions

Check the schematics image here - https://content.instructables.com/FM4/OR4D/J4OFOI58/FM4OR4DJ4OFOI58.png?auto=webp&frame=1&width=494&fit=bounds&md=99f30ed5301e420dcf5e62a1a379222e

Wifi module - what ports are what? https://cb-electronics.com/products/esp8266-esp-01/

Follow this tutorial - https://www.deviceplus.com/arduino/how-to-connect-your-arduino-to-wi-fi/ - and check the AT commands
**Note**: before connection to the wifi network check the following error - https://bbs.espressif.com/viewtopic.php?t=3074 - It is mandatory to execute the command ```AT+CWMODE=1``` before connecting

HTML response via AT commands - https://www.youtube.com/watch?v=01BtAGrSJmc&t=68s&ab_channel=MichaelSSimarmata

## Useful links

https://www.instructables.com/ServDuino-Arduino-Webserver/ -> HTTP Server in the Arduino
https://randomnerdtutorials.com/esp32-web-server-arduino-ide/ -> HTML page in the Arduino
https://www.electronicwings.com/arduino/esp8266-wifi-module-interfacing-with-arduino-uno -> wifi and Arduino
https://www.deviceplus.com/arduino/how-to-connect-your-arduino-to-wi-fi/
https://microcontrollerelectronics.com/esp8266-wi-fi-module-revisited/
https://www.esp8266.com/viewforum.php?f=26&start=10

https://tttapa.github.io/ESP8266/Chap04%20-%20Microcontroller.html
https://arduino-esp8266.readthedocs.io/en/latest/esp8266wifi/readme.html
https://acoptex.com/project/290/basics-project-021a-how-to-upload-sketch-esp8266-esp-01-wi-fi-module-at-acoptexcom/