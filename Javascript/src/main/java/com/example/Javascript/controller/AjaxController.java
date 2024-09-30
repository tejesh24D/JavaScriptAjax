package com.example.Javascript.controller;



import org.springframework.web.bind.annotation.*;

@RestController
public class AjaxController {

    @PostMapping("/submit")
    public String handleFormSubmit(@RequestParam String username, @RequestParam String email) {
        return "Form submitted! Username: " + username + ", Email: " + email;
    }

    @PostMapping("/ajax-submit")
    public String handleAjaxSubmit(@RequestParam String name) {
        return "Hello, " + name + "!";
    }
}
