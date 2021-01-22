package com.a19.server.controller;

import com.a19.server.services.TestServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/test")
public class TestController {

    @Autowired
    private TestServices testServices;

    @RequestMapping("/get")
    public String get(String name) {
        return testServices.get(name);
    }
}