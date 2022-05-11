package com.example.demo.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;


@RestController
@RequestMapping("/")
public class Home {
    
    @GetMapping(value="")
    public String getMethodName() {
        return "Hello, World!!";
    }
    
}
