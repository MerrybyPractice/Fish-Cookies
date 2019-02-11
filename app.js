'use strict';
/*

User Stories (MVP)
As a user, I want a webpage that displays individual store data for my Salmon Cookie Shops, so that I can be informed about how to run my business
As a developer, I want to represent the store data in a list format on the webpage, so my client can view the information
As a developer, I want to use object-oriented programming to build this site, so that the site will be more effective and the code will be easier to read and understand

Technical Requirements


Good use of Object Literals (no constructors allowed today); one for each store model; properties/values and methods are correctly constructed and given meaningful names
Main page meets requirements of the problem domain
Use template literals in your JS logic to render the stores as lists on the sales page

User Stories (Stretch... only after completing everything above)
As a developer, I want to make some headway on the public-facing page for the business


*/

/* obj literals for each cookie stand
    each needs to: 
      store min/max hourly customers, average cookies per customer in object properties
      uses a method of that object to generate a random number of customers per hour
      calculate and store the simulated ammounts of cookies purchased for each hour location using average cookies purchased and the random number of cookies generated
      store the results for each location in a seperate array...perhaps as a property of the object representing that location
      display the values of each array as an unordered list in the browser
      display the sum of hourly tottlas in this format
        location
          time: number cookies

*/

//li/ul
//`template literals`

//each location is open from 6:00am-8:00pm
//variable min num cust per hour
//variable max num cust per hour
//variable num cookies purchased per cust

//1st and Pike

var first_and_pike = {
  location: 'First and Pike',
  min_cust: '23',
  max_cust: '65',
  avg_cookie: '6.3',
};

//SeaTac AirPort

var seatac = {
  location: 'SeaTac Airport',
  min_cust: '3',
  max_cust: '24',
  avg_cookie: '1.2',
};

//Seattle Center

var sea_cen = {
  location: 'Seattle Center',
  min_cust: '11',
  max_cust: '38',
  avg_cookie: '3.7',
};

//Capitol Hill

var cap_hill = {
  location: 'Capitol Hill',
  min_cust: '20',
  max_cust: '38',
  avg_cookie: '2.3',
};

//Alki

var alki = {
  location: 'Alki',
  min_cust: '2',
  max_cust: '16',
  avg_cookie: '4.6',
}
