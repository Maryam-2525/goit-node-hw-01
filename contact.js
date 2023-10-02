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
      fs.readFile(contactsPath, 'utf-8', (err, data) => {
        if(err){
          console.error(err);
          return;
        }
      const contacts = JSON.parse(data);
      const contact = contact.find(c => c.id === contactId);

      if(contact){
        console.table([contact]);
      }else{
        console.log(`contact with this ID ${contactId} is not found.`)
      }
      })
      
  }
  
  function removeContact(contactId) {
    fs.readFile(contactsPath, 'utf-8', (err, data) => {
      if(err){
        console.error(err);
        return;
      }
    const contacts = JSON.parse(data);
    const contact = contact.fs.unlink(c => c.id === contactId);

    if(contact){
      console.table([contact]);
    }else{
      console.log(`contact with this ID ${contactId} is not found.`)
    }
    })
  }
  
  function addContact(name, email, phone) {
      fs.writeFile(contactsPath, 'utf-8', (err, data)  => {
        if(err){
          console.error(err);
          return;
        }
       
      const contacts = JSON.parse(data); 
      let data = {
        "id": " ",
        "name": " ",
        "email": " ",
        "phone": " "
      };
      const contact = contact.JSON.push(data);
      if(contact){
        console.table([contact]);
      }else{
        console.log(`this contact cannot be add`)

      })

  }

  module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact

  };