'use strict';
/*

User Stories (MVP)
Priotity 2: A table to show the total amount of projected cookie needs at each location, with the table displaying the cookie stand location, the total number of cookies needed for each location, an hourly breakdown of total cookies sales for each location, and a footer row of totals for each column.

Technical Requirements (MVP)
Each cookie stand location should have a separate render() method that creates and appends its row to the table
The header row and footer row are each created in their own stand-alone function
Duplicate code has been removed and DRY principles are evident
Working on a non-master branch for the day, with regular commit history. Basically, every time you get something to work, you should do a commit. But you only need to push every couple of hours or so, tops
=========================================================================================================================================
*/



// helper funcitons

//this converts the time measure from 24 hour clock to 12 hour clock.
function print_time_conversion (store){

  for(var t= store.store_open; t< store.store_closed;t++){

    if (t<12){
      var hour = t + 'am';

    }

    else if (t === 12){
      // eslint-disable-next-line no-redeclare
      var hour = t + 'pm';
    }

    else {
      // eslint-disable-next-line no-redeclare
      var hour = t-12+'pm';
    }

    var tr = document.createElement('tr');
    tr.textContent = `${hour}:`;
    document.getElementById(store.store_location).appendChild(tr);
    if(t===20){
      break;
    }


  }
}

function print_number_cookies (store){
  for(var t= store.store_open; t< store.store_closed;t++){
    var tr = document.createElement('tr');
    tr.textContent = `${store.customer_array} Cookies`;
    document.getElementById(store.store_location).appendChild(tr);
    if (t===20){
      break;
    }
  }
}
// constructor functions

var Store = function(store_location, store_open, store_closed, min_cust, max_cust, avg_cookie){
  this.store_location = store_location;
  this.store_open = store_open;
  this.store_closed = store_closed;
  this.duration = store_closed - store_open;
  this.min_cust = min_cust;
  this.max_cust = max_cust;
  this.avg_cookie = avg_cookie;
  this.customer_array = [ ];
  this.cph = function (){
    for (var i = 0; i < this.duration; i++){
      var min = Math.ceil(this.min_cust);
      var max = Math.floor (this.max_cust);
      var num = Math.floor(Math.random()*(max-min+1))+min;
      this.customer_array.push(num);
    }
  };
};

// ============================



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
var first_and_pike = new Store('First and Pike', 6, 20, 23, 65, 6.3) ;

console.log(first_and_pike);

//SeaTac AirPort

var seatac = new Store('SeaTac Airport', 6, 20, 3, 24, 1.2);

console.log(seatac);

//Seattle Center

var sea_cen = new Store ('Seattle Center', 6, 20, 11, 38, 3.7);

console.log(sea_cen);

//Capitol Hill

var cap_hill = new Store ('Capitol Hill', 6, 20, 20, 38, 2.3);

console.log(cap_hill);

//Alki

var alki = new Store ('Alki', 6, 20, 2, 16, 4.6);

var page_div = document.createElement('div');
page_div.textContent = 'Sales Numbers';
document.body.appendChild(page_div);

function store_list(store){
  var h4 = document.createElement('h4');
  h4.textContent = `${store.store_location}`;
  document.getElementsByTagName('div')[0].appendChild(h4);
  var table = document.createElement('table');
  table.setAttribute('id', store.store_location);
  document.getElementsByTagName('div')[0].appendChild(table);

  print_time_conversion(store);
  print_number_cookies(store);

  // var tr = document.createElement('tr');
  // tr.textContent =`: ${store.customer_array[t-6]} Cookies`;
  // document.getElementById(store.store_location).appendChild(tr);

  // if(t===20){
  //   break;
  // }
  // var tr_two = document.createElement('tr');
  // tr_two.textContent=`Tottal: ${cookie_sum(store)} Cookies`,
  // document.getElementById(store.store_list).appendChild(tr_two);

}

first_and_pike.cph();
store_list(first_and_pike);
seatac.cph();
store_list(seatac);
sea_cen.cph();
store_list(sea_cen);
cap_hill.cph();
store_list(cap_hill);
alki.cph();
store_list(alki);


