package com.michael.budgetTracker.config;

import com.michael.budgetTracker.model.Category;
import com.michael.budgetTracker.service.CategoryService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

/**
 * Using this to initialize the categories table instead of using a schema, with the @component commented out this will not run
 */
//@Component
public class DataLoader implements CommandLineRunner {

    private final CategoryService service;

    public DataLoader(CategoryService service) {
        this.service = service;
    }


    @Override
    public void run(String... args) throws Exception {
        Category category1 = new Category(1,"Housing", 10000, "Your housing usage");
        Category category2 = new Category(2,"Transportation", 10000, "Your housing usage");
        Category category3 = new Category(3,"Food", 10000, "Your housing usage");
        Category category4 = new Category(4,"Utilities", 10000, "Your housing usage");
        Category category5 = new Category(5,"Clothing", 10000, "Your housing usage");
        Category category6 = new Category(6,"Medical", 10000, "Your housing usage");
        Category category7 = new Category(7,"Household_Supplies", 10000, "Your housing usage");
        Category category8 = new Category(8, "Personal", 10000, "Your housing usage");
        Category category9 = new Category(9,"Debt", 10000, "Your housing usage");

        service.saveCategory(category1);
        service.saveCategory(category2);
        service.saveCategory(category3);
        service.saveCategory(category4);
        service.saveCategory(category5);
        service.saveCategory(category6);
        service.saveCategory(category7);
        service.saveCategory(category8);
        service.saveCategory(category9);

    }
}
