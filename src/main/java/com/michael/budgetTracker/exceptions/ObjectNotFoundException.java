package com.michael.budgetTracker.exceptions;

public class ObjectNotFoundException extends RuntimeException{

    public ObjectNotFoundException(String message){
        super(message);
    }
}
