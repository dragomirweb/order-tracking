'use strict';
var mongoose = require("mongoose");
mongoose.connect('mongodb://user:Davias01@ds113936.mlab.com:13936/order', function(err) {
    if (err) {
        console.log('failed connecting to mondoDB');
    }
    else {
        console.log('successfully connected to mondoDB');
    }
});
