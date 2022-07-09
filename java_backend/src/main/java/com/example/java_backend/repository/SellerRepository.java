package com.example.java_backend.repository;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.java_backend.models.Seller;

@Repository
public interface SellerRepository extends JpaRepository<Seller,Long>{
	Optional<Seller> findBySellerId(Long sellerId);
}