
package com.onlineexamination.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;


import com.onlineexamination.dto.LoginDTO;
import com.onlineexamination.resources.LoginMesage;
import com.onlineexamination.dto.UserDTO;
import com.onlineexamination.model.Users;
import com.onlineexamination.repositary.UserRepo;


@Service
//public class UserServiceImpl implements  UserService{
//
//	@Autowired
//	private UserRepo userRepo;
//
//	@Override
//	public Users saveUser(Users user) {
//		Users newuser = userRepo.save(user);
//
//		return newuser;
//	}
//
//	@Override
//	public String addUsers(UserDTO userDTO) {
//		// TODO Auto-generated method stub
//		return null;
//	}
//
//}
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepo userRepo;

//    @Autowired
   // private PasswordEncoder passwordEncoder;

    @Override
    public String addUsers(UserDTO userDTO) {

        Users us = new Users(

                userDTO.getId(),
                userDTO.getFirstName(),
                userDTO.getLastName(),
                userDTO.getEmail(),
                userDTO.getPassword()

//              this.passwordEncoder.encode(userDTO.getPassword())
            
        );

        userRepo.save(us);

        return us.getFirstName();
    }
    UserDTO userDTO;

    @Override
    public LoginMesage  loginUsers(LoginDTO loginDTO) {
        String msg = "";
        Users us1 = userRepo.findByEmail(loginDTO.getEmail());
        if (us1 != null) {
            String password = loginDTO.getPassword();
           Optional<Users> user = userRepo.findOneByEmailAndPassword(loginDTO.getEmail(), password);
			if (user.isPresent()) {
			    return new LoginMesage("Login Success", true);
			} else {
			    return new LoginMesage("Login Failed", false);
			}
        }else {
            return new LoginMesage("Email not exits", false);
        }


    }

	
	

}