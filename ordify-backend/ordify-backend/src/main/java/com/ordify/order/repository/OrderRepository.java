package com.ordify.order.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.ordify.order.entity.Order;
import com.ordify.order.entity.OrderStatus;

public interface OrderRepository extends JpaRepository<Order, Long> {
	List<Order> findByOrderStatus(OrderStatus status);

	@Query("SELECT SUM(o.totalAmount) FROM Order o")
	Double sumTotalAmount();
	
	@Query(value = """
	    	SELECT o.*,
	    	(6371 * acos(
	    	    cos(radians(:lat)) * cos(radians(o.delivery_latitude)) * cos(radians(o.delivery_longitude) - radians(:lon)) +
	    	    sin(radians(:lat)) * sin(radians(o.delivery_latitude))
	    	)) AS distance
	    	FROM orders o
	    	WHERE o.order_status = 'PACKED'
	    	  AND o.delivery_partner_id IS NULL
	    	HAVING distance <= 5
	    	ORDER BY distance
	    	LIMIT :limit
	    	""", nativeQuery = true)
	  List<Order> findNearbyOrders(
		        @Param("lat") double lat,
		        @Param("lon") double lon,
		        @Param("limit") int limit
		    );
}