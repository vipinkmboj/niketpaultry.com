var mongoose = require('mongoose');
require('dotenv').config();
var uri = process.env.DATABASEADMIN
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false,
useCreateIndex: true});
var conn = mongoose.Collection;

var feedbackSchema = new mongoose.Schema({

    FullName: {
        type: String,
        required: true
        
    },
    MobileNumber: {
        type: String,
        required: true
        
    },
    Email: {
        type: String,
        required: true
        
    },

    BusinessImprovingFeedback: {
    type: String,
    required: true
    
    },
    SalesImprovingFeedback: {
        type: String,
        required: true
        
        },
        OtherFeedback: {
            type: String,
            required: true
            
            },

Date: {
    type: Date,
    default: Date.now
}
});

var feedbackModel = mongoose.model('feedbacks', feedbackSchema);
module.exports = feedbackModel;