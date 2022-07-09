package com.example.java_backend.models;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "shippers")
public class Shipper {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private Long shipperId;
	
	private Long driverLicense;
	
	private Long bankAccountNumber;
	
	private String bankName;

	private String frontLicense;
	
	private String behindLicense;
	
	private String vaccineCer;
	
	private Boolean isAccepted;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getShipperId() {
		return shipperId;
	}

	public void setShipperId(Long shipperId) {
		this.shipperId = shipperId;
	}

	public Long getDriverLicense() {
		return driverLicense;
	}

	public void setDriverLicense(Long driverLicense) {
		this.driverLicense = driverLicense;
	}

	public Long getBankAccountNumber() {
		return bankAccountNumber;
	}

	public void setBankAccountNumber(Long bankAccountNumber) {
		this.bankAccountNumber = bankAccountNumber;
	}

	public String getBankName() {
		return bankName;
	}

	public void setBankName(String bankName) {
		this.bankName = bankName;
	}

	public String getFrontLicense() {
		return frontLicense;
	}

	public void setFrontLicense(String frontLicense) {
		this.frontLicense = frontLicense;
	}

	public String getBehindLicense() {
		return behindLicense;
	}

	public void setBehindLicense(String behindLicense) {
		this.behindLicense = behindLicense;
	}

	public String getVaccineCer() {
		return vaccineCer;
	}

	public void setVaccineCer(String vaccineCer) {
		this.vaccineCer = vaccineCer;
	}

	public Boolean getIsAccepted() {
		return isAccepted;
	}

	public void setIsAccepted(Boolean isAccepted) {
		this.isAccepted = isAccepted;
	}

	public Shipper(Long shipperId, Long driverLicense, Long bankAccountNumber, String bankName, String frontLicense,
			String behindLicense, String vaccineCer) {
		super();
		this.shipperId = shipperId;
		this.driverLicense = driverLicense;
		this.bankAccountNumber = bankAccountNumber;
		this.bankName = bankName;
		this.frontLicense = frontLicense;
		this.behindLicense = behindLicense;
		this.vaccineCer = vaccineCer;
	}
}