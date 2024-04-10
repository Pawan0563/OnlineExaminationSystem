package com.onlineexamination.Faculty;


import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FacultyRepository extends JpaRepository<Faculty, Integer> {
Optional<Faculty> findByEmail(String email);
//    Faculty findByUsername(String username);
   // Faculty findByPassword(String password);

Optional<Faculty> findById(Long id);

void deleteById(Long id);
	
	


}
