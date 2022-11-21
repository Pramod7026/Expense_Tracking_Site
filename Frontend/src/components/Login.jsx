import React, { Component } from "react";
// import DatePicker from 'react-datepicker';
import DatePicker from "react-datepicker";
import ExpenseService from "../services/ExpenseService";

class Login extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//     //   name: "",
//     //   email: "",
//     //   phoneno: "",
//     //   address: "",
//     //   password: "",

//         email:"",
//         password:"",
//     };
//   }
  
//   login = (e) => {
//     e.preventDefault();
//     let user = {
//       email: this.state.email,
//       password: this.state.password,
//     };
//     console.log("user => " + JSON.stringify(user));

//     ExpenseService.createLogin(user).then((res) => {
//       //For the addition of expense
//       this.props.history.push("/login");
//     });
//   };

  constructor(props){
    super(props);
    this.state = {
        email: this.props.match.params.email,
        password:this.props.match.params.password,
        login:{}
    };
    this.save = this.save.bind(this);
    this.cancel = this.cancel.bind(this);
}

componentDidMount(){
    ExpenseService.loginuser(this.state.email,this.state.password).then(res=>{
        this.setState({login: res.data});
    })
}


save(){
    this.props.history.push("/expenses");
}
//   changeemailHandler = (event) => {
//     this.setState({ email: event.target.value });
//   };

//   changepasswordHandler = (event) => {
//     this.setState({ password: event.target.value });
//   };

  cancel() {
    this.props.history.push("/login");
  }

  render() {
    return (
      <div>
        <br></br>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h3 className="text-center">Login</h3>
              <div className="card-body">
                <form>
                  <br></br>
                  <div className="form-group">
                    
                    <input
                      placeholder="Email"
                      name="Email"
                      className="form-control"
                    />
                    <div>{ this.state.login.email}</div>
                  </div>
                  <br></br>
                  <div className="form-group">
                    <input
                      type="password"
                      placeholder="Password"
                      name="Password"
                      className="form-control"
                    />
                    <div>{ this.state.login.password}</div>
                  </div>
                  
                  <br></br>
                  <button
                    className="btn btn-success"
                    onClick={this.save.bind(this)}
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

export default Login;
