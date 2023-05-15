package com.michael.budgetTracker.controller;

import com.michael.budgetTracker.model.Budget;
import com.michael.budgetTracker.service.BudgetService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/api/budget")
public class BudgetController {

    private final BudgetService service;

    public BudgetController(BudgetService service) {
        this.service = service;
    }

    @GetMapping("/{id}")
    public Budget getBudgetById(@PathVariable LocalDate id){
        return service.getBudgetById(id);
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<Budget> getBudgetById(){
        return service.getAllBudgets();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void saveBudget(@RequestBody Budget budget){
        service.saveBudget(budget);
    }
}
