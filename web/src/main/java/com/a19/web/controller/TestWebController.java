package com.a19.web.controller;

import com.a19.server.apis.TestServicesApis;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/test")
public class TestWebController {
    //测试调用config模块
//    @Value("${aa.bb}")
//    String value;

    @Autowired
    private TestServicesApis testServicesApis;

    @RequestMapping("/getTest")
    public String getTest() {
        return testServicesApis.get("通过web调用的");
    }

    @RequestMapping("/value")
    public  String value() { return "value:" + "aabb"; }
}
