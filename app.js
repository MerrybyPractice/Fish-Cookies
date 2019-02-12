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

//time - write in military time. When I print it, check if 12 has happened. If === 12, switch to pm, if 12 has appeared, append 12pm and subtract 12.

// cookie counter function

function cookie_counter(store) {

  for(var i = 6; i<20; i++){
    var CPH = Math.floor(store.CPH()*store.avg_cookie);
    store.customer_array.push(CPH);

    console.log(CPH);
  }
  console.log(store.customer_array);
}


var all_hours = '14';
console.log('hello world!!!');



//1st and Pike

var first_and_pike = {
  location: 'First and Pike',
  min_cust: '23',
  max_cust: '65',
  avg_cookie: '6.3',
  customer_array: [ ],
  CPH: function() {
    var min = Math.ceil(this.min_cust);
    var max = Math.floor(this.max_cust);
    return Math.floor(Math.random()*(max - min +1))+min;
  },
};




console.log('first and pike array '+cookie_counter(first_and_pike));



//SeaTac AirPort

var seatac = {
  location: 'SeaTac Airport',
  min_cust: '3',
  max_cust: '24',
  avg_cookie: '1.2',
  customer_array: [ ],
  CPH: function () {
    var min = Math.ceil(this.min_cust);
    var max = Math.floor(this.max_cust);
    return Math.floor(Math.random()*(max-min +1))+min;

  }
};

console.log(cookie_counter(seatac));

//Seattle Center

var sea_cen = {
  location: 'Seattle Center',
  min_cust: '11',
  max_cust: '38',
  avg_cookie: '3.7',
  customer_array: [],
  CPH: function (){
    var min = Math.ceil(this.min_cust);
    var max = Math.floor(this.max_cust);
    return Math.floor(Math.random()*(max-min))+min;
  }
};

console.log(cookie_counter(sea_cen));

//Capitol Hill

var cap_hill = {
  location: 'Capitol Hill',
  min_cust: '20',
  max_cust: '38',
  avg_cookie: '2.3',
  CPH: function (){
    var min = Math.ceil(this.min_cust);
    var max = Math.floor(this.max_cust);
    return Math.floor(Math.random()*(max-min))+min;
  }
};

console.log(cookie_counter(cap_hill));

//Alki

var alki = {
  location: 'Alki',
  min_cust: '2',
  max_cust: '16',
  avg_cookie: '4.6',
  alki_CPH: function() {
    var min = Math.ceil(this.min_cust);
    var max = Math.floor(this.max_cust);
    return Math.floor(Math.random()*(max-min))+min;
  }
};
console.log(cookie_counter(alki));
