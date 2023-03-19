package com.michael.budgetTracker.controller;

import com.michael.budgetTracker.model.Budget;
import com.michael.budgetTracker.service.BudgetService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;

@RestController
@RequestMapping("/api/budget")
public class BudgetController {

    private final BudgetService service;

    public BudgetController(BudgetService service) {
        this.service = service;
    }

    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Budget getBudgetById(@PathVariable LocalDate id){
        return service.getBudgetById(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void saveBudget(@RequestBody Budget budget){
        service.saveBudget(budget);
    }
}
