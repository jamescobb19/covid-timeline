# COVID-19 Timeline

A timeline of events following the COVID-19 outbreak, visualised as a horizontal timeline in JavaScript.
This uses the `react-horizontal-timeline` npm package.

## Data
The data contains events on particular dates categorised by a type which expresses the scope of the event.
Each event has a short description and a short title of less than 12 characters.
In addition to type categories, events can be labelled with secondary types which act as tags.

The data was created as a CSV file. As such, there is a script to convert from the original format into
 JSON which is then read by the timeline component.

## Running the app
The app can be run using `npm start` after installing the dependencies.
This will then serve a static React app running locally on port 3000.