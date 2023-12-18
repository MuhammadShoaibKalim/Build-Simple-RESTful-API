// contactModel.js
const mongoose = require('mongoose');

// Setup schema
const contactSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    gender: String,
    phone: String,
    create_date: {
        type: Date,
        default: Date.now
    }
});

// Export Contact model
const Contact = mongoose.model('contact', contactSchema);
module.exports = Contact;

// Provide a method to get contacts
// module.exports.getContacts = function (callback, limit) {
//     Contact.find(callback).limit(limit);
// };


// module.exports.getContacts = function (limit) {
//     return Contact.find().limit(limit).exec();
// };

module.exports.getContacts = function (limit) {
    return Contact.find().limit(limit).exec();
};