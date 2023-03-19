package com.michael.budgetTracker.repository;

import com.michael.budgetTracker.model.Budget;
import org.springframework.data.repository.ListCrudRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;

@Repository
public interface BudgetRepository extends ListCrudRepository<Budget, LocalDate> {

}
