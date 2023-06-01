package com.michael.budgetTracker.repository;

import com.michael.budgetTracker.model.Budget;
import org.springframework.data.repository.ListCrudRepository;
import org.springframework.stereotype.Repository;

import java.time.Month;
import java.time.Year;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface BudgetRepository extends ListCrudRepository<Budget, UUID> {

    List<Budget> findByMonth(String month);
    Optional<Budget> findByMonthAndYear(Month month, Year year);

}
