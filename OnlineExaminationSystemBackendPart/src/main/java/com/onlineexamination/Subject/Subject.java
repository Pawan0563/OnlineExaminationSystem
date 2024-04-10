package com.onlineexamination.Subject;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Subject {
    
	  @Id
	  @Column(name="subject_name")
	//  @OneToOne(cascade = CascadeType.ALL)

	  private String name;
	  
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	  
	  
}
