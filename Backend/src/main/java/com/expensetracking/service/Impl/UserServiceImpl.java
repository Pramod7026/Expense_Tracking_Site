package com.expensetracking.service.Impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.expensetracking.dao.UserDao;
import com.expensetracking.model.User;
import com.expensetracking.service.UserService;

@Service
public class UserServiceImpl implements UserService{
	@Autowired
	UserDao userDao;
	
	@Override
	public User createUser(User user) {
		return userDao.createUser(user);
	}
	@Override
	public String findAll(String email, String password) {
		List<User> Login=  userDao.findAll(email, password);

		if(Login.isEmpty())
			return "The username or password is incorect";
		else
			return "The user is logged in";
		
	}
	@Override
	public List<User> findAll() {
		return userDao.findAll();
	}
	@Override
	public User getByUserId(Long id) {
		// TODO Auto-generated method stub
		return userDao.getByUserId(id);
	}
}