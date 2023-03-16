package com.michael.budgetTracker.repository;

import com.michael.budgetTracker.model.Transaction;
import org.springframework.data.repository.ListCrudRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface TransactionRepository extends ListCrudRepository<Transaction, UUID> {
}
