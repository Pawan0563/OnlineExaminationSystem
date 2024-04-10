package com.onlineexamination.admin;
import java.util.Optional;

import javax.security.sasl.AuthenticationException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")
public class AdminController<LoginForm> {

	@Autowired
	private AdminRepository adminRepository;
	@Autowired
	private AdminService adminService;
//
//	@PostMapping("/facultysignup")
//	public ResponseEntity<?> signup(@RequestBody Faculty faculty) {
//		try {
//
//			Faculty newFaculty = facultyService.signup(faculty);
//			return ResponseEntity.ok(newFaculty);
//		} catch (Exception e) {
//			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
//		}
//	}


    @PostMapping("/adminlogin")
    public ResponseEntity<String> login(@RequestBody AdminLoginRequest request) {
        Optional<Admin> facultyOptional = adminService.findByEmail(request.getEmail());

        if (facultyOptional.isPresent()) {
            Admin ad = facultyOptional.get();
            if (ad.getPassword().equals(request.getPassword())) {
                return ResponseEntity.ok("Login successful");
            }
        }

        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid email or password");
    }

}
