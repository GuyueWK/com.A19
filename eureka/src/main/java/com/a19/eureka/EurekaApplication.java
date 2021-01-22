package com.a19.eureka;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@SpringBootApplication
@EnableEurekaServer
public class EurekaApplication {
//访问注册中心 http://localhost:9900/
    public static void main(String[] args) {
        SpringApplication.run(EurekaApplication.class, args);
    }

}
