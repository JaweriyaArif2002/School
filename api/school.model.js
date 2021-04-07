const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let schools = new Schema({
    id: {
        type: Number,
        auto:true,
    },
    schoolName: {
        type: String,
        
    },

    users: {
        type: Array
    }
    // [
    //     {
    //         userId: {
    //             type: String
    //         },
    //         password: {
    //             type: String
    //         }
    //     }
    // ],

}, {
    collection: 'schools'
});

module.exports = mongoose.model('school ', schools);