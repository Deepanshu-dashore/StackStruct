import { getFolder, getFile } from "../../utils/tree-nodes";

/**
 * Resolves base structure for a Spring Boot backend.
 */
export function springBootFramework(config) {
  const packageName = "com.stackstruct.app";
  const packagePath = "src/main/java/com/stackstruct/app";

  return [
    getFolder("src/main/java/com/stackstruct/app", [
      getFile(
        "Application.java",
        `
package ${packageName};

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Application {
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}
        `.trim(),
      ),
      getFolder("controller", [
        getFile(
          "HealthController.java",
          `
package ${packageName}.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class HealthController {

    @GetMapping("/health")
    public Map<String, Object> healthCheck() {
        Map<String, Object> response = new HashMap<>();
        response.put("success", true);
        response.put("message", "API is running");
        response.put("timestamp", System.currentTimeMillis());
        return response;
    }
}
          `.trim(),
        ),
      ]),
    ]),
    getFolder("src/main/resources", [
      getFile(
        "application.properties",
        `
server.port=8080
spring.datasource.url=jdbc:postgresql://localhost:5432/mydb
spring.datasource.username=postgres
spring.datasource.password=password
spring.jpa.hibernate.ddl-auto=update
        `.trim(),
      ),
    ]),
    getFile(
      "pom.xml",
      `
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>3.1.0</version>
        <relativePath/>
    </parent>
    <groupId>com.stackstruct</groupId>
    <artifactId>app</artifactId>
    <version>0.0.1-SNAPSHOT</version>
    <name>app</name>
    <description>StackStruct Spring Boot App</description>
    <dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-data-jpa</artifactId>
        </dependency>
        <dependency>
            <groupId>org.postgresql</groupId>
            <artifactId>postgresql</artifactId>
            <scope>runtime</scope>
        </dependency>
    </dependencies>
    <build>
        <plugins>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
            </plugin>
        </plugins>
    </build>
</project>
      `.trim(),
    ),
    getFile(
      ".gitignore",
      "target/\n!.mvn/wrapper/maven-wrapper.jar\n.DS_Store\n.env",
    ),
  ];
}
