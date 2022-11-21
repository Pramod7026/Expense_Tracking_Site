package com.expensetracking.repository;



import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.expensetracking.model.Expense;
//import com.expensetracking.model.User;

@Repository
public interface ExpenseRepository extends JpaRepository<Expense, Long>{
//	@Query("SELECT t FROM Expense t WHERE t.category=?1 and t.user.id= ?2")
//	List<Expense> findByCategoryAndId(String category,Long id);
}
