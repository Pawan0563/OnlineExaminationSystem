package com.onlineexamination.Faculty;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

//FacultyService.java
@Service
public class FacultyService {
	@Autowired
	private FacultyRepository facultyRepository;

	public Faculty signup(Faculty faculty) {
		// Perform validations here if needed

		// Check if email is already registered
		if (facultyRepository.findByEmail(faculty.getEmail()).isPresent()) {
			throw new RuntimeException("Email is already registered!");
		}

		return facultyRepository.save(faculty);
	}


    public Optional<Faculty> findByEmail(String email) {
        return facultyRepository.findByEmail(email);
    }
    

    public Optional<Faculty> findById(int id) {
        return facultyRepository.findById(id);
    }

    public List<Faculty> findAll() {
        return facultyRepository.findAll();
    }

    public Faculty update(int id, Faculty faculty) {
        // Fetch the existing faculty
        Optional<Faculty> optionalFaculty = facultyRepository.findById(id);
        if (optionalFaculty.isPresent()) {
            Faculty existingFaculty = optionalFaculty.get();
            // Update the existing faculty fields
            existingFaculty.setFirstName(faculty.getFirstName());
            existingFaculty.setEmail(faculty.getEmail());
            // Save the updated faculty
            return facultyRepository.save(existingFaculty);
        }
        return null; // Or throw an exception if needed
    }

    public void deleteById(int id) {
        facultyRepository.deleteById(id);
    }
	

}
