package com.michael.budgetTracker.controller;

import com.michael.budgetTracker.model.Budget;
import com.michael.budgetTracker.service.BudgetService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.time.Month;
import java.time.Year;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/budget")
public class BudgetController {

    private final BudgetService service;

    public BudgetController(BudgetService service) {
        this.service = service;
    }

    @GetMapping("/{id}")
    public Budget getBudgetById(@PathVariable UUID id){
        return service.getBudgetById(id);
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<Budget> getBudgetById(){
        return service.getAllBudgets();
    }

    @GetMapping("/{year}/{month}")
    public Budget getBudgetByYearAndMonth(@PathVariable Month month, @PathVariable Year year){
        return service.getBudgetByMonthAndYear(month, year);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void saveBudget(@RequestBody Budget budget){
        service.saveBudget(budget);
    }

    @DeleteMapping("/{id}")
    public void deleteBudget(@PathVariable UUID id){
        service.deleteBudget(id);
    }
}
