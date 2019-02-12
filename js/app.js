'use strict';
/*

User Stories (MVP)
As a user, I want a webpage that displays individual store data for my Salmon Cookie Shops, so that I can be informed about how to run my business
As a developer, I want to represent the store data in a list format on the webpage, so my client can view the information
As a developer, I want to use object-oriented programming to build this site, so that the site will be more effective and the code will be easier to read and understand

Technical Requirements

Main page meets requirements of the problem domain
Use template literals in your JS logic to render the stores as lists on the sales page

User Stories (Stretch... only after completing everything above)
As a developer, I want to make some headway on the public-facing page for the business
*/




// cookie counter function

function cookie_counter(store) {

  for(var i = 6; i<21; i++){
    var cph = Math.floor(store.cph()*store.avg_cookie);
    store.customer_array.push(cph);

  }
}

// function cookie_sum(store){
  
// }

//1st and Pike

var first_and_pike = {
  store_location: 'First and Pike',
  min_cust: '23',
  max_cust: '65',
  avg_cookie: '6.3',
  customer_array: [ ],
  cph: function() {
    var min = Math.ceil(this.min_cust);
    var max = Math.floor(this.max_cust);
    return Math.floor(Math.random()*(max - min +1))+min;
  },
};

console.log('first and pike array '+cookie_counter(first_and_pike));

//SeaTac AirPort

var seatac = {
  store_location: 'SeaTac Airport',
  min_cust: '3',
  max_cust: '24',
  avg_cookie: '1.2',
  customer_array: [ ],
  cph: function () {
    var min = Math.ceil(this.min_cust);
    var max = Math.floor(this.max_cust);
    return Math.floor(Math.random()*(max-min +1))+min;

  }
};

console.log(cookie_counter(seatac));

//Seattle Center

var sea_cen = {
  store_location: 'Seattle Center',
  min_cust: '11',
  max_cust: '38',
  avg_cookie: '3.7',
  customer_array: [],
  cph: function (){
    var min = Math.ceil(this.min_cust);
    var max = Math.floor(this.max_cust);
    return Math.floor(Math.random()*(max-min))+min;
  }
};

console.log(cookie_counter(sea_cen));

//Capitol Hill

var cap_hill = {
  store_location: 'Capitol Hill',
  min_cust: '20',
  max_cust: '38',
  avg_cookie: '2.3',
  customer_array: [],
  cph: function (){
    var min = Math.ceil(this.min_cust);
    var max = Math.floor(this.max_cust);
    return Math.floor(Math.random()*(max-min))+min;
  }
};

console.log(cookie_counter(cap_hill));

//Alki

var alki = {
  store_location: 'Alki',
  min_cust: '2',
  max_cust: '16',
  avg_cookie: '4.6',
  customer_array: [],
  cph: function() {
    var min = Math.ceil(this.min_cust);
    var max = Math.floor(this.max_cust);
    return Math.floor(Math.random()*(max-min))+min;
  }
};
console.log(cookie_counter(alki));


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
  //this iterates through the hours each shop is open in military time and lists it in standard american AM/PM.
  for(var t=6; t < 21; t++){

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
console.log('gggggggg');

