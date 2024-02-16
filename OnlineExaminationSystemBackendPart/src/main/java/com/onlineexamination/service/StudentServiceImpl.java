//package com.onlineexamination.service;
//
//import java.util.Optional;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.stereotype.Service;
//
//import com.onlineexamination.dto.LoginDTO;
//import com.onlineexamination.dto.StudentDTO;
//import com.onlineexamination.model.Student;
//import com.onlineexamination.repositary.StudentRepo;
//import com.onlineexamination.resources.LoginMesage;
//
//@Service
//public class StudentServiceImpl implements StudentService {
//	
//	 @Autowired
//	    private StudentRepo studentRepo;;
//
//	    @Autowired
//	    private PasswordEncoder passwordEncoder;
//
//		@Override
//	    public String addUsers(StudentDTO studentDTO) {
//
//	        Student us = new Student(
//
//	        		studentDTO.getId(),
//	        		studentDTO.getName(),
//	        		studentDTO.getRegNo(),
//	        		studentDTO.getEmail(),
//	        		studentDTO.getMobNo(),
//	        		studentDTO.getPassword(),
//	        		studentDTO.getConiformPassword()
//
//	            this.passwordEncoder.encode(studentDTO.getPassword())
//	            //this.passwordEncoder.encode(studentDTO.getConiformPassword())
//
//	            
//	        );
//
//	        studentRepo.save(us);
//
//	        return us.getName();
//	    }
//	    StudentDTO studentDTO;
//
//	    @Override
//	    public LoginMesage  loginStudent(LoginDTO loginDTO) {
//	        String msg = "";
//	        Student us1 = studentRepo.findByEmail(loginDTO.getEmail());
//	        if (us1 != null) {
//	            String password = loginDTO.getPassword();
//	            String encodedPassword = us1.getPassword();
//	            Boolean isPwdRight = passwordEncoder.matches(password, encodedPassword);
//	            if (isPwdRight) {
//	                Optional<Student> user = studentRepo.findOneByEmailAndPassword(loginDTO.getEmail(), encodedPassword);
//	                if (user.isPresent()) {
//	                    return new LoginMesage("Login Success", true);
//	                } else {
//	                    return new LoginMesage("Login Failed", false);
//	                }
//	            } else {
//
//	                return new LoginMesage("password Not Match", false);
//	            }
//	        }else {
//	            return new LoginMesage("Email not exits", false);
//	        }
//
//
//	    }
//
//}
