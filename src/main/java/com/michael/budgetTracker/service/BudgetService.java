package com.michael.budgetTracker.service;

import com.michael.budgetTracker.exceptions.ObjectNotFoundException;
import com.michael.budgetTracker.model.Budget;
import com.michael.budgetTracker.repository.BudgetRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.Month;
import java.time.Year;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class BudgetService {

    private final BudgetRepository repository;

    public BudgetService(BudgetRepository repository) {
        this.repository = repository;
    }

    public Budget getBudgetById(UUID id){
        Optional<Budget> budget = repository.findById(id);
        if(budget.isPresent())
            return budget.get();

        throw new ObjectNotFoundException("Budget with id " + id + " was not found");
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

    public Budget getBudgetByMonth(String month){
        return repository.findByMonth(month).stream().findFirst().get();
    }

    public Budget getBudgetByMonthAndYear(Month month, Year year){
        Optional<Budget> budget = repository.findByMonthAndYear(month, year);

        if(budget.isPresent())
            return budget.get();

        throw new ObjectNotFoundException("Budget for the month " + month.name() + " and year "+year+" was not found");
    }

    public void deleteBudget(UUID id) {
        repository.deleteById(id);
    }
}
