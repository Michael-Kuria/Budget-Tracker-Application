package com.michael.budgetTracker.controller;


import com.michael.budgetTracker.model.Transaction;
import com.michael.budgetTracker.model.dto.MonthAndYear;
import com.michael.budgetTracker.service.TransactionsService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.time.Month;
import java.time.Year;
import java.util.List;
import java.util.UUID;


@RestController
@RequestMapping("/api/transaction")
public class TransactionsController {

    private final TransactionsService service;

    public TransactionsController(TransactionsService service) {
        this.service = service;
    }

    @GetMapping("/{id}")
    public Transaction getTransactionById(@PathVariable("id") UUID id){
       return service.getTransactionById(id);
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<Transaction> getAllTransactions(){
        return service.getAllTransactions();
    }

    @GetMapping("/{year}/{month}")
    public List<Transaction> getAllTransactionsForAMonth(@PathVariable Year year, @PathVariable Month month){
        List<Transaction> all = service.getAllTransactionsForAMonth(year,month);
        all.forEach(System.out::println);
        return all;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void saveTransaction(@Valid @RequestBody Transaction transaction){
        System.out.println(transaction);
        service.saveTransaction(transaction);

    }

    @PutMapping
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void updateTransaction(@Valid @RequestBody Transaction transaction){
        System.out.println(transaction);
        service.saveTransaction(transaction);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void deleteTransaction(@PathVariable("id")UUID id){
        service.deleteTransactionById(id);
    }




}

