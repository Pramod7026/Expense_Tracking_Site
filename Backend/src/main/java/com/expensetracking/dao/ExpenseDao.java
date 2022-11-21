package com.expensetracking.dao;

import java.util.List;

import com.expensetracking.model.Expense;

public interface ExpenseDao {
	public Expense createUser(Expense expense); 
	public List<Expense> findAll();
	//List<Expense> findByCategoryAndId(String category,Long id);
}
