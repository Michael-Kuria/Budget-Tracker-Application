package com.michael.budgetTracker.service;

import com.michael.budgetTracker.exceptions.ObjectNotFoundException;
import com.michael.budgetTracker.model.Budget;
import com.michael.budgetTracker.model.dto.BudgetTotal;
import com.michael.budgetTracker.model.dto.MonthAndYear;
import com.michael.budgetTracker.repository.BudgetRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.Month;
import java.time.Year;
import java.time.YearMonth;
import java.util.*;

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
       List<Budget> rslt = repository.findAll();
       Collections.sort(rslt);
       return rslt;
    }

    public Budget getBudgetByMonth(String month){
        return repository.findByMonth(month).stream().findFirst().get();
    }

    public Budget getBudgetByMonthAndYear(String month, int year){
        Optional<Budget> budget = repository.findByMonthAndYear(month, year);

        if(budget.isPresent())
            return budget.get();

        throw new ObjectNotFoundException("Budget for the month " + month + " and year "+ year +" was not found");
    }

    public List<MonthAndYear> getBudgetMonthAndYear(){
        List<MonthAndYear> rslt = repository.findMonthAndYear();
        Collections.sort(rslt, (o1, o2) -> o1.getYear() > o2.getYear()? -1 :
                o1.getYear() < o2.getYear() ? 1 :
                        Month.valueOf(o2.getMonth().toUpperCase()).compareTo(Month.valueOf(o1.getMonth().toUpperCase())));
        return rslt;
    }

    public BudgetTotal getBudgetTotal(){
        return repository.findTotalBudget();
    }

    public void deleteBudget(UUID id) {
        repository.deleteById(id);
    }
}
