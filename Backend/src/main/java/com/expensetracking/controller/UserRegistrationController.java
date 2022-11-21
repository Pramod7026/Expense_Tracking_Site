package com.expensetracking.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.expensetracking.model.User;
import com.expensetracking.service.UserService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class UserRegistrationController {
	
	@Autowired
	UserService userService;
	
	@PostMapping("/create")      //SignUP
	public void createUser(@RequestBody User user) {
		userService.createUser(user);
	}
	
	@GetMapping("/create/{email}/{password}")              //Login authentication
	public String getHello(@PathVariable String email,@PathVariable String password) {
		return userService.findAll(email, password);
	}
	
	@GetMapping("/Users")      //Getting all users
	public List<User> getAllusers(){
		return userService.findAll();
	}
	
	
	@GetMapping("/users/{id}")
	public User getUserById(@PathVariable Long id){
		return userService.getByUserId(id);
	}

}
