package com.ecommerce.project.service;

import com.ecommerce.project.payload.AnalyticsResponse;
import com.ecommerce.project.model.AppRole;
import com.ecommerce.project.repositories.OrderRepository;
import com.ecommerce.project.repositories.ProductRepository;
import com.ecommerce.project.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AnalyticsServiceImpl implements AnalyticsService{

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private UserRepository userRepository;

    @Override
    public AnalyticsResponse getAnalyticsData() {
        AnalyticsResponse response = new AnalyticsResponse();

        long productCount = productRepository.count();
        long totalOrders = orderRepository.count();;
        Double totalRevenue = orderRepository.getTotalRevenue();
        long totalUsers = userRepository.count();
        long adminCount = userRepository.countDistinctByRoleName(AppRole.ROLE_ADMIN);
        long rawSellerCount = userRepository.countDistinctByRoleName(AppRole.ROLE_SELLER);
        long totalSellers = Math.max(0, rawSellerCount - adminCount);

        response.setProductCount(String.valueOf(productCount));
        response.setTotalOrders(String.valueOf(totalOrders));
        response.setTotalRevenue(String.valueOf(totalRevenue != null ? totalRevenue : 0));
        response.setTotalUsers(String.valueOf(totalUsers));
        response.setTotalSellers(String.valueOf(totalSellers));
        return response;
    }
}
