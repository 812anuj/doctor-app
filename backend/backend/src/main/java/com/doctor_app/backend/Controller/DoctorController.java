package com.doctor_app.backend.Controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.doctor_app.backend.Entity.Doctor;
import com.doctor_app.backend.Service.DoctorService;

@RestController
@RequestMapping("/api/doctors")
@CrossOrigin(origins = "*")
public class DoctorController {
    private final DoctorService service;

    public DoctorController(DoctorService service) {
        this.service = service;
    }

    @GetMapping
    public List<Doctor> listDoctors(
      @RequestParam(defaultValue = "") String city,
      @RequestParam(defaultValue = "") String specialty
    ) {
        return service.listDoctors(city, specialty);
    }

    @PostMapping
    public Doctor addDoctor(@RequestBody Doctor doctor) {
        return service.saveDoctor(doctor);
    }
}
