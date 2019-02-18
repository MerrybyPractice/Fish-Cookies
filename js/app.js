'use strict';

// global variables
var store_array = [];

function scaffold_table (){
  var table = document.createElement('table');
  table.setAttribute('id', 'sales_numbers');
  document.body.appendChild(table);

  var timerow = document.createElement ('tr');
  timerow.setAttribute('id','timerow');
  document.getElementById('sales_numbers').appendChild(timerow);
  // <table id="sales_numbers"></table>.appendChild(timerow);
  // table.appendChild(timerow);

  var empty_box = document.createElement ('td');
  empty_box.textContent = '    ';
  document.getElementById('timerow').appendChild(empty_box);

  print_time_conversion(6, 20);
}

function print_footer (){
  var per_hour_total = document.createElement('tr');
  per_hour_total.textContent = 'Hourly Totals';
  per_hour_total.setAttribute('id', 'per_hour_total');
}
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
  // store.cph();
  for(var t= 0; t< store.customer_array.length; t++){
    var td = document.createElement('td');
    td.textContent = `${store.customer_array[t]} Cookies`;
    document.getElementById(store.store_id).appendChild(td);
    if (t===20){
      break;
    }
  }
}


// constructor functions

var Store = function(store_location, store_id, store_open, store_closed, min_cust, max_cust, avg_cookie){
  this.store_location = store_location;
  this.store_id = store_id;
  this.store_open = store_open || 6;
  this.store_closed = store_closed || 20;
  this.duration = store_closed - store_open;
  this.min_cust = min_cust || 12;
  this.max_cust = max_cust || 36;
  this.avg_cookie = avg_cookie || 4;
  this.customer_array = [ ];
  this.cph();
  this.store_totals;
};

Store.prototype.cph = function (){
  for (var i=0; i<this.duration; i++){
    var max = Math.ceil(this.max_cust);
    var min = Math.floor(this.min_cust);
    var num = Math.floor(Math.random()*(max-min+1))+min;
    this.customer_array.push(num);
  }

};

var hourly_totals = function (){

  var target = document.getElementById('sales_numbers');
  var hourly_td = document.createElement('td');
  var hourly_row = document.createElement('tr');
  hourly_td.textContent = 'Hourly Total';
  hourly_row.appendChild(hourly_td);


  for(var h=0; h < 14; h++){
    var sum = 0;
    for (var j=0; j<store_array.length; j++){
      sum += store_array[j].customer_array[h];
    }
    hourly_td = document.createElement('td');
    hourly_td.textContent = sum;
    hourly_row.appendChild(hourly_td);
  }
  target.appendChild(hourly_row);
};
Store.prototype.store_totals = function (){
  var store_td = document.createElement('td');

  var sum = 0;
  for (var s=0; s < this.customer_array.length; s++){
    sum += this.customer_array[s];

    store_td = document.createElement('td');
  }
  store_td.textContent = sum;
  document.getElementById(this.store_id).appendChild(store_td);

};




/* form code*/
var form_submit = function (event){
  event.preventDefault();
  var store_location = event.target.store_location.value;
  // console.log(store_location);
  var store_id = event.target.store_id.value;
  // console.log(store_id);
  var store_open = parseInt(event.target.store_open.value) || null;
  // console.log(store_open);
  var store_closed = parseInt(event.target.store_closed.value) || null;
  // console.log(store_closed);
  var min_cust = parseInt(event.target.min_cust.value) || null;
  // console.log(min_cust);
  var max_cust = parseInt(event.target.max_cust.value) || null;
  // console.log(max_cust);
  var avg_cookie = parseInt(event.target.avg_cookie.value) || null;
  // console.log(avg_cookie);
  var create_store = new Store (store_location, store_id, store_open, store_closed, min_cust, max_cust, avg_cookie);
  store_array.push(create_store);

  var store_table = document.getElementById('sales_numbers');
  store_table.innerHTML = '';


  renderTable();

  dailyLocationTotal();
  hourly_totals();
};

function dailyLocationTotal() {
  /* and here we render */
  var total = document.createElement('td');
  total.setAttribute('id', 'loc_tot');
  total.textContent = 'Daily Location Total';
  document.getElementById('timerow').appendChild(total);
 
}

function renderTable() {
  scaffold_table();
  for (var i = 0; i < store_array.length; i++) {
    store_list(store_array[i]);
  }
  print_footer();
}


function store_list(store){
  var store_name = document.createElement('tr');
  store_name.setAttribute('id', store.store_id);
  store_name.textContent = `${store.store_location}`;

  //clearing old data;
  document.getElementById('sales_numbers');

  document.getElementById('sales_numbers').appendChild(store_name);


  print_number_cookies(store);
  store.store_totals();

}

function originalStores(){

  //1st and Pike
  var first_and_pike = new Store('First and Pike', 'firstpike', 6, 20, 23, 65, 6.3);

  //SeaTac AirPort

  var seatac = new Store('SeaTac Airport', 'seatac', 6, 20, 3, 24, 1.2);

  //Seattle Center

  var sea_cen = new Store('Seattle Center', 'seacen', 6, 20, 11, 38, 3.7);

  //Capitol Hill

  var cap_hill = new Store('Capitol Hill', 'caphill', 6, 20, 20, 38, 2.3);

  //Alki

  var alki = new Store('Alki', 'alki', 6, 20, 2, 16, 4.6);

  store_array = [first_and_pike, seatac, sea_cen, cap_hill, alki];

}


function init(){
  var create_new = document.getElementById('create_new');
  create_new.addEventListener('submit', form_submit);

  originalStores();
  renderTable();
  dailyLocationTotal();
  hourly_totals();
}

init();
