package com.michael.budgetTracker.repository;

import com.michael.budgetTracker.model.Category;
import org.springframework.data.repository.ListCrudRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface CategoryRepository extends ListCrudRepository<Category, UUID> {
}
