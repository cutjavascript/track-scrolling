# Track Scrolling

A small library for tracking the scroll of the user in the browser and having a callback run on scroll percentages sent.

````js
/*
 * Log to the console whenever the document.body element
 * enters one of the defined percentages .
 */
TrackScrolling([20, 30, 60, 90], (percentageReached) => console.log("Percentage Scrolled:", percentageReached));


Table of Contents
-----------------

  * [Requirements](#requirements)
  * [Usage](#usage)


Requirements
------------
a normal npm package can be used with webpack.

Usage
-----

Track Scrolling is easiest to use when installed with [npm]:

```sh
npm install track-scrolling
````

Then you can import it
`import TrackScrolling from "track-scrolling";`

It takes following params

- `scrollDepths` an Array of depths you want to be tracked and have your callback called on.
- `callBack` the callback to be called when certain percentages are reached when scrolling.
- `returnError` a boolean to send if you want any error to be returned.
