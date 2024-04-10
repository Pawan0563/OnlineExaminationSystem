package com.onlineexamination.Faculty;

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
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")
public class FacultyController<LoginForm> {

	@Autowired
	private FacultyRepository facultyRepository;
	@Autowired
	private FacultyService facultyService;

	@PostMapping("/facultysignup")
	public ResponseEntity<?> signup(@RequestBody Faculty faculty) {
		try {

			Faculty newFaculty = facultyService.signup(faculty);
			return ResponseEntity.ok(newFaculty);
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
	}


    @PostMapping("/facultylogin")
    public ResponseEntity<String> login(@RequestBody FacultyLoginRequest request) {
        Optional<Faculty> facultyOptional = facultyService.findByEmail(request.getEmail());

        if (facultyOptional.isPresent()) {
            Faculty faculty = facultyOptional.get();
            if (faculty.getPassword().equals(request.getPassword())) {
                return ResponseEntity.ok("Login successful");
            }
        }

        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid email or password");
    }
    
    @GetMapping("/faculty/{id}")
    public ResponseEntity<?> getFacultyById(@PathVariable("id") int id) {
        Optional<Faculty> facultyOptional = facultyService.findById(id);
        return facultyOptional.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/faculty")
    public ResponseEntity<?> getAllFaculty() {
        return ResponseEntity.ok(facultyService.findAll());
    }

    @PutMapping("/faculty/{id}")
    public ResponseEntity<?> updateFaculty(@PathVariable("id") int id, @RequestBody Faculty faculty) {
        Faculty updatedFaculty = facultyService.update(id, faculty);
        if (updatedFaculty != null) {
            return ResponseEntity.ok(updatedFaculty);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/faculty/{id}")
    public ResponseEntity<?> deleteFaculty(@PathVariable("id") int id) {
        try {
            facultyService.deleteById(id);
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }
    
    
    

}
