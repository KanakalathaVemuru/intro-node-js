const fs = require('fs')
const path = require('path')

// this path needs to be relative to work with fs
const contactsLocation = path.join(__dirname, './contacts.json');

/**
 * should read the contacts at the
 * @contactsLocation path and convert
 * it to a js object
 */
const getContacts = () => {
  var customer;
  try {
    const jsonString = fs.readFileSync(contactsLocation);
    customer = JSON.parse(jsonString);
  } catch (err) {
    console.log(err);
    return;
  }
  return customer;
}

/**
 * takes a contacts object, converts it to JSON
 * and saves it at the @contactsLocation path
 * @param {Object} contacts contacts object
 */
const saveContacts = (contacts) => {
  const jsonString = JSON.stringify(contacts);
  fs.writeFileSync(contactsLocation, jsonString, err => {
    if (err) {
        console.log('Error writing file', err)
    } else {
        console.log('Successfully wrote file')
    }
  });
}

module.exports = {
  contactsLocation,
  getContacts,
  saveContacts
}

