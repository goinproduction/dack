package com.example.java_backend.payload.response;

public class MessageResponse {
  private String message;
  private Boolean status;
  
  public MessageResponse(Boolean status, String message) {
    this.message = message;
    this.status = status;
  }

  public Boolean getStatus() {
	return status;
  }

  public void setStatus(Boolean status) {
	this.status = status;
  }

	public String getMessage() {
    return message;
  }

  public void setMessage(String message) {
    this.message = message;
  }
}
