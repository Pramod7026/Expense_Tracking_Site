package com.expensetracking.model;


import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;
//import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="Expense")
public class Expense {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	@Column(name = "Name")
	private String expense_name;
	@Column(name = "Price")
	private Float expense_price;
	@Column(name = "Date")
	private Date expense_date;
	
	@Column(name="Category")
	private String category;
	
//	@OneToMany
//    @JoinColumn(name = "expense_id", referencedColumnName = "id")
//	List<Category> category=new ArrayList<>();
//	
//	
//	public List<Category> getCategory() {
//		return category;
//	}
//	public void setCategory(List<Category> category) {
//		this.category = category;
//	}
	
//	@ManyToOne
//	//@JsonIgnore
//	@JoinColumn(name="userId",referencedColumnName = "id")
//	private User user;
//	
	public Expense(String expense_name, Float expense_price, Date expense_date, String category) {
	super();
	this.expense_name = expense_name;
	this.expense_price = expense_price;
	this.expense_date = expense_date;
	this.category = category;
}
//	public User getUser() {
//		return user;
//	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
//	public void setUser(User user) {
//		this.user = user;
//	}
	
	public Expense() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getExpense_name() {
		return expense_name;
	}
	public void setExpense_name(String expense_name) {
		this.expense_name = expense_name;
	}
	public Float getExpense_price() {
		return expense_price;
	}
	public void setExpense_price(Float expense_price) {
		this.expense_price = expense_price;
	}
	public Date getExpense_date() {
		return expense_date;
	}
	public void setExpense_date(Date expense_date) {
		this.expense_date = expense_date;
	}	
}