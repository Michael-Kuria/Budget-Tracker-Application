package com.michael.budgetTracker.config;

import com.michael.budgetTracker.model.Budget;
import com.michael.budgetTracker.model.Category;
import com.michael.budgetTracker.service.BudgetService;
import com.michael.budgetTracker.service.CategoryService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.time.LocalDate;

/**
 * Using this to initialize the categories table instead of using a schema, with the @component commented out this will not run
 */
@Component
public class DataLoader implements CommandLineRunner {

    private final BudgetService budgetService;
    private final CategoryService categoryService;

    public DataLoader(BudgetService budgetService, CategoryService categoryService) {
        this.categoryService = categoryService;
        this.budgetService = budgetService;
    }


    @Override
    public void run(String... args) throws Exception {

        Budget budget = new Budget(LocalDate.parse("2023-03-01"), LocalDate.parse("2023-03-31"), 30000, "Minimalistic living");

        if(budgetService.budgetCount() == 0)
            budgetService.saveBudget(budget);

        if(categoryService.categoryCount() == 0) {

            Category category1 = new Category(1,"Housing", 10000, "Your housing usage");
            Category category2 = new Category(2,"Transportation", 10000, "Your housing usage");
            Category category3 = new Category(3,"Food", 10000, "Your housing usage");
            Category category4 = new Category(4,"Utilities", 10000, "Your housing usage");
            Category category5 = new Category(5,"Clothing", 10000, "Your housing usage");
            Category category6 = new Category(6,"Medical", 10000, "Your housing usage");
            Category category7 = new Category(7,"Household_Supplies", 10000, "Your housing usage");
            Category category8 = new Category(8, "Personal", 10000, "Your housing usage");
            Category category9 = new Category(9,"Debt", 10000, "Your housing usage");

            categoryService.saveCategory(category1);
            categoryService.saveCategory(category2);
            categoryService.saveCategory(category3);
            categoryService.saveCategory(category4);
            categoryService.saveCategory(category5);
            categoryService.saveCategory(category6);
            categoryService.saveCategory(category7);
            categoryService.saveCategory(category8);
            categoryService.saveCategory(category9);

        }


    }
}
