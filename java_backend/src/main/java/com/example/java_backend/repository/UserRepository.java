package com.example.java_backend.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.example.java_backend.models.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
  Optional<User> findByUsername(String username);
 
  List<User> findByArea(Integer area);
  
  @Transactional
  @Modifying
  @Query("UPDATE User SET isLocked=true WHERE id=:id")
  void lockUserById(Long id);
  
  @Transactional
  @Modifying
  @Query("UPDATE User SET isLocked=false WHERE id=:id")
  void unlockUserById(Long id);
  
  @Transactional
  @Modifying
  @Query("DELETE FROM User WHERE id=:id")
  void deleteUserById(Long id);
  
  @Transactional
  @Modifying
  @Query("UPDATE User SET role=:role WHERE id=:id")
  void updateUserRole(Long id, Long role);
  
  Boolean existsByUsername(String username);

  Boolean existsByEmail(String email);
}
