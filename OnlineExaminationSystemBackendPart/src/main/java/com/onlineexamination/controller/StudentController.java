//package com.onlineexamination.controller;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.onlineexamination.dto.LoginDTO;
//import com.onlineexamination.dto.StudentDTO;
//import com.onlineexamination.resources.LoginMesage;
//import com.onlineexamination.service.StudentService;
//
//
//@CrossOrigin(origins = "http://localhost:3000")
//@RestController
//public class StudentController {
//	@Autowired
//	private StudentService studentService;
//	
//	
//	
//
////	@PostMapping("/saveuser")
////	public Users saveUser(@RequestBody Users users ) {
////		return userservice.saveUser(users);
////		
////		
////	}
//
//	
//	 @PostMapping("/saves")
//	    public String saveEmployee(@RequestBody StudentDTO studentDTO)
//	    {
//	        String id = studentService.addUsers(studentDTO);
//	        return id;
//	    }
//
//	 
//	
//	    @PostMapping("/logins")
//	    public ResponseEntity<?> loginEmployee(@RequestBody LoginDTO loginDTO)
//	    {
//	        LoginMesage loginResponse = studentService.loginStudent(loginDTO);
//	        return ResponseEntity.ok(loginResponse);
//	    }
//}