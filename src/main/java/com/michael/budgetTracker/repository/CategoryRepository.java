package com.michael.budgetTracker.repository;

import com.michael.budgetTracker.model.Category;
import com.michael.budgetTracker.model.CategoryAndSum;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.ListCrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface CategoryRepository extends ListCrudRepository<Category, UUID> {
    @Query(value ="SELECT c.name as NAME, SUM(t.amount) as AMOUNT FROM transactions t, categories c WHERE t.category_id=c.id GROUP BY c.name", nativeQuery = true)
    List<CategoryAndSum> findCategoriesAndSum();
}
