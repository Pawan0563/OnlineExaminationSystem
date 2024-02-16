package com.onlineexamination.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.onlineexamination.dto.LoginDTO;
import com.onlineexamination.dto.UserDTO;
import com.onlineexamination.model.Users;
import com.onlineexamination.resources.LoginMesage;
import com.onlineexamination.service.UserService;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class UserController {

//	private StudentService studentService;
	
	
	@Autowired
	private UserService userservice;
	

//	@PostMapping("/saveuser")
//	public Users saveUser(@RequestBody Users users ) {
//		return userservice.saveUser(users);
//		
//		
//	}

	
	

	 
	 @PostMapping("/save")
	    public String saveEmployee(@RequestBody UserDTO userDTO)
	    {
	        String id = userservice.addUsers(userDTO);
	        return id;
	    }
	 
	 
	    @PostMapping("/login")
	    public ResponseEntity<?> loginEmployee(@RequestBody LoginDTO loginDTO)
	    {
	        LoginMesage loginResponse = userservice.loginUsers(loginDTO);
	        return ResponseEntity.ok(loginResponse);
	    }
}