package com.onlineexamination.admin;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

//FacultyService.java
@Service
public class AdminService {
	@Autowired
	private AdminRepository adminRepository;
//
//	public Faculty signup(Faculty faculty) {
//		// Perform validations here if needed
//
//		// Check if email is already registered
//		if (facultyRepository1.findByEmail(faculty.getEmail()).isPresent()) {
//			throw new RuntimeException("Email is already registered!");
//		}
//
//		return facultyRepository1.save(faculty);
//	}


    public Optional<Admin> findByEmail(String email) {
        return adminRepository.findByEmail(email);
    }
	

}
