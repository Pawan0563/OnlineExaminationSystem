package com.onlineexamination.service;

import com.onlineexamination.dto.LoginDTO;
import com.onlineexamination.dto.UserDTO;
import com.onlineexamination.model.Users;
import com.onlineexamination.resources.LoginMesage;

public interface UserService {

	//public Users saveUser(Users user) ;
	String addUsers(UserDTO  userDTO);
	LoginMesage loginUsers(LoginDTO loginDTO);

	

}