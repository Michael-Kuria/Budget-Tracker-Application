package com.michael.budgetTracker;

import com.michael.budgetTracker.security.RsaKeys;
import com.michael.budgetTracker.service.CategoryService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;

@EnableConfigurationProperties(RsaKeys.class)
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
