import React from "react";
import AddRandomContact from "./AddRandomContact";
import RemoveAllContact from "./RemoveAllContact";
import AddContact from "./AddContact";
import FavoriteContacts from "./FavoriteContacts";
import GeneralContacts from "./GeneralContacts";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";

class ContactIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contactList: [
        {
          id: 1,
          name: "Artem Boikov",
          phone: "068-111-14-88",
          email: "freebie223@gmail.com",
          isFavorite: false,
        },
        {
          id: 2,
          name: "Svitlana Boikova",
          phone: "096-444-44-44",
          email: "bojkov755@gmail.com",
          isFavorite: true,
        },
        {
          id: 3,
          name: "Dmitro Boikov",
          phone: "068-333-33-33",
          email: "dimon4ik@gmail.com",
          isFavorite: true,
        },
      ],
      selectedContact: undefined,
      isUpdating: false,
    };
  }

  handleAddContact = (newContact) => {
    if (newContact.name === "") {
      return { status: "failure", msg: "Please, enter a valid Name!" };
    } else if (newContact.phone === "") {
      return { status: "failure", msg: "Please, enter a valid Phone Number!" };
    }

    const duplicateContact = this.state.contactList.filter(
      (x) => x.name === newContact.name || x.phone === newContact.phone
    );

    if (duplicateContact.length > 0) {
      return { status: "failure", msg: "Duplicate Error" };
    } else {
      this.setState((previousState) => {
        const newFinalContact = {
          ...newContact,
          id:
            this.state.contactList.length === 0
              ? 1
              : this.state.contactList[this.state.contactList.length - 1].id +
                1,
          isFavorite: false,
        };

        return {
          contactList: previousState.contactList.concat([newFinalContact]),
        };
      });
      return { status: "success", msg: "Contact was added successfully" };
    }
  };

  handleToggleFavorites = (contact) => {
    this.setState((previousState) => {
      return {
        contactList: previousState.contactList.map((obj) => {
          if (obj.id === contact.id) {
            return { ...obj, isFavorite: !obj.isFavorite };
          } else {
            return obj;
          }
        }),
      };
    });
  };

  handleDeleteContact = (contactId) => {
    this.setState((previousState) => {
      return {
        contactList: previousState.contactList.filter(
          (x) => x.id !== contactId
        ),
      };
    });
  };

  handleAddRandomContact = (newContact) => {
    const newFinalContact = {
      ...newContact,
      id:
        this.state.contactList.length === 0
          ? 1
          : this.state.contactList[this.state.contactList.length - 1].id + 1,
      isFavorite: false,
    };

    this.setState((previousState) => {
      return {
        contactList: previousState.contactList.concat([newFinalContact]),
      };
    });
  };

  handleRemoveAllContact = () => {
    this.setState(() => {
      return {
        contactList: [],
      };
    });
  };

  handleUpdateClick = (contact) => {
    console.log(contact);
    this.setState((previousState) => {
      return {
        isUpdating: true,
        selectedContact: contact,
      };
    });
  };
  render() {
    return (
      <div>
        <Header></Header>
        <div className="container" style={{ minHeight: "85vh" }}>
          <div className="row py-3">
            <div className="col-4 offset-2 row">
              <AddRandomContact
                handleAddRandomContact={this.handleAddRandomContact}
              ></AddRandomContact>
            </div>
            <div className="col-4 row">
              <RemoveAllContact
                handleRemoveAllContact={this.handleRemoveAllContact}
              ></RemoveAllContact>
            </div>
            <div className="row py-2">
              <div className="col-8 offset-2 row">
                <AddContact
                  handleAddContact={this.handleAddContact}
                ></AddContact>
              </div>
            </div>
            <div className="row py-2">
              <div className="col-8 offset-2 row">
                <FavoriteContacts
                  contacts={this.state.contactList.filter(
                    (u) => u.isFavorite === true
                  )}
                  favoriteClick={this.handleToggleFavorites}
                  deleteClick={this.handleDeleteContact}
                  updateClick={this.handleUpdateClick}
                ></FavoriteContacts>
              </div>
            </div>
            <div className="row py-2">
              <div className="col-8 offset-2 row">
                <GeneralContacts
                  contacts={this.state.contactList.filter(
                    (u) => u.isFavorite === false
                  )}
                  favoriteClick={this.handleToggleFavorites}
                  deleteClick={this.handleDeleteContact}
                  updateClick={this.handleUpdateClick}
                ></GeneralContacts>
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default ContactIndex;
