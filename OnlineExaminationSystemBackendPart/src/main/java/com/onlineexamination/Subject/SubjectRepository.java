package com.onlineexamination.Subject;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;


@Repository
public interface SubjectRepository extends JpaRepository<Subject, String> {
	
	@Transactional
	public int deleteByName(String name);

}
