package com.michael.budgetTracker.service;

import com.michael.budgetTracker.model.Budget;
import com.michael.budgetTracker.repository.BudgetRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class BudgetService {

    private final BudgetRepository repository;

    public BudgetService(BudgetRepository repository) {
        this.repository = repository;
    }

    public Budget getBudgetById(LocalDate id){
        Optional<Budget> budget = repository.findById(id);
        if(budget.isPresent())
            return budget.get();

        throw new IllegalArgumentException("Budget with id " + id + " was not found");
    }

    public void saveBudget(Budget budget){
        repository.save(budget);
    }

    public long budgetCount(){
        return repository.count();
    }

    public List<Budget> getAllBudgets() {
       return repository.findAll();
    }

}
