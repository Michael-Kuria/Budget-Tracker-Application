package com.michael.budgetTracker.repository;

import com.michael.budgetTracker.model.Category;
import com.michael.budgetTracker.model.CategoryAndSum;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.ListCrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;
import java.util.UUID;

@Repository
public interface CategoryRepository extends ListCrudRepository<Category, Integer> {
    @Query(value ="SELECT c.name as NAME, SUM(t.amount) as AMOUNT FROM transactions t, categories c WHERE t.category_id=c.id " +
            "GROUP BY c.name", nativeQuery = true)
    List<CategoryAndSum> findCategoriesAndSum();

    @Query(value = "SELECT c.name as NAME, SUM(t.amount) as AMOUNT FROM transactions t, categories c WHERE t.category_id=c.id " +
            "AND t.date BETWEEN :start AND :end GROUP BY c.name" , nativeQuery = true)
    List<CategoryAndSum> findCategoriesAndSumForAMonth(@Param("start") LocalDate start, @Param("end") LocalDate end);
}
