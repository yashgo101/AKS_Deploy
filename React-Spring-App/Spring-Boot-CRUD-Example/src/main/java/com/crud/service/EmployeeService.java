package com.crud.service;

import com.crud.entity.Employee;

import java.util.List;

public interface EmployeeService {
    Employee save(Employee employee); // for save employee 
    List<Employee> getEmployees(); // get the list of employees
}
