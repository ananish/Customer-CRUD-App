package com.fullstack.customer.Service;

import com.fullstack.customer.entity.Customer;
import com.fullstack.customer.repository.CustomerRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CustomerService {

    private final CustomerRepository customerRepository;

    public CustomerService(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }

    public Customer postCustomer(Customer customer) {
        return customerRepository.save(customer);
    }

    public List<Customer> getAllCustomers() {
        return customerRepository.findAll();
    }

    public Customer getCustomerById(Long id) {
        Optional<Customer> optionalCustomer = customerRepository.findById(id);
        return optionalCustomer.orElse(null);
    }

    public Customer updateCustomer(Long id, Customer customer) {
        Optional<Customer> optionalCustomer = customerRepository.findById(id);

        if (optionalCustomer.isPresent()) {
            Customer existingCustomer = optionalCustomer.get();
            existingCustomer.setName(customer.getName());
            existingCustomer.setAge(customer.getAge());
            existingCustomer.setEmail(customer.getEmail());
            return customerRepository.save(existingCustomer);
        }

        return null;
    }

    public boolean deleteCustomer(Long id) {
        Optional<Customer> optionalCustomer = customerRepository.findById(id);

        if (optionalCustomer.isPresent()) {
            customerRepository.deleteById(id);
            return true;
        }

        return false;
    }
}