package com.swan.agora;

import com.swan.agora.repositories.TileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Import;

@Import(MongoConfig.class)
@SpringBootApplication()
public class AgoraApplication {
	@Autowired
	private TileRepository repository;
	public static void main(String[] args) {
		SpringApplication.run(AgoraApplication.class, args);
	}

}
