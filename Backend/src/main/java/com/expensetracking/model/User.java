package com.expensetracking.model;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;


@Entity
@Table(name="UserLogin", uniqueConstraints = @UniqueConstraint(columnNames = "emailId"))   //Table creation in database
public class User {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long id;
	
	@Column(name="Name")
	private String name;
	@Column(name="Emailid")
	private String email;
	@Column(name="Address")
	private String address;
	@Column(name="Password")
	private String password;
	@Column(name="PhoneNumber")
	private String phoneno;
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getPhoneno() {
		return phoneno;
	}
	public void setPhoneno(String phoneno) {
		this.phoneno = phoneno;
	}
	public User(String name, String email, String address, String password, String phoneno) {
		super();
		this.name = name;
		this.email = email;
		this.address = address;
		this.password = password;
		this.phoneno = phoneno;
	}
	public User() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
}
	
