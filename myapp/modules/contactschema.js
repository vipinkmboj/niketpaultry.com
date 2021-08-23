var mongoose = require('mongoose');
require('dotenv').config();
var uri = process.env.DATABASEADMIN
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false,
useCreateIndex: true});
var conn = mongoose.Collection;

var contactSchema = new mongoose.Schema({

Firstname : {
    type: String,
    required: true
},
Lastname: {
    type: String,
    required: true
},
Mobilenumber : {
    type: String,
    required: true
},
Email: {
    type: String,
    required: true
    
},
WriteMessage: {
    type: String,
    required: true
},

Date: {
    type: Date,
    default: Date.now
}
});

var contactModel = mongoose.model('customermessages', contactSchema);
module.exports = contactModel;