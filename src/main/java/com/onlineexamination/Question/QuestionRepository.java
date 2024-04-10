package com.onlineexamination.Question;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface QuestionRepository extends CrudRepository<Question, Integer> {
	
	public List<Question> findByEnameId(int id);

	public Optional<Question> findById(Long questionId);

}
