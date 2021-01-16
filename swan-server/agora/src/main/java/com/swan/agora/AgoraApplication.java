package com.swan.agora;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class AgoraApplication {
	@Autowired
	private TileRepository repository;
	public static void main(String[] args) {
		SpringApplication.run(AgoraApplication.class, args);
	}

}
