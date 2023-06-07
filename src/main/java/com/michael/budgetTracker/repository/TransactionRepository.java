package com.michael.budgetTracker.repository;

import com.michael.budgetTracker.model.Transaction;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.ListCrudRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;
import java.util.UUID;

@Repository
public interface TransactionRepository extends ListCrudRepository<Transaction, UUID> {

    List<Transaction> findAllByOrderByModificationDateDesc();
    List<Transaction> findAllByDateBetween(LocalDate start, LocalDate end);



}
