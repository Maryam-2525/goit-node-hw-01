const fs = require('fs');
const path = require('path');


const contactsPath = path.join(__dirname, 'db', 'contacts.json');

function listContacts() {
    fs.readFile(contactsPath, 'utf-8', (err, data) => {
        if(err){
            console.error(err);
            return;
        }

        const contacts = JSON.parse(data);
        console.table(contacts);
    })
  }
  
  function getContactById(contactId) {
      fs.readFile(contactsPath, 'utf-8', (err, contactId) => {
        if(err){
          console.error(err);
          return;
        }
      const getContactById = JSON.parse(contactId);
      console.table(contactId);
      })
      
  }
  
  function removeContact(contactId) {
    // ...your code
  }
  
  function addContact(name, email, phone) {
    // ...your code
  }

  module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact

  }