package com.michael.budgetTracker.service;

import com.michael.budgetTracker.model.Transaction;
import com.michael.budgetTracker.repository.TransactionRepository;;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class TransactionsService {

    private final TransactionRepository repository;


    public TransactionsService(TransactionRepository repository) {
        this.repository = repository;
    }

    public Transaction getTransactionById(String id) throws IllegalArgumentException{
        Optional<Transaction> rslt = repository.findById(UUID.fromString(id));
        if(rslt.isPresent()){
            return rslt.get();
        }
        throw new IllegalArgumentException("Id not found");
    }

    public void saveTransaction(Transaction transaction){

        repository.save(transaction);
    }

    public List<Transaction> getAllTransactions() {
        return repository.findAll();
    }

}
