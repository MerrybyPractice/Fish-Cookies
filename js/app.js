'use strict';
/*

User Stories (MVP)
Priotity 2: A table to show the total amount of projected cookie needs at each location, with the table displaying the cookie stand location, the total number of cookies needed for each location, an hourly breakdown of total cookies sales for each location, and a footer row of totals for each column.
Priority 1: As a developer, I want to implement a constructor function, so that I can reuse code and eliminate much of the duplication in my JavaScript
Technical Requirements (MVP)
Good use of a constructor function; style and syntax are correctly implemented
Each cookie stand location should have a separate render() method that creates and appends its row to the table
The header row and footer row are each created in their own stand-alone function
Duplicate code has been removed and DRY principles are evident
Working on a non-master branch for the day, with regular commit history. Basically, every time you get something to work, you should do a commit. But you only need to push every couple of hours or so, tops
=========================================================================================================================================
*/


/*
// helper funcitons
//var _random = function(min, max){

//}
// constructor functions

var Store = function(store_location, store_open, store_closed, min_cust, max_cust, avg_cookie){
this.store_location = store_location;
this.store_open = store_open;
this.store_closed = store_closed;
this.min_cust = min_cust;
this.max_cust = max_cust;
this.avg_cookie = avg_cookie;


// }

// ============================
*/


// cookie counter function

// function cookie_counter(store) {

//   for(var i = 6; i<21; i++){
//     var cph = Math.floor(store.cph()*store.avg_cookie);
//     store.customer_array.push(cph);

//   }
// }

// function cookie_sum(store){
// }

//1st and Pike

var first_and_pike = {
  store_location: 'First and Pike',
  store_open: 6,
  store_closed: 20,
  min_cust: '23',
  max_cust: '65',
  avg_cookie: '6.3',
  customer_array: [ ],
  cph: function() {
    var min = Math.ceil(this.min_cust);
    var max = Math.floor(this.max_cust);
    return Math.floor(Math.random()*(max - min +1))+min;

  },
  //cah:
};
//SeaTac AirPort

var seatac = {
  store_location: 'SeaTac Airport',
  store_open: 6,
  store_closed: 20,
  min_cust: '3',
  max_cust: '24',
  avg_cookie: '1.2',
  customer_array: [ ],
  cph: function () {
    var min = Math.ceil(this.min_cust);
    var max = Math.floor(this.max_cust);
    return Math.floor(Math.random()*(max-min +1))+min;
  }
  //cah:
};
//Seattle Center

var sea_cen = {
  store_location: 'Seattle Center',
  store_open: 6,
  store_closed: 20,
  min_cust: '11',
  max_cust: '38',
  avg_cookie: '3.7',
  customer_array: [],
  cph: function (){
    var min = Math.ceil(this.min_cust);
    var max = Math.floor(this.max_cust);
    return Math.floor(Math.random()*(max-min))+min;
  }
  //cah:
};
//Capitol Hill

var cap_hill = {
  store_location: 'Capitol Hill',
  store_open: 6,
  store_closed: 20,
  min_cust: '20',
  max_cust: '38',
  avg_cookie: '2.3',
  customer_array: [],
  cph: function (){
    var min = Math.ceil(this.min_cust);
    var max = Math.floor(this.max_cust);
    return Math.floor(Math.random()*(max-min))+min;
  }
  //cah;
};
//Alki

var alki = {
  store_location: 'Alki',
  store_open: 6,
  store_closed: 20,
  min_cust: '2',
  max_cust: '16',
  avg_cookie: '4.6',
  customer_array: [],
  cph: function() {
    var min = Math.ceil(this.min_cust);
    var max = Math.floor(this.max_cust);
    return Math.floor(Math.random()*(max-min))+min;
  }
  //cah;
};

var page_div = document.createElement('div');
page_div.textContent = 'Sales Numbers';
document.body.appendChild(page_div);

function store_list(store){
  var h4 = document.createElement('h4');
  h4.textContent = `${store.store_location}`;
  document.getElementsByTagName('div')[0].appendChild(h4);
  var ul = document.createElement('ul');
  ul.setAttribute('id', store.store_location);
  document.getElementsByTagName('div')[0].appendChild(ul);
  //this iterates through the hours each shop is open in 24h time and lists it in standard american AM/PM.
  for(var t=store.store_open; t < store.store_closed; t++){

    var hour=t+'am';
    if (t >= 12 ){
      hour = t + 'pm';
    }
    if (t > 12 ){
      hour = t-12+'pm';
    }

    var li = document.createElement('li');
    li.textContent =`${hour} : ${store.customer_array[t-6]} Cookies`;
    document.getElementById(store.store_location).appendChild(li);
    if(t===20){
      break;
    }
    // var li_two = document.createElement('li');
    // li_two.textContent=`Tottal: ${cookie_sum(store)} Cookies`,
    // document.getElementById(store.store_list).appendChild(li_two);
  }
}

store_list(first_and_pike);
store_list(seatac);
store_list(sea_cen);
store_list(cap_hill);
store_list(alki);


