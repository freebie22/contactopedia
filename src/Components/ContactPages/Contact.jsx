import React from "react";

class Contact extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className="row p-md-2 mb-2"
        style={{ borderRadius: "20px", border: "1px solid #555" }}
      >
        <div className="col-2 col-md-1 col-sm-1 pt-2 pt-md-1">
          <img
            src={`https://ui-avatars.com/api/?name=${this.props.contact.name}`}
            style={{ width: "80%" }}
            alt=""
          ></img>
        </div>
        <div className="col-6 col-md-5 pt-0">
          <span className="h4 text-warning">{this.props.contact.name}</span>
          <br></br>
          <div className="text-white-50">
            {this.props.contact.email}
            <br></br>
            {this.props.contact.phone}
          </div>
        </div>
        <div className="col-2 col-md-2 pt-md-3">
          <button
            className={`btn btn-sm m-1 ${
              this.props.contact.isFavorite ? "btn-warning" : "btn-outline-warning"
            }`}
          onClick={() => this.props.favoriteClick(this.props.contact)}>
            <i className="bi bi-star" style={{ fontSize: "1rem" }}></i>
          </button>
        </div>
        <div className="col-2 col-md-3 pt-md-3">
          <button className={`btn btn-primary btn-sm m-1`} onClick={() => this.props.updateClick(this.props.contact)}>
            <i className="bi bi-pencil-square" style={{ fontSize: "1rem" }}></i>
          </button>
          <button className={`btn btn-danger btn-sm m-1`} onClick={() => this.props.deleteClick(this.props.contact.id)}>
            <i className="bi bi-trash-fill" style={{ fontSize: "1rem" }}></i>
          </button>
        </div>
        <button className="btn btn-secondary form-control">
          {this.props.contact.name}
        </button>
      </div>
    );
  }
}

export default Contact;
