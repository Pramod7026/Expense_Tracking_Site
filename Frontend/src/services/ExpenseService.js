import axios from 'axios';

const EXPENSE_API_BASE_URL = "http://localhost:8081/api/v1/expenses";
const USER_API_BASE_URL = "http://localhost:8081/api/v1/create";

class ExpenseService{
    getExpenses(){
        return axios.get(EXPENSE_API_BASE_URL);
    }
    createExpense(expense){
        return axios.post(EXPENSE_API_BASE_URL, expense);
    }

    createUser(user){
        return axios.post(USER_API_BASE_URL,user);
    }

    loginuser(email,password){
        return axios.get(USER_API_BASE_URL+'/'+email + '/' + password);
    }

    getExpenseById(expenseId){
        return axios.get(EXPENSE_API_BASE_URL + '/' + expenseId);
    }

    updateExpense(expense, expenseId){
        return axios.put(EXPENSE_API_BASE_URL + '/' + expenseId, expense);
    }

    deleteExpense(expenseId){
        return axios.delete(EXPENSE_API_BASE_URL + '/' + expenseId);
    }

    // getExpenseByCategory(expenseCategory){
    //     return axios.get(EXPENSE_API_BASE_URL,+ '/' + {params: expenseCategory});
    // }
}

export default new ExpenseService()