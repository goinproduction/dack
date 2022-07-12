package com.example.java_backend.models;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "groceries")
public class Grocery {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long Id;
	
	private String sellerId;
	
	private String name;
	
	private String groAddress;
	
	private String typeOfBusiness;
	
	private String taxNumber;

	private String businessField;
	
	private Long availbleProduct;
	
	private Long avgAvailbleProduct;
	
	private Long avgOrder;
	
	private String groRoadName;
	
	private String groApartmentNumber;

	public Long getId() {
		return Id;
	}

	public void setId(Long id) {
		Id = id;
	}

	public String getSellerId() {
		return sellerId;
	}

	public void setSellerId(String sellerId) {
		this.sellerId = sellerId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getGroAddress() {
		return groAddress;
	}

	public void setGroAddress(String groAddress) {
		this.groAddress = groAddress;
	}

	public String getTypeOfBusiness() {
		return typeOfBusiness;
	}

	public void setTypeOfBusiness(String typeOfBusiness) {
		this.typeOfBusiness = typeOfBusiness;
	}

	public String getTaxNumber() {
		return taxNumber;
	}

	public void setTaxNumber(String taxNumber) {
		this.taxNumber = taxNumber;
	}

	public String getBusinessField() {
		return businessField;
	}

	public void setBusinessField(String businessField) {
		this.businessField = businessField;
	}

	public Long getAvailbleProduct() {
		return availbleProduct;
	}

	public void setAvailbleProduct(Long availbleProduct) {
		this.availbleProduct = availbleProduct;
	}

	public Long getAvgAvailbleProduct() {
		return avgAvailbleProduct;
	}

	public void setAvgAvailbleProduct(Long avgAvailbleProduct) {
		this.avgAvailbleProduct = avgAvailbleProduct;
	}

	public Long getAvgOrder() {
		return avgOrder;
	}

	public void setAvgOrder(Long avgOrder) {
		this.avgOrder = avgOrder;
	}

	public String getGroRoadName() {
		return groRoadName;
	}

	public void setGroRoadName(String groRoadName) {
		this.groRoadName = groRoadName;
	}

	public String getGroApartmentNumber() {
		return groApartmentNumber;
	}

	public void setGroApartmentNumber(String groApartmentNumber) {
		this.groApartmentNumber = groApartmentNumber;
	}

	public Grocery() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Grocery(String sellerId, String name, String groAddress, String typeOfBusiness, String taxNumber,
			String businessField, Long availbleProduct, Long avgAvailbleProduct, Long avgOrder, String groRoadName,
			String groApartmentNumber) {
		super();
		this.sellerId = sellerId;
		this.name = name;
		this.groAddress = groAddress;
		this.typeOfBusiness = typeOfBusiness;
		this.taxNumber = taxNumber;
		this.businessField = businessField;
		this.availbleProduct = availbleProduct;
		this.avgAvailbleProduct = avgAvailbleProduct;
		this.avgOrder = avgOrder;
		this.groRoadName = groRoadName;
		this.groApartmentNumber = groApartmentNumber;
	}
	
}
