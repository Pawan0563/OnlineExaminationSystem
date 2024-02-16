package com.onlineexamination.repositary;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.onlineexamination.model.Student;

public interface StudentRepo extends JpaRepository<Student, Integer>{
	
	Optional<Student> findOneByEmailAndPassword(String email, String password);
	Student findByEmail(String email);

}
