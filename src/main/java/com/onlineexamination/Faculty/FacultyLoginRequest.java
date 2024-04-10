package com.onlineexamination.Faculty;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class FacultyLoginRequest {

	private String email;
	private String password;

	// Constructors, getters, and setters
}
