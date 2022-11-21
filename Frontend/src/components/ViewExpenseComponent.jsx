import React, { Component } from 'react';
import ExpenseService from '../services/ExpenseService';

class ViewExpenseComponent extends Component {

    constructor(props){
        super(props);
        this.state = {
            id: this.props.match.params.id,
            expense:{}
        };
    }
    componentDidMount(){
        ExpenseService.getExpenseById(this.state.id).then(res=>{
            this.setState({expense: res.data});
        })
    }

    cancel(){
        this.props.history.push('/expenses');
    }

    
    render() {
        return (
        <div>
        <br></br>
           <div className = "container">
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                    <h3 className="text-center">View Expense Details</h3>
                        <div className = "card-body">
                            <form>
                                <div className = "form-group">
                                    <label> Name: </label>
                                    <div>{ this.state.expense.expense_name}</div>
                                </div>
                                <div className = "form-group">
                                    <label> Price: </label>
                                    <div> { this.state.expense.expense_price}</div>
                                </div>
                                <div className = "form-group">
                                    <label for="category"> Category: </label>
                                    <div> { this.state.expense.category}</div>
                                </div>
                                <div className = "form-group">
                                    <label> Date: </label>
                                    <div> { this.state.expense.expense_date}</div>
                                </div>
                                {/* <div class = "form-outline datepicker" > 
                                    <input type = "text"class = "form-control"id = "exampleDatepicker1" > 
                                        < label for = "exampleDatepicker1" class = "form-label" > Select a date </label> 
                                    </input>
                                </div > */}
                                <br></br>
                                <button className="btn btn-danger" onClick={this.cancel.bind(this)}>Cancel</button>
                            </form>
                        </div>
                    </div>
                </div>

           </div>
    </div>
        );
    }
}

export default ViewExpenseComponent;