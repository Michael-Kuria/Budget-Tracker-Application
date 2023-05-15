package com.michael.budgetTracker.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.method.annotation.MethodArgumentTypeMismatchException;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

@ControllerAdvice
public class ControllerAdvisor {

    @ExceptionHandler(ObjectNotFoundException.class)
    public ResponseEntity<Object> handleObjectNotFoundException(ObjectNotFoundException ex, WebRequest request){
        Map<String, Object> map = new HashMap<>();
        map.put("timestamp", LocalDateTime.now());
        map.put("message", ex.getMessage());
        map.put("status", HttpStatus.NOT_FOUND);
        System.out.println("ObjectNotFoundException thrown");

        return new ResponseEntity<>(map,HttpStatus.NOT_FOUND);

    }

    @ExceptionHandler(AuthenticationException.class)
    public ResponseEntity<Object> handleUsernameNotFoundException(AuthenticationException ex, WebRequest request){
        Map<String, Object> map = new HashMap<>();
        map.put("timestamp", LocalDateTime.now());
        map.put("message", ex.getMessage());
        map.put("status", HttpStatus.UNAUTHORIZED);

        return new ResponseEntity<>(map,HttpStatus.UNAUTHORIZED);
    }

    /**
     * Exception that indicates that a method argument has not the expected type, e.g in the case of an id
     * @param ex
     * @param request
     * @return
     */
    @ExceptionHandler(MethodArgumentTypeMismatchException.class)
    public ResponseEntity<Object> handleMethodArgumentTypeMismatchException(MethodArgumentTypeMismatchException ex, WebRequest request){
        Map<String, Object> map = new HashMap<>();
        map.put("timestamp", LocalDateTime.now());
        String error = String.format("%s should be a valid %s and %s is not", ex.getName(), ex.getRequiredType().getSimpleName(), ex.getValue());
        map.put("message", error);
        map.put("status", HttpStatus.BAD_REQUEST);

        return new ResponseEntity<>(map, HttpStatus.BAD_REQUEST);
    }
}
