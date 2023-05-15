package com.michael.budgetTracker.service;

import com.michael.budgetTracker.exceptions.ObjectNotFoundException;
import com.michael.budgetTracker.model.Transaction;
import com.michael.budgetTracker.repository.TransactionRepository;;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class TransactionsService {

    private final TransactionRepository repository;


    public TransactionsService(TransactionRepository repository) {
        this.repository = repository;
    }

    public Transaction getTransactionById(UUID id){
        return repository.findById(id).orElseThrow( () ->
                new ObjectNotFoundException(String.format("Transaction with id %s was not found", id))
        );

    }

    public void saveTransaction(Transaction transaction){

        repository.save(transaction);
    }

    public List<Transaction> getAllTransactions() {
        return repository.findAllByOrderByModificationDateDesc();
    }

    public void deleteTransactionById(UUID id){
        repository.deleteById(id);
    }

}
