package com.expensetracking.service;

import java.util.List;
import com.expensetracking.model.Expense;
//import com.expensetracking.model.User;

public interface ExpenseService {
	Expense createUser(Expense expense);
	List<Expense> findAll();
	//List<Expense> findByCategoryAndId(String category,Long id);
}
