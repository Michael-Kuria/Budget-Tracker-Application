package com.michael.budgetTracker.repository;

import com.michael.budgetTracker.model.Month;
import org.springframework.data.repository.ListCrudRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface MonthRepository extends ListCrudRepository<Month, UUID> {
}
