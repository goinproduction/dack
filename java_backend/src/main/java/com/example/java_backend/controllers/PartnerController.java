package com.example.java_backend.controllers;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.java_backend.models.Grocery;
import com.example.java_backend.models.Seller;
import com.example.java_backend.models.Shipper;
import com.example.java_backend.models.User;
import com.example.java_backend.payload.response.MessageResponse;
import com.example.java_backend.repository.GroceryRepository;
import com.example.java_backend.repository.SellerRepository;
import com.example.java_backend.repository.ShipperRepository;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/partner")
public class PartnerController {
	
	@Autowired
	SellerRepository sellerRepository;
	
	@Autowired
	ShipperRepository shipperRepository;
	
	@Autowired
	GroceryRepository groceryRepository;
	
	@PostMapping("/seller")
	public ResponseEntity<?> addSeller(@RequestBody Seller seller) {
		try {
			Seller _seller = new Seller(seller.getSellerId(), seller.getBusinessCer());
			_seller.setIsAccepted(false);
			sellerRepository.save(_seller);
			return ResponseEntity.ok(new MessageResponse(true, "Thông tin người bán đã được cập nhật!"));
	    } catch (Exception e) {
	    	return ResponseEntity.ok(new MessageResponse(false, "Internal Server Error"));
	    }
	}
	
	@PostMapping("/shipper")
	public ResponseEntity<?> addShipper(@RequestBody Shipper shipper) {
		try {
			Shipper _shipper = new Shipper(shipper.getShipperId(), shipper.getDriverLicense(), shipper.getBankAccountNumber(), shipper.getBankName(),
					shipper.getFrontLicense(), shipper.getBehindLicense(), shipper.getVaccineCer());
			_shipper.setIsAccepted(false);
			shipperRepository.save(_shipper);
			return ResponseEntity.ok(new MessageResponse(true, "Đăng ký hỗ trợ giao hàng thành công, thông tin của bạn đã được lưu lại và hệ thống sẽ phản hồi đến bạn trong 3-5 ngày làm việc!"));
	    } catch (Exception e) {
	    	return ResponseEntity.ok(new MessageResponse(false, "Internal Server Error"));
	    }
	}
	
	@PostMapping("/grocery")
	public ResponseEntity<?> addGrocery(@RequestBody Grocery grocery) {
		try {		
			Grocery _grocery = new Grocery(grocery.getSellerId(), grocery.getName(), grocery.getGroAddress(), grocery.getTypeOfBusiness(), grocery.getTaxNumber(), grocery.getBusinessField(),
					grocery.getAvailbleProduct(), grocery.getAvgAvailbleProduct(),grocery.getAvgOrder(), grocery.getGroRoadName(), grocery.getGroApartmentNumber());
			groceryRepository.save(_grocery);
			return ResponseEntity.ok(new MessageResponse(true, "Đăng ký bán hàng thành công, thông tin của bạn đã được lưu lại và hệ thống sẽ phản hồi đến bạn trong 3-5 ngày làm việc!"));
	    } catch (Exception e) {
	    	return ResponseEntity.ok(new MessageResponse(false, "Internal Server Error"));
	    }
	}
	
	 @GetMapping ("/grocery/{id}")
	public ResponseEntity<?> getGroById(@PathVariable("id") Long id){
		try {
			Optional<Grocery> _grocery = groceryRepository.findById(id);
			if(_grocery.isEmpty()){
		        return ResponseEntity.ok(new MessageResponse(false, "Mã cửa hàng không hợp lệ!"));
			}
		    return new ResponseEntity<>(_grocery, HttpStatus.OK);
		} catch (Exception e) { 
		    return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}