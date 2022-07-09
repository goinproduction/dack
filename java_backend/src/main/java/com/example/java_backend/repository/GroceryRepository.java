package com.example.java_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.java_backend.models.Grocery;

public interface GroceryRepository extends JpaRepository<Grocery, Long>{
}
