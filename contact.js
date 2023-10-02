const fs = require('fs');
const path = require('path');


const contactsPath = path.join(__dirname, 'db', 'contacts.json');

function listContacts() {
    fs.readFile(contactsPath,  (err, data) => {
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
      const contact = contacts.find(c => c.id === contactId);

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
    const contact = contacts.filter(c => c.id === contactId);

    if(contact){
      console.table([contact]);
    }else{
      console.log(`contact with this ID ${contactId} cannot be removed.`)
    }
    })
  }
  
  function addContact(name, email, phone) {
    fs.readFile(contactsPath, 'utf-8', (err, data) => {
      if(err){
        console.error(err);
        return;
      }

      const contacts = JSON.parse(data);

      const newContact = {
        id: Date.now().toString(),
        name: name,
        email: email,
        phone: phone,
      }
      
      contacts.push(newContact);

      fs.writeFile( 
        contactsPath, JSON.stringify(contacts, null, 2), "utf-8", 
        (err) => {
          if (err) {
            console.error(err);
            return;
          }
          console.log(`contact added:`);
          console.table([newContact]);
        }
      );
  })

}

  module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact

  };