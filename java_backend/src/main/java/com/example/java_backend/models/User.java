package com.example.java_backend.models;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Entity
@Table(name = "users", 
    uniqueConstraints = { 
      @UniqueConstraint(columnNames = "username"),
      @UniqueConstraint(columnNames = "email") 
    })
public class User {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @NotBlank
  @Size(max = 20)
  private String username;

  @NotBlank
  @Size(max = 100)
  private String fullName;
  
  @NotBlank
  @Size(max = 20)
  private String gender;
  
  private Long identityNumber;
  
  private String dateOfBirth;
  
  private Long phone;
  
  private String address;
  

  private String roadName;
  
  private String apartmentNumber;
  
  private String frontIdentity;
  
  private String behindIdentity;
  
  @NotBlank
  @Size(max = 50)
  @Email
  private String email;

  @NotBlank
  @Size(max = 120)
  private String password;

  private Boolean isLocked;
  
  private Integer role;

  private Integer area;
  
  public User() {
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getUsername() {
    return username;
  }

  public void setUsername(String username) {
    this.username = username;
  }

  public Integer getRole() {
	return role;
  }

  public void setRole(Integer role) {
	this.role = role;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public Boolean getIsLocked() {
	return isLocked;
  }

  public void setIsLocked(Boolean isLocked) {
	this.isLocked = isLocked;
  }

  public Integer getArea() {
	return area;
  }

  public void setArea(Integer area) {
	 this.area = area;
  }

  public String getFullName() {
	return fullName;
  }

public void setFullName(String fullName) {
	this.fullName = fullName;
}

public String getGender() {
	return gender;
}

public void setGender(String gender) {
	this.gender = gender;
}

public Long getIdentityNumber() {
	return identityNumber;
}

public void setIdentityNumber(Long identityNumber) {
	this.identityNumber = identityNumber;
}

public String getDateOfBirth() {
	return dateOfBirth;
}

public void setDateOfBirth(String dateOfBirth) {
	this.dateOfBirth = dateOfBirth;
}

public Long getPhone() {
	return phone;
}

public void setPhone(Long phone) {
	this.phone = phone;
}

public String getAddress() {
	return address;
}

public void setAddress(String address) {
	this.address = address;
}

public String getRoadName() {
	return roadName;
}

public void setRoadName(String roadName) {
	this.roadName = roadName;
}

public String getApartmentNumber() {
	return apartmentNumber;
}

public void setApartmentNumber(String apartmentNumber) {
	this.apartmentNumber = apartmentNumber;
}

public String getFrontIdentity() {
	return frontIdentity;
}

public void setFrontIdentity(String frontIdentity) {
	this.frontIdentity = frontIdentity;
}

public String getBehindIdentity() {
	return behindIdentity;
}

public void setBehindIdentity(String behindIdentity) {
	this.behindIdentity = behindIdentity;
}

public User(@NotBlank @Size(max = 20) String username, @NotBlank @Size(max = 100) String fullName,
		@NotBlank @Size(max = 20) String gender, Long identityNumber, String dateOfBirth, Long phone, String address,
		String roadName, String apartmentNumber, @NotBlank @Size(max = 50) @Email String email,
		@NotBlank @Size(max = 120) String password, Integer area, String frontIdentity, String behindIdentity) {
		this.username = username;
		this.fullName = fullName;
		this.gender = gender;
		this.identityNumber = identityNumber;
		this.dateOfBirth = dateOfBirth;
		this.phone = phone;
		this.address = address;
		this.roadName = roadName;
		this.apartmentNumber = apartmentNumber;
		this.email = email;
		this.password = password;
		this.area = area;
		this.frontIdentity= frontIdentity;
		this.behindIdentity = behindIdentity;
}
}
