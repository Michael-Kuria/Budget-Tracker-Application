package com.michael.budgetTracker.controller;

import com.michael.budgetTracker.model.Category;
import com.michael.budgetTracker.model.CategoryAndSum;
import com.michael.budgetTracker.service.CategoryService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/category")
public class CategoryController {

    private final CategoryService service;

    public CategoryController(CategoryService service) {
        this.service = service;
    }

    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.FOUND)
    public Category getCategoryById(@PathVariable UUID id){
        return service.getCategoryById(id);
    }


    @GetMapping
    @ResponseStatus(HttpStatus.FOUND)
    public List<Category> getAllCategories(){
        return service.getAllCategories();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void saveCategory(@RequestBody Category category){
        service.saveCategory(category);
    }

    @GetMapping("/categories-and-sum")
    public List<CategoryAndSum> findCategoriesAndSum(){
        return service.getCategoriesAndSum();
    }


}
