package com.swan.agora;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Import;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@Import(MongoConfig.class)
@SpringBootApplication()
public class AgoraApplication {
	@Autowired
	private TileRepository repository;
	public static void main(String[] args) {
		SpringApplication.run(AgoraApplication.class, args);
	}

}
