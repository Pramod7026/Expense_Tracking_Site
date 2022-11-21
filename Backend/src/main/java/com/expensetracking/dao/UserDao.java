package com.expensetracking.dao;

import java.util.List;

import com.expensetracking.model.User;

public interface UserDao {
	public User createUser(User user);      
	public List<User> findAll(String email,String password);
	public List<User> findAll();
	public User getByUserId(Long id);
	//public ResponseEntity<User> getByEmailid(String emailId);
}

