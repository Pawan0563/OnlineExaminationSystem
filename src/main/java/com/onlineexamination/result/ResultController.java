package com.onlineexamination.result;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.onlineexamination.student.User;
import com.onlineexamination.student.UserRepository;

@RestController
@CrossOrigin("*")
public class ResultController {

    @Autowired
    private ResultService resultService;

    @Autowired
    private UserRepository userRepository; // Inject UserRepository to save User entities

    // Get all results present in the database
    @GetMapping("/result")
    public List<Result> getAllResult() {
        return resultService.getAllResults();
    }

    @PostMapping("/result")
    public Result addNewResult(@RequestBody Result result) {
        // Extract user details from the result entity
        User user = result.getEmail(); // Get the User object directly from the Result entity
        String userEmail = user.getEmail(); // Retrieve the email from the user object
        
        if (userEmail == null || userEmail.isEmpty()) {
            // If the user email is null or empty, handle it appropriately
            // For example, you can return an error response or log a message
        }

        // Now you have the user email, you can use it as needed
        // For example, you can save it to a database, send an email, etc.

        userRepository.save(user); // Save the user

        result.setEmail(user); // Set the user in the result entity
        return resultService.addNewResult(result);
    }

    // Get all results of a particular student 
    @GetMapping("/user/{email}/result")
    public List<Result> getAllResultForStudent(@PathVariable("email") String email) {
        return resultService.getAllResultsForStudent(email);
    }
}
