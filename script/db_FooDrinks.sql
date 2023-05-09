DROP DATABASE IF EXISTS `db_foodrinks`;
CREATE DATABASE `db_foodrinks`;
USE `db_foodrinks`;

CREATE TABLE `users` (
   `Id` INT NOT NULL AUTO_INCREMENT,
   `avatar` VARCHAR(255),
   `name` VARCHAR(255) NOT NULL,
   `last_name` VARCHAR(255) NOT NULL,
   `email` VARCHAR(255) NOT NULL,
   `user_name` VARCHAR(255) NOT NULL,
   `password` VARCHAR(255) NOT NULL,
   `confirm_password` VARCHAR(255) NOT NULL,
   `rol_id` INT NOT NULL,
   `created_at` TIMESTAMP DEFAULT current_timestamp,
   `updated_at` TIMESTAMP DEFAULT current_timestamp,
   `deleted_at` TIMESTAMP NULL,
   PRIMARY KEY (`Id`)
);

CREATE TABLE `rols` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `rol_name` VARCHAR(255) NOT NULL,
   `created_at` TIMESTAMP DEFAULT current_timestamp,
   `updated_at` TIMESTAMP DEFAULT current_timestamp,
   `deleted_at` TIMESTAMP NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `products` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `name` VARCHAR(255) NOT NULL,
   `description` VARCHAR(255) NOT NULL,
   `price` INT NOT NULL,
   `varietal_id` INT,
   `year` VARCHAR(255),
   `origen_id` INT,
   `region_id` INT,
   `category_id` INT,
   `image` VARCHAR(255),
   `brand_id` INT,
   `created_at` TIMESTAMP DEFAULT current_timestamp,
   `updated_at` TIMESTAMP DEFAULT current_timestamp,
   `deleted_at` TIMESTAMP NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `categories` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `category_name` VARCHAR(255),
   `created_at` TIMESTAMP DEFAULT current_timestamp,
   `updated_at` TIMESTAMP DEFAULT current_timestamp,
   `deleted_at` TIMESTAMP NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `brands` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `brand_name` VARCHAR(255),
   `created_at` TIMESTAMP DEFAULT current_timestamp,
   `updated_at` TIMESTAMP DEFAULT current_timestamp,
   `deleted_at` TIMESTAMP NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `varietals` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `varietal_name` VARCHAR(255),
   `created_at` TIMESTAMP DEFAULT current_timestamp,
   `updated_at` TIMESTAMP DEFAULT current_timestamp,
   `deleted_at` TIMESTAMP NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `regions` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `region` VARCHAR(255),
   `created_at` TIMESTAMP DEFAULT current_timestamp,
   `updated_at` TIMESTAMP DEFAULT current_timestamp,
   `deleted_at` TIMESTAMP NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `origins` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `country` VARCHAR(255),
   `created_at` TIMESTAMP DEFAULT current_timestamp,
   `updated_at` TIMESTAMP DEFAULT current_timestamp,
   `deleted_at` TIMESTAMP NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `payments` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `method` VARCHAR(255) NOT NULL,
   `installments` INT NOT NULL,
   `created_at` TIMESTAMP DEFAULT current_timestamp,
   `updated_at` TIMESTAMP DEFAULT current_timestamp,
   `deleted_at` TIMESTAMP NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `carts` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `total` DECIMAL NOT NULL,
   `payment_id` INT NOT NULL,
   `item_id` INT NOT NULL,
   `user_id` INT NOT NULL,
   `created_at` TIMESTAMP DEFAULT current_timestamp,
   `updated_at` TIMESTAMP DEFAULT current_timestamp,
   `deleted_at` TIMESTAMP NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `cart_products` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `quantity` INT NOT NULL,
   `product_id` INT NOT NULL,
   `cart_id` INT NOT NULL,
   `created_at` TIMESTAMP DEFAULT current_timestamp,
   `updated_at` TIMESTAMP DEFAULT current_timestamp,
   `deleted_at` TIMESTAMP NULL,
   PRIMARY KEY (`id`)
);


ALTER TABLE `users` ADD CONSTRAINT `FK_4bfcf1cb-2214-4f31-8bf9-cd7efbfcbde3` FOREIGN KEY (`rol_id`) REFERENCES `rols`(`id`)  ;

ALTER TABLE `products` ADD CONSTRAINT `FK_aa5da438-93ee-4483-9232-7324259e146f` FOREIGN KEY (`category_id`) REFERENCES `categories`(`id`)  ;

ALTER TABLE `products` ADD CONSTRAINT `FK_21b631f8-e568-4fb8-aeb2-14c69d48b335` FOREIGN KEY (`region_id`) REFERENCES `regions`(`id`)  ;

ALTER TABLE `products` ADD CONSTRAINT `FK_6f707b59-4c32-4aad-8e81-9bc1dc660f9f` FOREIGN KEY (`brand_id`) REFERENCES `brands`(`id`)  ;

ALTER TABLE `products` ADD CONSTRAINT `FK_c7ee9f63-461c-4a5a-8d6d-0d5fffa7c2d4` FOREIGN KEY (`varietal_id`) REFERENCES `varietals`(`id`)  ;

ALTER TABLE `products` ADD CONSTRAINT `FK_a197ec21-7134-448d-abbd-2b75d6f6d247` FOREIGN KEY (`origen_id`) REFERENCES `origins`(`id`)  ;

ALTER TABLE `carts` ADD CONSTRAINT `FK_976da1cc-9734-4ccf-a424-2ffa4f6babd2` FOREIGN KEY (`payment_id`) REFERENCES `payments`(`id`)  ;

ALTER TABLE `carts` ADD CONSTRAINT `FK_ef9f9a39-a025-4152-ad87-8a0c7b952386` FOREIGN KEY (`user_id`) REFERENCES `users`(`Id`)  ;

ALTER TABLE `cart_products` ADD CONSTRAINT `FK_2d377a53-6eac-4d14-b90b-5d0f97c4e8c8` FOREIGN KEY (`product_id`) REFERENCES `products`(`id`)  ;

ALTER TABLE `cart_products` ADD CONSTRAINT `FK_2f4e0464-0a0c-4157-ac16-d04d348c1afe` FOREIGN KEY (`cart_id`) REFERENCES `carts`(`id`)  ;
