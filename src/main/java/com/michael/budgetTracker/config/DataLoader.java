package com.michael.budgetTracker.config;

import com.michael.budgetTracker.model.Budget;
import com.michael.budgetTracker.model.Category;
import com.michael.budgetTracker.model.User;
import com.michael.budgetTracker.model.UserRole;
import com.michael.budgetTracker.service.BudgetService;
import com.michael.budgetTracker.service.CategoryService;
import com.michael.budgetTracker.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.time.Month;
import java.time.Year;

/**
 * Using this to initialize the categories table, User table and budget table instead of using a schema, with the @component commented out this will not run
 */
@Component
@RequiredArgsConstructor
public class DataLoader implements CommandLineRunner {

    private final BudgetService budgetService;
    private final CategoryService categoryService;
    private final UserService userService;
    private final PasswordEncoder passwordEncoder;



    @Override
    public void run(String... args) throws Exception {

//        Budget budget = new Budget(Month.APRIL, Year.now(), 30000, "Minimalistic living");
//
//        if(budgetService.budgetCount() == 0)
//           budgetService.saveBudget(budget);

        if(categoryService.categoryCount() == 0) {

            Category category1 = new Category(1,"Housing", 10000, "Rent, mortgage");
            Category category2 = new Category(2,"Transportation", 10000, "Fuel, fare, uber");
            Category category3 = new Category(3,"Food", 10000, "Groceries, snacks");
            Category category4 = new Category(4,"Utilities", 10000, "gas, Water and electricity bills, internet, airtime");
            Category category5 = new Category(5,"Clothing", 10000, "clothes, shoes");
            Category category6 = new Category(6,"Medical", 10000, "Hospital bills, health insurance");
            Category category7 = new Category(7,"Household Items", 10000, "toilet paper, tooth paste, furniture");
            Category category8 = new Category(8, "Personal", 10000, "Personal enjoyment, ");
            Category category9 = new Category(9,"Loan", 10000, "Loan repayments");
            Category category10 = new Category(10,"Giving", 10000, "church and handouts");
            Category category11 = new Category(11,"Transaction costs", 10000, "transactions cost");
            Category category12 = new Category(12,"Learning", 10000, "Learning materials and courses");

            categoryService.saveCategory(category1);
            categoryService.saveCategory(category2);
            categoryService.saveCategory(category3);
            categoryService.saveCategory(category4);
            categoryService.saveCategory(category5);
            categoryService.saveCategory(category6);
            categoryService.saveCategory(category7);
            categoryService.saveCategory(category8);
            categoryService.saveCategory(category9);
            categoryService.saveCategory(category10);
            categoryService.saveCategory(category11);
            categoryService.saveCategory(category12);

        }

        if(userService.getCount() == 0){
            User user = new User("Michael", "mchege78@gmail.com", passwordEncoder.encode("password"), UserRole.ADMIN);
            userService.saveUser(user);
        }


    }
}
