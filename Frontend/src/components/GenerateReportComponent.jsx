import React, { Component } from 'react';
import axios from 'axios';
// import { useParams } from 'react-router-dom';
import ExpenseService from '../services/ExpenseService';

class GenerateReportComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            category:this.props.match.params.category,
            expense:{}
            
        };
        this.changeCategoryHandler = this.changeCategoryHandler.bind(this);
    }

    componentDidMount(){
       ExpenseService.getExpenseByCategory(this.state.category).then(res=>{
        this.setState({expense: res.data})
       })
    }



    changeCategoryHandler= (event) => {
        this.setState({category: event.target.value});
    }

    cancel(){
        this.props.history.push('/expenses');
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Generation of report </h2>
                <div className = "form-group">
                    <label htmlFor="category"> Category: </label>
                        <select className="form-control" id="category" value ={this.state.category} onChange={this.changeCategoryHandler}>
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
                <br></br>
                <div className="row">
                    <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                        <th> Name</th>
                        <th> Price</th>
                        <th> Category</th>
                        <th> Date</th>
                        </tr>
                    </thead>
                    <tbody>
                  {/* //Database variable names */}
                  <tr>
                    <td> {this.state.expense_name} </td>
                    <td> {this.state.expense_price}</td>
                    <td> {this.state.category}</td>
                    <td> {this.state.expense_date} </td>               
                  </tr>
              </tbody>
                    </table>
                </div>
                <br></br>
                <button className="btn btn-danger" onClick={this.cancel.bind(this)}>Cancel</button>
            </div>
        );
    }
}

export default GenerateReportComponent;