# Event Planner

This is a single page app to help you keep track of upcoming events. It also features a check the weather function to help you choose the outfit you'll be wearing at your events! 

This app was test driven using my own testing framework: [custom JS framework](https://github.com/AlinaGoaga/JS_testing_framework) 

The app is also online at: [event app](alinas_event_app.surge.sh)

![event app screenshot](https://github.com/AlinaGoaga/EventPlanner/blob/master/events%20app%20screenshot.jpeg)

## Supported features

- create new events with content, date and time (please note that you not create events in the past)
- see a list of all of the upcoming events in chronological order
- check the weather either by typing in the city that you are interested in or asking the browser to get your location and check the weather at that specific location 
- the events will persist on the page even after refreshing
- events occuring in the past will be hidden from the user however they can still be found in the browser's local storage if there's a need to review them

## How to use the app

- clone the repository and cd into the project
- run ```open index.html``` in the terminal 

## Running the tests

- run ```open SpecRunner.html``` in the terminal
- once the file opens in the browswer, hit inspect and use the console to see the tests


### Notes on development 

- an individual event page section has been created by hidding / making visible different divs: once clicked on, an individual event div is made visible whilst the main div holding all upcoming events is hidden
- this app uses Local Storage to store events; it doesn't support a delete feature at the moment, however the events can be directly removed from ```Local Storage (Inspect -> (at the top) Application -> (on the left hand side) Local Storage```
- bootstrap has been used to style the application (some of the styling happens in interface.js as the elements being style are not present on the page at all times)

