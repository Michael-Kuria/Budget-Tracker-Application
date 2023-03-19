package com.michael.budgetTracker.repository;

import com.michael.budgetTracker.model.Transaction;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.ListCrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface TransactionRepository extends ListCrudRepository<Transaction, UUID> {

//    @Query(value ="SELECT t.id, t.amount, t.date, t.description FROM transactions t, categories c WHERE t.category_id=c.id ORDER BY t.date", nativeQuery = true)
//    List<Transaction> findAllTransactions();
}
