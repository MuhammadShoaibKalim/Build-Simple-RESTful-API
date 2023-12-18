// contactController.js
const Contact = require('./contactModel');
exports.index = function (req, res) {
    Contact.getContacts(10)  // Limiting to 10 records for testing, adjust as needed
        .then(contacts => {
            res.json({
                status: "success",
                message: "Contacts retrieved successfully",
                data: contacts
            });
        })
        .catch(err => {
            res.json({
                status: "error",
                message: err,
            });
        });
};

// contactController.js

// ... (your existing code)

// Handle create contact actions
exports.new = function (req, res) {
    const contact = new Contact({
        name: req.body.name || 'Default Name',
        gender: req.body.gender,
        email: req.body.email,
        phone: req.body.phone
    });

    // Save the contact and handle the promise
    contact.save()
        .then(savedContact => {
            res.json({
                message: 'New contact created!',
                data: savedContact
            });
        })
        .catch(err => {
            res.json(err);
        });
};

// ... (rest of your code)


// Handle view contact info
exports.view = function (req, res) {
    Contact.findById(req.params.contact_id, function (err, contact) {
        if (err)
            res.send(err);
        res.json({
            message: 'Contact details loading..',
            data: contact
        });
    });
};

// Handle update contact info
exports.update = function (req, res) {
    Contact.findById(req.params.contact_id, function (err, contact) {
        if (err)
            res.send(err);
        contact.name = req.body.name ? req.body.name : contact.name;
        contact.gender = req.body.gender;
        contact.email = req.body.email;
        contact.phone = req.body.phone;

        // Save the contact and check for errors
        contact.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Contact Info updated',
                data: contact
            });
        });
    });
};

// Handle delete contact
exports.delete = function (req, res) {
    Contact.remove({
        _id: req.params.contact_id
    }, function (err, contact) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'Contact deleted'
        });
    });
};







