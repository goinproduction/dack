package com.example.java_backend.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.java_backend.models.Shipper;

@Repository
public interface ShipperRepository extends JpaRepository<Shipper, String>{
	Optional<Shipper> findByShipperId(String shipperId);
}