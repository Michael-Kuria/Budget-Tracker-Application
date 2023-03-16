package com.michael.budgetTracker.repository;

import com.michael.budgetTracker.model.Year;
import org.springframework.data.repository.ListCrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface YearRepository  extends ListCrudRepository<Year, Integer> {
}
