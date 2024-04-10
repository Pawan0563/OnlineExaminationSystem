package com.onlineexamination.admin;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class AdminLoginRequest {

	private String email;
	private String password;

	// Constructors, getters, and setters
}

