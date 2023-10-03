const {
    listContacts,
    getContactById,
    removeContact,
    addContact
} = require ('./contact');

const argv = require("yargs").argv;


// TODO: refactor
function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      listContacts();
      break;

    case "get":
      getContactById(contactId);
      break;

    case "add":
       addContact(name, email, phone);
      break;

    case "remove":
      removeContact(contactId);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);