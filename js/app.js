'use strict';
/*

User Stories (MVP)
Priotity 2: A table to show the total amount of projected cookie needs at each location, with the table displaying the cookie stand location, the total number of cookies needed for each location, an hourly breakdown of total cookies sales for each location, and a footer row of totals for each column.

Technical Requirements (MVP)
Duplicate code has been removed and DRY principles are evident
Working on a non-master branch for the day, with regular commit history. Basically, every time you get something to work, you should do a commit. But you only need to push every couple of hours or so, tops
=========================================================================================================================================

to add a new store:
  enter all data in constructor function
  add to store array
*/



// helper funcitons

//this converts the time measure from 24 hour clock to 12 hour clock and prints it to the timerow
function print_time_conversion (open, close){

  for(var t= open; t< close;t++){

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

    var td = document.createElement('td');
    td.textContent = `${hour}`;
    document.getElementById('timerow').appendChild(td);
    if(t===20){
      break;
    }


  }
}

//this pulls the number of cookies perhour

function print_number_cookies (store){
  store.cph();
  for(var t= 0; t< store.customer_array.length; t++){
    var td = document.createElement('td');
    td.textContent = `${store.customer_array[t]} Cookies`;
    document.getElementById(store.store_id).appendChild(td);
    if (t===20){
      break;
    }
  }
}

//this calculates the tottal number of hourly cookies and prints them in the bottom row

var hourly_totals =  function (){
  var store_array = [ first_and_pike, seatac, sea_cen, cap_hill, alki];
  for(var h=0; h < 14; h++){
    var l = 0;
    for (var j=0; j<store_array.length; j++){
      console.log(store_array[j].customer_array[h]);
      var k = store_array[j].customer_array[h];
      l += k;
    }
    var hourly_td = document.createElement('td');
    hourly_td.textContent = `${l} Cookies`;
    document.getElementById('per_hour_total').appendChild(hourly_td);
  }

};




// constructor functions

var Store = function(store_location, store_id, store_open, store_closed, min_cust, max_cust, avg_cookie){
  this.store_location = store_location;
  this.store_id = store_id;
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

// function cookie_sum(store){
// }

//1st and Pike
var first_and_pike = new Store('First and Pike', 'firstpike', 6, 20, 23, 65, 6.3) ;

//SeaTac AirPort

var seatac = new Store ('SeaTac Airport', 'seatac', 6, 20, 3, 24, 1.2);

//Seattle Center

var sea_cen = new Store ('Seattle Center', 'seacen', 6, 20, 11, 38, 3.7);

//Capitol Hill

var cap_hill = new Store ('Capitol Hill', 'caphill', 6, 20, 20, 38, 2.3);

//Alki

var alki = new Store ('Alki', 'alki', 6, 20, 2, 16, 4.6);

var page_div = document.createElement('div');
page_div.textContent = 'Sales Numbers';
document.body.appendChild(page_div);
var table = document.createElement('table');
table.setAttribute('id', 'cookies_per_hour');

document.getElementsByTagName('div')[0].appendChild(table);
var timerow = document.createElement ('tr');
timerow.setAttribute('id','timerow');
document.getElementById('cookies_per_hour').appendChild(timerow);

var empty_box = document.createElement ('td');
empty_box.textContent = '    ';
document.getElementById('timerow').appendChild(empty_box);



print_time_conversion(6, 20);

function store_list(store){
  var store_name = document.createElement('tr');
  store_name.setAttribute('id', store.store_id);
  store_name.textContent = `${store.store_location}`;
  document.getElementById('cookies_per_hour').appendChild(store_name);


  print_number_cookies(store);


  // var tr_two = document.createElement('tr');
  // tr_two.textContent=`Tottal: ${cookie_sum(store)} Cookies`,
  // document.getElementById(store.store_list).appendChild(tr_two);

}
var total = document.createElement('td');
total.textContent = 'Daily Location Total';
document.getElementById('timerow').appendChild(total);



store_list(first_and_pike);

store_list(seatac);

store_list(sea_cen);

store_list(cap_hill);

store_list(alki);

var per_hour_total = document.createElement('tr');
per_hour_total.textContent = 'Hourly Totals';
per_hour_total.setAttribute('id', 'per_hour_total');
document.getElementById('cookies_per_hour').appendChild(per_hour_total);
hourly_totals();
