package com.doctor_app.backend.Repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.doctor_app.backend.Entity.Doctor;

public interface DoctorRepository extends JpaRepository<Doctor, Long> {
    List<Doctor> findByCityContainingAndSpecialtyContaining(String city, String specialty);
}
