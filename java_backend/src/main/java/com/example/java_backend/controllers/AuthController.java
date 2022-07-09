package com.example.java_backend.controllers;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.java_backend.models.User;
import com.example.java_backend.payload.request.LoginRequest;
import com.example.java_backend.payload.request.SignupRequest;
import com.example.java_backend.payload.response.JwtResponse;
import com.example.java_backend.payload.response.MessageResponse;
import com.example.java_backend.repository.UserRepository;
import com.example.java_backend.security.jwt.JwtUtils;
import com.example.java_backend.security.services.UserDetailsImpl;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/auth")
public class AuthController {
  @Autowired
  AuthenticationManager authenticationManager;
  
  @Autowired
  UserRepository userRepository;

  @Autowired
  PasswordEncoder encoder;

  @Autowired
  JwtUtils jwtUtils;

  @PostMapping("/signin")
  public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {

    Authentication authentication = authenticationManager.authenticate(
        new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));

    SecurityContextHolder.getContext().setAuthentication(authentication);
    String jwt = jwtUtils.generateJwtToken(authentication);
    
    UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();    

    return ResponseEntity.ok(new JwtResponse(jwt, 
                         userDetails.getId(), 	
                         userDetails.getUsername(), 
                         userDetails.getEmail(), 
                         userDetails.getRole(),
                         userDetails.getIsLocked()));
  }

  @PostMapping("/signup")
  public ResponseEntity<?> registerUser(@Valid @RequestBody SignupRequest signUpRequest) {
    if (userRepository.existsByUsername(signUpRequest.getUsername())) {
      return ResponseEntity
          .badRequest()
          .body(new MessageResponse(false, "Tên người dùng đã tồn tại!"));
    }

    if (userRepository.existsByEmail(signUpRequest.getEmail())) {
      return ResponseEntity
          .badRequest()
          .body(new MessageResponse(false, "Email đã tồn tại!"));
    }

    // Create new user's account
    User user = new User(signUpRequest.getUsername(), signUpRequest.getFullName(), signUpRequest.getGender(), signUpRequest.getIdentityNumber(),
    		signUpRequest.getDateOfBirth(), signUpRequest.getPhone(), signUpRequest.getAddress(), signUpRequest.getRoadName(), 
    		signUpRequest.getApartmentNumber(), signUpRequest.getEmail(), encoder.encode(signUpRequest.getPassword()), signUpRequest.getArea(),
    		signUpRequest.getFrontIdentity(), signUpRequest.getBehindIdentity());
    
    // role=1: Buyer
    user.setRole(1);	
    
    // isLocked=false -> non-lock
    user.setIsLocked(false);
    
    
    userRepository.save(user);
    return ResponseEntity.ok(new MessageResponse(true, "Đăng ký thành công!"));
  }
  
  @PostMapping("/lock/{id}")
  public ResponseEntity<?> lockAccount(@PathVariable("id") long id){
	  try {
			Optional<User> userData = userRepository.findById(id);
			if(userData.isPresent()) {
				userRepository.lockUserById(id);
				return ResponseEntity.ok(new MessageResponse(true, "Vô hiệu hóa tài khoản thành công!"));
			}else {
				return ResponseEntity.ok(new MessageResponse(false, "Tài khoản không tồn tại, vui lòng kiểm tra lại!"));
			}
	} catch (Exception e) {
		// TODO: handle exception
		 return ResponseEntity.ok(new MessageResponse(false, "Internal Server Error"));
	}
  }
  
  @PostMapping("/unlock/{id}")
  public ResponseEntity<?> unlockAccount(@PathVariable("id") long id){
	  try {
			Optional<User> userData = userRepository.findById(id);
			if(userData.isPresent()) {
				userRepository.unlockUserById(id);
				return ResponseEntity.ok(new MessageResponse(true, "Kích hoạt tài khoản thành công!"));
			}else {
				return ResponseEntity.ok(new MessageResponse(false, "Tài khoản không tồn tại, vui lòng kiểm tra lại!"));
			}
	} catch (Exception e) {
		// TODO: handle exception
		 return ResponseEntity.ok(new MessageResponse(false, "Internal Server Error"));
	}
  }
  
  @PostMapping("/delete/{id}")
  public ResponseEntity<?> deleteAccount(@PathVariable("id") long id){
	  try {
			Optional<User> userData = userRepository.findById(id);
			if(userData.isPresent()) {
				userRepository.deleteUserById(id);
				return ResponseEntity.ok(new MessageResponse(true, "Xóa tài khoản thành công!"));
			}else {
				return ResponseEntity.ok(new MessageResponse(false, "Tài khoản không tồn tại, vui lòng kiểm tra lại!"));
			}
	} catch (Exception e) {
		// TODO: handle exception
		 return ResponseEntity.ok(new MessageResponse(false, "Không thể xóa đối tác!"));
	}
  }
  
  @GetMapping("/account")
  public ResponseEntity<?> getAllAccounts(){
	try {
		List<User> users = new ArrayList<User>();
		userRepository.findAll().forEach(users::add);
		if(users.isEmpty()){
	        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
	    return new ResponseEntity<>(users, HttpStatus.OK);
	} catch (Exception e) {
		// TODO: handle exception
	    return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
	}
  }
  
  @PutMapping("/role/{id}")
  public ResponseEntity<?> updateUserRole(@PathVariable("id") long id, @PathVariable("role") long role){
	try {
		Optional<User> userData = userRepository.findById(id);
		if(userData.isPresent()) {
			userRepository.updateUserRole(id, role);
			return ResponseEntity.ok(new MessageResponse(true, "Vai trò người dùng được cập nhật thành công!"));
		}else {
			return ResponseEntity.ok(new MessageResponse(false, "Tài khoản không tồn tại, vui lòng kiểm tra lại!"));
		}
	} catch (Exception e) {
		// TODO: handle exception
		 return ResponseEntity.ok(new MessageResponse(false, "Internal Server Error"));
	}
  }
  
  @GetMapping("/area/{area}")
  public ResponseEntity<?> getAreaLst(@PathVariable("area") Integer area){
	try {
		List<User> users = new ArrayList<User>();
		userRepository.findByArea(area).forEach(users::add);
		if(users.isEmpty()){
	        return ResponseEntity.ok(new MessageResponse(false, "Không có thông tin người dùng trong vùng này!"));
		}
	    return new ResponseEntity<>(users, HttpStatus.OK);
	} catch (Exception e) {
		// TODO: handle exception
	    return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
	}
  }
}
