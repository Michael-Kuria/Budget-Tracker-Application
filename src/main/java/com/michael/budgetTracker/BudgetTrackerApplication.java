package com.michael.budgetTracker;

import com.michael.budgetTracker.service.CategoryService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class BudgetTrackerApplication {

	public static void main(String[] args) {
		SpringApplication.run(BudgetTrackerApplication.class, args);


	}

//	/**
//	 * We can utilize this instead of the dataloader class
//	 * @return
//	 */
//
//	@Bean CommandLineRunner commandLineRunner(CategoryService service){
//		return args -> {
//
//		};
//	}

}
