package com.onlineexamination.Question;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("http://localhost:3000/")
public class QuestionController {
   
	 @Autowired
	  private QuestionRepository questionRepository; 
	   
	   
	 //to show all question present in database
	 @GetMapping("/question")
	 public List<Question> getAllQuestion(){
		 return (List<Question>) this.questionRepository.findAll(); 
	 }
	 
	 @GetMapping("/question/{id}")
	    public ResponseEntity<Question> getQuestionById(@PathVariable(value = "id") Long questionId) {
	        Optional<Question> questionOptional = questionRepository.findById(questionId);
	        
	        if (questionOptional.isPresent()) {
	            return ResponseEntity.ok().body(questionOptional.get());
	        } else {
	            return ResponseEntity.notFound().build();
	        }
	    }
	
	 //add a question in a particular exam   
	 @PostMapping("/question")
	 public Question addNewQuestion(@RequestBody Question question ){
		 return this.questionRepository.save(question); 
	 }
	 
	 
	 //to get details of all question of that particular exam(ofcourse using exam_id)  
	 @GetMapping("/exam/{id}/question")
	 public List<Question> getAllQuestionForExam(@PathVariable("id") int id){
		 return this.questionRepository.findByEnameId(id);
	 }
	 
	 
	 //edit a question in a particular exam
	 @PutMapping("/question/{id}")
	  public Question updateQuestion(@PathVariable("id") int id , @RequestBody Question question) {
	  	   	 question.setId(id);
		  return this.questionRepository.save(question); 
	  }
	 
	 
	 // delete a question in a particular exam
	 @DeleteMapping("/question/{id}")
	 public void deleteQuestion(@PathVariable("id") int id) {
		 this.questionRepository.deleteById(id);
	 }
	 
	 
}
