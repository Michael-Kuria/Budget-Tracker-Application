package com.michael.budgetTracker.model;

public enum UserPermission {
    READ("read"),
    WRITE("write");

    private final String permission;

    UserPermission(String permission){
        this.permission = permission;
    }

    public String getPermission(){
        return permission;
    }
}
