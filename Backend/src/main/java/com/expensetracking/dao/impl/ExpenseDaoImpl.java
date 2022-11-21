package com.expensetracking.dao.impl;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.expensetracking.dao.ExpenseDao;

import com.expensetracking.model.Expense;
//import com.expensetracking.model.User;
import com.expensetracking.repository.ExpenseRepository;

@Repository
public class ExpenseDaoImpl implements ExpenseDao{

	@Autowired
	private ExpenseRepository expenseRepository;

	@Override
	public Expense createUser(Expense expense) {
		
		return expenseRepository.save(expense);
	}
	@Override
	public List<Expense> findAll() {
		return expenseRepository.findAll();
	}
//	@Override
//	public List<Expense> findByCategoryAndId(String category, Long id) {
//		return expenseRepository.findByCategoryAndId(category, id);
//	}
//	
//	@Override
//	public List<Expense> findByCategoryAndId(String category, Long id) {
//		// TODO Auto-generated method stub
//		return null;
//	}
}
