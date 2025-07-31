package com.doctor_app.backend.Service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.doctor_app.backend.Entity.Doctor;
import com.doctor_app.backend.Repository.DoctorRepository;

@Service
public class DoctorService {
    private final DoctorRepository repo;

    public DoctorService(DoctorRepository repo) {
        this.repo = repo;
    }

    public List<Doctor> listDoctors(String city, String specialty) {
        return repo.findByCityContainingAndSpecialtyContaining(city, specialty);
    }

    public Doctor saveDoctor(Doctor doctor) {
        return repo.save(doctor);
    }
}
