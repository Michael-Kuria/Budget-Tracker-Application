package com.michael.budgetTracker.service;

import com.michael.budgetTracker.exceptions.ObjectNotFoundException;
import com.michael.budgetTracker.model.Category;
import com.michael.budgetTracker.model.CategoryAndSum;
import com.michael.budgetTracker.repository.CategoryRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.Month;
import java.time.Year;
import java.time.YearMonth;
import java.util.List;
import java.util.UUID;

@Service
public class CategoryService {

    private final CategoryRepository repository;

    public CategoryService(CategoryRepository repository) {
        this.repository = repository;
    }

    public Category getCategoryById(int id){
        return repository.findById(id).orElseThrow(() ->
         new ObjectNotFoundException(String.format("Category with id %s was not found", id))
        );
    }

    public void saveCategory(Category category){
        repository.save(category);
    }

    public List<Category> getAllCategories() {
        return repository.findAll();
    }
    public List<CategoryAndSum> getCategoriesAndSum(){
        return repository.findCategoriesAndSum();
    }
    public List<CategoryAndSum> getCategoriesAndSumForAMonth(Year year, Month month){
        YearMonth yearMonth = YearMonth.of(year.getValue(), month.getValue());
        LocalDate start = yearMonth.atDay(1);
        LocalDate end = yearMonth.atEndOfMonth();
        return repository.findCategoriesAndSumForAMonth(start, end);
    }

    public long categoryCount() {
        return repository.count();
    }
}
