Config files (.gitignore and .eslintrc.json) taken from codefellows 201d45 class repo 

Math.random information, including the cleaver funciton using .ceil and .floor that allowed my random numbers to be inclusive intigers, 

    first_and_pike_CPH: function() {
    var min = Math.ceil(this.min_cust);
    var max = Math.floor(this.max_cust);
    return Math.floor(Math.random()*(max - min +1))+min;
    
     all used from this page: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random