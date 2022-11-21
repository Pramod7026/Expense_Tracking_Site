package com.expensetracking.service;

import java.util.List;

import com.expensetracking.model.User;

public interface UserService {
	User createUser(User user);
	public String findAll(String email,String password);
	public List<User> findAll();
	public User getByUserId(Long id);
}
