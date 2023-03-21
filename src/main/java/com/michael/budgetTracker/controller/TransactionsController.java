package com.michael.budgetTracker.controller;


import com.michael.budgetTracker.model.Transaction;
import com.michael.budgetTracker.service.TransactionsService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/transaction")
public class TransactionsController {

    private final TransactionsService service;

    public TransactionsController(TransactionsService service) {
        this.service = service;
    }

    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Transaction getTransactionById(@PathVariable String id){
       return service.getTransactionById(id);
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<Transaction> getAllTransactions(){
        return service.getAllTransactions();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void saveTransaction(@Valid @RequestBody Transaction transaction){
        service.saveTransaction(transaction);
    }

    @PutMapping
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void updateTransaction(@Valid @RequestBody Transaction transaction){
        System.out.println(transaction);
        service.saveTransaction(transaction);
    }




}

