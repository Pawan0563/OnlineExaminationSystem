package com.onlineexamination.repositary;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import com.onlineexamination.model.Users;


@EnableJpaRepositories
@Repository
public interface UserRepo extends JpaRepository<Users,Integer>{
	Optional<Users> findOneByEmailAndPassword(String email, String password);
	Users findByEmail(String email);

}
