CREATE TABLE roles (
    role_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    role_name VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE users (
    user_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    phone VARCHAR(15),
    password VARCHAR(255),
    role_id BIGINT NOT NULL,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_users_role
        FOREIGN KEY (role_id)
        REFERENCES roles(role_id)
);

CREATE TABLE dark_store (
    store_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    store_name VARCHAR(100) NOT NULL,
    latitude DOUBLE NOT NULL,
    longitude DOUBLE NOT NULL,
    delivery_radius_km DOUBLE DEFAULT 5,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE store_admin (
    store_admin_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    user_id BIGINT NOT NULL,
    store_id BIGINT NOT NULL,

    CONSTRAINT fk_store_admin_user
        FOREIGN KEY (user_id)
        REFERENCES users(user_id),

    CONSTRAINT fk_store_admin_store
        FOREIGN KEY (store_id)
        REFERENCES dark_store(store_id),

    CONSTRAINT uq_store_admin UNIQUE (store_id)
);

CREATE TABLE product (
    product_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    category VARCHAR(50),
    price DECIMAL(10,2) NOT NULL,
    is_active BOOLEAN DEFAULT TRUE
);

CREATE TABLE inventory (
    inventory_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    store_id BIGINT NOT NULL,
    product_id BIGINT NOT NULL,
    quantity INT NOT NULL,
    is_available BOOLEAN DEFAULT TRUE,

    CONSTRAINT fk_inventory_store
        FOREIGN KEY (store_id)
        REFERENCES dark_store(store_id),

    CONSTRAINT fk_inventory_product
        FOREIGN KEY (product_id)
        REFERENCES product(product_id),

    CONSTRAINT uq_store_product UNIQUE (store_id, product_id)
);

CREATE TABLE orders (
    order_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    user_id BIGINT NOT NULL,
    store_id BIGINT NOT NULL,
    delivery_partner_id BIGINT,
    order_status VARCHAR(30) NOT NULL,
    total_amount DECIMAL(10,2),
    delivery_latitude DOUBLE NOT NULL,
    delivery_longitude DOUBLE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_orders_user
        FOREIGN KEY (user_id)
        REFERENCES users(user_id),

    CONSTRAINT fk_orders_store
        FOREIGN KEY (store_id)
        REFERENCES dark_store(store_id),

    CONSTRAINT fk_orders_delivery_partner
        FOREIGN KEY (delivery_partner_id)
        REFERENCES users(user_id)
);


CREATE TABLE order_item (
    order_item_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    order_id BIGINT NOT NULL,
    product_id BIGINT NOT NULL,
    quantity INT NOT NULL,
    price DECIMAL(10,2) NOT NULL,

    CONSTRAINT fk_order_item_order
        FOREIGN KEY (order_id)
        REFERENCES orders(order_id),

    CONSTRAINT fk_order_item_product
        FOREIGN KEY (product_id)
        REFERENCES product(product_id)
);

CREATE TABLE delivery_partner (
    delivery_partner_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    user_id BIGINT NOT NULL UNIQUE,
    is_online BOOLEAN DEFAULT FALSE,
    current_latitude DOUBLE,
    current_longitude DOUBLE,

    CONSTRAINT fk_delivery_partner_user
        FOREIGN KEY (user_id)
        REFERENCES users(user_id)
);

CREATE TABLE delivery_assignment (
    assignment_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    order_id BIGINT NOT NULL UNIQUE,
    delivery_partner_id BIGINT NOT NULL,
    status VARCHAR(30),
    assigned_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_assignment_order
        FOREIGN KEY (order_id)
        REFERENCES orders(order_id),

    CONSTRAINT fk_assignment_partner
        FOREIGN KEY (delivery_partner_id)
        REFERENCES delivery_partner(delivery_partner_id)
);

CREATE TABLE delivery_location_log (
    log_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    delivery_partner_id BIGINT NOT NULL,
    latitude DOUBLE NOT NULL,
    longitude DOUBLE NOT NULL,
    logged_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_location_log_partner
        FOREIGN KEY (delivery_partner_id)
        REFERENCES delivery_partner(delivery_partner_id)
);
