package com.michael.budgetTracker.service;

import com.michael.budgetTracker.model.Category;
import com.michael.budgetTracker.repository.CategoryRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class CategoryService {

    private final CategoryRepository repository;

    public CategoryService(CategoryRepository repository) {
        this.repository = repository;
    }

    public Category getCategoryById(UUID id){
        Optional<Category> category = repository.findById(id);
        if(category.isPresent()){
            return category.get();
        }

        throw new IllegalArgumentException("Category with id " + id + " was not found");
    }

    public void saveCategory(Category category){
        repository.save(category);
    }

    public List<Category> getAllCategories() {
        return repository.findAll();
    }
}
