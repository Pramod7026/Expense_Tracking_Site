import React, { Component } from "react";
// import DatePicker from 'react-datepicker';
import DatePicker from "react-datepicker";
import ExpenseService from "../services/ExpenseService";

class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      phoneno: "",
      address: "",
      password: "",
    };

    this.changeNameHandler = this.changeNameHandler.bind(this);
    this.changeemailHandler = this.changeemailHandler.bind(this);
    this.changephonenoHandler = this.changephonenoHandler.bind(this);
    this.changeaddressHandler = this.changeaddressHandler.bind(this);
    this.changepasswordHandler = this.changepasswordHandler.bind(this);
    this.register = this.register.bind(this);
  }

  register = (e) => {
    e.preventDefault();
    let user = {
      name: this.state.name,
      email: this.state.email,
      phoneno: this.state.phoneno,
      address: this.state.address,
      password: this.state.password,
    };
    console.log("user => " + JSON.stringify(user));

    ExpenseService.createUser(user).then((res) => {
      //For the addition of expense
      this.props.history.push("/login");
    });
  };
  changeNameHandler = (event) => {
    this.setState({ name: event.target.value });
  };

  changeemailHandler = (event) => {
    this.setState({ email: event.target.value });
  };

  changephonenoHandler = (event) => {
    this.setState({ phoneno: event.target.value });
  };

  changeaddressHandler = (event) => {
    this.setState({ address: event.target.value });
  };

  changepasswordHandler = (event) => {
    this.setState({ password: event.target.value });
  };

  cancel() {
    this.props.history.push("/register");
  }

  render() {
    return (
      <div>
        <br></br>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h3 className="text-center">Sign Up</h3>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <input
                      placeholder="Name"
                      name="name"
                      className="form-control"
                      value={this.state.name}
                      required
                      onChange={this.changeNameHandler}
                    />
                  </div>
                  <br></br>
                  <div className="form-group">
                    
                    <input
                      placeholder="Email"
                      name="Email"
                      className="form-control"
                      value={this.state.email}
                      required
                      onChange={this.changeemailHandler}
                    />
                  </div>
                  <br></br>
                  <div className="form-group">
                    
                    <input
                      placeholder="Phone number"
                      name="Phone number"
                      className="form-control"
                      value={this.state.phoneno}
                      required
                      onChange={this.changephonenoHandler}
                    />
                  </div>
                  <br></br>
                  <div className="form-group">
                    
                    <input
                      placeholder="Address"
                      name="address"
                      className="form-control"
                      value={this.state.address}
                      required
                      onChange={this.changeaddressHandler}
                    />
                  </div>
                  <br></br>
                  <div className="form-group">
                    <input
                      type="password"
                      placeholder="Password"
                      name="Password"
                      className="form-control"
                      value={this.state.password}
                      required
                      onChange={this.changepasswordHandler}
                    />
                  </div>
                  
                  <br></br>
                  <button
                    className="btn btn-success"
                    onClick={this.register}
                  >
                    Save
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={this.cancel.bind(this)}
                    style={{ marginLeft: "10px" }}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Registration;
