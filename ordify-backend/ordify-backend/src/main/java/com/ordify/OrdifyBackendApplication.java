package com.ordify;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.boot.autoconfigure.orm.jpa.HibernateJpaAutoConfiguration;

@SpringBootApplication
public class OrdifyBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(OrdifyBackendApplication.class, args);
	}

}
