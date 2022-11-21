package com.expensetracking.dao.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.expensetracking.dao.UserDao;
import com.expensetracking.model.User;
import com.expensetracking.repository.UserRepository;

@Repository
public class UserDaoImpl implements UserDao{
	
	@Autowired
	UserRepository userRepository;
	
	@Override
	public User createUser(User user) {
		return userRepository.save(user);
	}

	@Override
	public List<User> findAll(String email, String password) { 
		return userRepository.findAll(email,password);
	}

	@Override
	public List<User> findAll() {
		return userRepository.findAll();
	}

	@Override
	public User getByUserId(Long id) {
		Optional<User> user=userRepository.findById(id);
		if(user.isPresent())
			return user.get();
		else
			return null;
		}

//	@Override
//	public ResponseEntity<User> getByEmailid(String emailId) {
//		return userRepository.getByEmailid(emailId);
//	}
}
