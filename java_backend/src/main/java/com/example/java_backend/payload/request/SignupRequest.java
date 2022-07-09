package com.example.java_backend.payload.request;
import javax.validation.constraints.*;

import org.springframework.web.multipart.MultipartFile;

public class SignupRequest {
  @NotBlank
  @Size(min = 3, max = 20)
  private String username;

  @NotBlank
  @Size(max = 50)
  @Email
  private String email;

  @NotBlank
  @Size(min = 5, max = 40)
  private String password;

  private Integer area;
  
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

public String getUsername() {
    return username;
  }

  public void setUsername(String username) {
    this.username = username;
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

  public Integer getArea() {
	return area;
  }

  public void setArea(Integer area) {
	this.area = area;
  }
}
