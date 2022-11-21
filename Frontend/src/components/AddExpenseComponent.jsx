import React, { Component } from "react";
// import DatePicker from 'react-datepicker';
import DatePicker from "react-datepicker";
import ExpenseService from "../services/ExpenseService";

class AddExpenseComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expense_name: "",
      expense_price: "",
      category: "",
      expense_date: "",
    };

    this.changeNameHandler = this.changeNameHandler.bind(this);
    this.changePriceHandler = this.changePriceHandler.bind(this);
    this.changeCategoryHandler = this.changeCategoryHandler.bind(this);
    this.changeDateHandler = this.changeDateHandler.bind(this);
    this.saveOrUpdateExpense = this.saveOrUpdateExpense.bind(this);
  }

  saveOrUpdateExpense = (e) => {
    e.preventDefault();
    let expense = {
      expense_name: this.state.expense_name,
      expense_price: this.state.expense_price,
      category: this.state.category,
      expense_date: this.state.expense_date,
    };
    console.log("expense => " + JSON.stringify(expense));

    ExpenseService.createExpense(expense).then((res) => {
      //For the addition of expense
      this.props.history.push("/expenses");
    });
  };
  changeNameHandler = (event) => {
    this.setState({ expense_name: event.target.value });
  };

  changePriceHandler = (event) => {
    this.setState({ expense_price: event.target.value });
  };

  changeCategoryHandler = (event) => {
    this.setState({ category: event.target.value });
  };

  changeDateHandler = (event) => {
    this.setState({ expense_date: event.target.value });
  };

  cancel() {
    this.props.history.push("/expenses");
  }

  render() {
    return (
      <div>
        <br></br>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h3 className="text-center">Add Expense</h3>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label> Name: </label>
                    <input
                      placeholder="Name"
                      name="expense_name"
                      className="form-control"
                      value={this.state.expense_name}
                      onChange={this.changeNameHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Price: </label>
                    <input
                      placeholder="Price"
                      name="expense_price"
                      className="form-control"
                      value={this.state.expense_price}
                      onChange={this.changePriceHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label for="category"> Category: </label>
                    <select
                      class="form-control"
                      id="category"
                      value={this.state.category}
                      onChange={this.changeCategoryHandler}
                    >
                      <option value="Food">Food</option>
                      <option value="Toys">Toys</option>
                      <option value="Stationary">Stationary</option>
                      <option value="Electronics">Electronics</option>
                      <option value="Education">Education</option>
                      <option value="Insurance">Insurance</option>
                      <option value="Clothing">Clothing</option>
                      <option value="Transportation">Transportation</option>
                      <option value="Medicine">Medicine</option>
                      <option value="Groceries">Groceries</option>
                      <option value="House Utilities">House Utilities</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label> Date: </label>{" "}
                    <input
                      placeholder="Date"
                      type="date"
                      name="expense_date"
                      className="form-control"
                      value={this.state.expense_date}
                      onChange={this.changeDateHandler}
                    />{" "}
                  </div>
                  {/* <div class = "form-outline datepicker" > 
                                            <input type = "text"class = "form-control"id = "exampleDatepicker1" > 
                                                < label for = "exampleDatepicker1" class = "form-label" > Select a date </label> 
                                            </input>
                                        </div > */}
                  <br></br>
                  <button
                    className="btn btn-success"
                    onClick={this.saveOrUpdateExpense}
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

export default AddExpenseComponent;
