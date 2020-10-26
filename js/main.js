/* -------------------------------------------------------
   Function for getting weather information
   ------------------------------------------------------- */

function weatherBalloon() {
  var key = '8d5fa449e5bca69e687c4526702b7898';
  var lat = '38.907192';
  var lon = '-77.036873';
  fetch('https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&appid=' + key)  
  .then(function(resp) { return resp.json() }) // Convert data to json
  .then(function(data) {
    drawWeather(data);
    console.log(data);
  })
  .catch(function() {
    // catch any errors
  });
}


/* -------------------------------------------------------
   Function for display weather information
   ------------------------------------------------------- */
 
function drawWeather( d ) {

  // placeholder div for testing output
  // Current Day Display Info
  $('.current-temp').html( convertTemp(d.current.temp) );
  $('.zone').html(d.timezone);
  $('.current-day').html( displayDay(0) );
  $('.current-high').html( convertTemp(d.daily[0].temp.max) );
  $('.current-low').html(convertTemp(d.daily[0].temp.min) );
  //changeTheme(d.current.weather[0].description);

  //Second Day Display Info
  $('.Day1-day').html( displayDay(1) );
  $('.Day1-high').html( convertTemp(d.daily[1].temp.max) );
  $('.Day1-low').html(convertTemp(d.daily[1].temp.min) );
  $('.Day1 .icon').html(printGraphic(d.daily[1].weather[0].description) );
  // changeTheme(d.current.weather[1].description);

  //Third Day Display Info
  $('.Day2-day').html( displayDay(2) );
  $('.Day2-high').html( convertTemp(d.daily[2].temp.max) );
  $('.Day2-low').html(convertTemp(d.daily[2].temp.min) );
  $('.Day2 .icon').html(printGraphic(d.daily[2].weather[0].description) );

  //Fourth Day Display Info
  $('.Day3-day').html( displayDay(3) );
  $('.Day3-high').html( convertTemp(d.daily[3].temp.max) );
  $('.Day3-low').html(convertTemp(d.daily[3].temp.min) );
  $('.Day3 .icon').html(printGraphic(d.daily[3].weather[0].description) );

  //Fifth Day Display Info
  $('.Day4-day').html( displayDay(4) );
  $('.Day4-high').html( convertTemp(d.daily[4].temp.max) );
  $('.Day4-low').html(convertTemp(d.daily[4].temp.min) );
  $('.Day4 .icon').html(printGraphic(d.daily[4].weather[0].description) );

  //Sixth Day Display Info
  $('.Day5-day').html( displayDay(5) );
  $('.Day5-high').html( convertTemp(d.daily[5].temp.max) );
  $('.Day5-low').html(convertTemp(d.daily[5].temp.min) );
  $('.Day5 .icon').html(printGraphic(d.daily[5].weather[0].description) );

  //Seventh Day Display Info
  $('.Day6-day').html( displayDay(6) );
  $('.Day6-high').html( convertTemp(d.daily[6].temp.max) );
  $('.Day6-low').html(convertTemp(d.daily[6].temp.min) );
  $('.Day6 .icon').html(printGraphic(d.daily[6].weather[0].description) );
}


/* -------------------------------------------------------
   Function for printing weather-specific class on body
   ------------------------------------------------------- */

/*function changeTheme(d){
  // if the description includes the word "cold"
  else if( d.indexOf('cold') > 0 ) {
    $('body').addClass('Definitely cold today, go for the coat.');
  // if the description includes the word "rain"
  else if( d.indexOf('rain') > 0 ) {
    $('body').addClass('Looking a little rainy out there, make sure to wear a jacket.');
  // if the description includes the word "cloud"
  } else if( d.indexOf('cloud') > 0 ) {
    $('body').addClass('Pretty cloudy today, better grab a hoodie');
  // if the description includes the word "sunny"
  } else if( d.indexOf('sunny') > 0 ) {
    $('body').addClass('Sunshine so devine, just wear a t-shirt.');
  // if none of those cases are true, assume it's clear
  } else {
    $('body').addClass('clear');
  }
}


/* -----------------------------------------------
   Function for printing weather-specific graphic
   ----------------------------------------------- */

function printGraphic(d){
  // if the description includes the word "rain"
  if( d.indexOf('rain') > 0 ) {
    return '<img src="img/svg/ON_P2_rainjacket-02.svg" alt="Rain Jacket">';
  // if the description includes the word "cloud"
  } else if( d.indexOf('cloud') > 0 ) {
    return '<img src="img/svg/ON_P2_Hoodie-02.svg" alt="Hoodie">';
  // if the description includes the word "sunny"
  } else if( d.indexOf('sunny') > 0 ) {
    return '<img src="img/svg/ON_P2_sun-02.svg" alt="T-Shirt">';
  // if the description includes the word "cold"
  } else if( d.indexOf('cold') > 0 ) {
    return '<img src="img/svg/ON_p2_wintercoat-02.svg" alt="Winter Coat">';
  }
}


/* -----------------------------------------------
   Function for converting time to hours/minutes
   DO NOT EDIT
   ----------------------------------------------- */

function convertTime(t){

  var unixTimestamp = t;
  // since javascript works in milliseconds, you should convert 
  // the time into milliseconds by multiplying it by 1000.
  var date = new Date(unixTimestamp * 1000);
  // hours part from the timestamp (extra code needed to convert from military)
  var hours = (date.getHours() + 24) % 12 || 12;;
  // minutes part from the timestamp
  var minutes = "0" + date.getMinutes();
  // seconds part from the timestamp
  var seconds = "0" + date.getSeconds();
  // will display time in 11:10 format
  var formatTime = hours + ':' + minutes.substr(-2);
  // send formatted date back
  return formatTime;

}


/* -----------------------------------------------
   Function for converting temp to fahrenheit
   DO NOT EDIT
   ----------------------------------------------- */

function convertTemp(t){

  return Math.round(((parseFloat(t)-273.15)*1.8)+32);

}


/* -----------------------------------------------
   Function for creating day of the week
   EDIT FORMAT OF DAY NAMES ONLY ("Monday", etc)
   ----------------------------------------------- */

// based on a system where 0 = today, 1 = tomorrow, etc.
// note: the number system below does not immediately correlate
// for example, 0 for today does not line up with 0 for Sunday below
// how this works – in the return statement, d.getDay() gets today's date
// as a number (if today is Thursday, d.getDay() will be 4)
// adding "n" to this number gives you how many days from today.
// n is passed as an argument to the displayDay() function
// in the main body of the code above.
// if today is Thursday, the 4th day of the week,
// and the number 2 is passed as an argument, 
// the function will return the number 6. 6 maps to Saturday in the 
// weekday array below.

function displayDay(n){

  var d = new Date();
  var weekday = new Array();

  weekday[0] = "Sun";
  weekday[1] = "Mon";
  weekday[2] = "Tues";
  weekday[3] = "Wed";
  weekday[4] = "Thurs";
  weekday[5] = "Fri";
  weekday[6] = "Sat";

  var dispDay = d.getDay() + n;

  // adjust number system for numbers over 6
  // subtract 7 from totals higher than 6
  // to keep the day numbers in the array range above
  if(dispDay > 6){
    dispDay = dispDay - 7;
  }

  return weekday[ dispDay ];

}

/* --------------------------------------------------
   Event to get weather information when page loads
   -------------------------------------------------- */

window.onload = function() {
  weatherBalloon();
}