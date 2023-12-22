package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Register;
import com.example.demo.repo.UserRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

	@Autowired
	private UserRepository repo;

	@PostMapping("/reguser")
	public ResponseEntity<Register> registerUser(@RequestBody Register reguser) {
		System.out.println("Data is stored into the database");
		return ResponseEntity.ok(repo.save(reguser));
	}

	@PostMapping("/login")
	public ResponseEntity<String> loginRegister(@RequestParam("username") String fullname,
			@RequestParam("password") String password) {
		Register savedUser = repo.findByFullname(fullname);
		if (savedUser != null && savedUser.getNewPassword().equals(password)) {
			return ResponseEntity.ok("Welcome " + savedUser.getFullname());
		} else {
			return ResponseEntity.badRequest().body("Wrong credentials");
		}
	}
}