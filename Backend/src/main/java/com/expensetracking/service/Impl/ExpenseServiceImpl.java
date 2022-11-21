package com.expensetracking.service.Impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.expensetracking.dao.ExpenseDao;
import com.expensetracking.model.Expense;
//import com.expensetracking.model.User;
import com.expensetracking.service.ExpenseService;

@Service
public class ExpenseServiceImpl implements ExpenseService{
	@Autowired
	ExpenseDao expenseDao;

	@Override
	public Expense createUser(Expense expense) {
		return expenseDao.createUser(expense);
	}

	@Override
	public List<Expense> findAll() {
		return expenseDao.findAll();
	}
//	@Override
//	public List<Expense> findByCategoryAndId(String category, Long id) {
//		return expenseDao.findByCategoryAndId(category, id);
//	}
	
}
