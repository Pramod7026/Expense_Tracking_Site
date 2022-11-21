package com.expensetracking.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.expensetracking.exception.ResourceNotFoundException;

import com.expensetracking.model.Expense;
import com.expensetracking.repository.ExpenseRepository;
import com.expensetracking.service.ExpenseService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class ExpenseController {
	
	@Autowired
	private ExpenseService expenseService;
	
	@Autowired
	private ExpenseRepository expenseRepository;
	@PostMapping("/expenses")      
	public void createUser(@RequestBody Expense expense) {
		expenseService.createUser(expense);
	}
	
	
	@GetMapping("/expenses")
	public List<Expense> getAllExpenses(){
		return expenseService.findAll();
	}
	
	
	
	// get expense by id rest api
	@GetMapping("/expenses/{id}")
	public ResponseEntity<Expense> getEmployeeById(@PathVariable Long id) {
		Expense expense = expenseRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Expense not exist with id :" + id));
		return ResponseEntity.ok(expense);
	}
	
	//Update expense using id
	@PutMapping("/expenses/{id}")
	public ResponseEntity<Expense> updateexpense(@PathVariable Long id, @RequestBody Expense expenseDetails){
		Expense expense = expenseRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Expense not exist with id :" + id));
		
		//expense.setExpense_category(expenseDetails.getExpense_category());
		expense.setExpense_date(expenseDetails.getExpense_date());
		expense.setExpense_name(expenseDetails.getExpense_name());
		expense.setExpense_price(expenseDetails.getExpense_price());
		expense.setCategory(expenseDetails.getCategory());
		Expense updatedexpense = expenseRepository.save(expense);
		return ResponseEntity.ok(updatedexpense);
	}
	
	// delete expense rest api
	@DeleteMapping("/expenses/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteexpense(@PathVariable Long id){
		Expense expense = expenseRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("expense not exist with id :" + id));
		
		expenseRepository.delete(expense);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
}
