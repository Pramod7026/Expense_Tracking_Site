package com.expensetracking.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.expensetracking.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{
	@Query("SELECT t FROM User t WHERE t.email=?1 and t.password=?2")
	public List<User> findAll (String email,String password);
}
