import React, { Component } from "react";
import ExpenseService from "../services/ExpenseService";

class ListExpensesComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expenses: [],
    };
    this.addExpense = this.addExpense.bind(this);
    this.editExpense = this.editExpense.bind(this);
    this.deleteExpense = this.deleteExpense.bind(this);
    this.generateReport = this.generateReport.bind(this);
  }

  componentDidMount() {
    ExpenseService.getExpenses().then((res) => {
      this.setState({ expenses: res.data });
    });
  }

  addExpense(){
    this.props.history.push('/add-expenses');
  }

  editExpense(id){
    this.props.history.push(`/update-expenses/${id}`)
  }


  deleteExpense(id){
    ExpenseService.deleteExpense(id).then(res=>{
      this.setState({expenses: this.state.expenses.filter(expense => expense.id!==id)});
    })
  }


  viewExpense(id){
    this.props.history.push(`/view-expenses/${id}`)
  }

  generateReport(category){
    this.props.history.push(`/generate-report/${category}`)
    }

  render() {
    return (
      <div>
        <h2 className="text-center">Expense List</h2>
        <div className="row">
          <button className="btn btn-primary" size="md" onClick={this.addExpense}> Add Expense </button>
        </div>
        {/* <br></br>
        <div className="row">
          <button className="btn btn-primary" size="md" onClick={this.generateReport}> Generate Report </button>
        </div>
        <br></br> */}
        <div className="row">
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th> Name</th>
                  <th> Price</th>
                  <th> Category</th>
                  <th> Date</th>
                  <th> Actions</th>
                </tr>
              </thead>
              <tbody>
                {this.state.expenses.map((expense) => (
                  //Database variable names
                  <tr key={expense.id}>
                    <td> {expense.expense_name} </td>
                    <td> {expense.expense_price}</td>
                    <td> {expense.category}</td>
                    <td> {expense.expense_date} </td>
                    {/* format="DD/MM/YYYY"</td> */}
                    <td>
                      <button onClick={ () => this.editExpense(expense.id)} className="btn btn-info">Update </button>
                      <button style={{marginLeft: "10px"}} onClick={ () => this.deleteExpense(expense.id)} className="btn btn-danger">Delete </button>
                      <button style={{marginLeft: "10px"}} onClick={ () => this.viewExpense(expense.id)} className="btn btn-info">View </button>
                      </td>                
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
      </div>
    );
  }
}

export default ListExpensesComponent;
