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

INSERT INTO `brands` (`id`, `brand_name`) VALUES
(DEFAULT, 'Palo Alto'),
(DEFAULT, 'Gin Bosque'),
(DEFAULT, 'Buenos Aires Gin'),
(DEFAULT, 'Gin Aconcagua'),
(DEFAULT, 'Smirnoff');

INSERT INTO `categories` (`id`, `category_name`) VALUES
(DEFAULT, 'Vinos'),
(DEFAULT, 'Destilados');

INSERT INTO `origins` (`id`, `country`) VALUES
(DEFAULT, 'Argentina');

INSERT INTO `regions` (`id`, `region`) VALUES
(DEFAULT, 'Luján de Cuyo, Mendoza (1100 m S.N.M.)'),
(DEFAULT, 'Buenos Aires'),
(DEFAULT, 'Cordoba');

INSERT INTO `rols` (`id`, `rol_name`) VALUES
(1, 'user'),
(2, 'admin');

INSERT INTO `users` (`Id`, `avatar`, `name`, `last_name`, `email`, `user_name`, `password`, `confirm_password`, `rol_id`) VALUES
(DEFAULT, 'user-1680806462846.jpg', 'Lilian', 'Devico', 'ldevico@hotmail.com', 'lilian.devico', 'lilian1234', 'lilian1234', 1),
(DEFAULT, 'user-1678052139339.jpeg', 'Antonella', 'Rodríguez', 'rodriguez.antonella.n@gmail.com', 'anrrid', 'antonella1234', 'antonella1234', 1);

INSERT INTO `varietals` (`id`, `varietal_name`) VALUES
(DEFAULT, 'Cabernet Sauvignon'),
(DEFAULT, 'Malbec'),
(DEFAULT, 'Torrontes'),
(DEFAULT, 'Blend'),
(DEFAULT, 'Gin'),
(DEFAULT, 'Vodka');


INSERT INTO `products` (`id`, `name`, `description`, `price`, `varietal_id`, `year`, `origen_id`, `region_id`, `category_id`, `image`, `brand_id`) VALUES
(DEFAULT, 'Palo Alto Joven Cabernet Sauvignon', 'Muestra un color rojo rubí brillante con reflejos violáceos. Presta aromas característicos de lavariedad tales como el casis, la pimienta negra y el pimiento verde maduro.', 8000, 1, '2022', 1, 1, 1, 'palo_alto_joven-cabernet_sauvignon.png', 1),
(DEFAULT, 'Palo Alto Joven Malbec', 'Tiene un ataque dulce, de cuerpo medio, fresco y frutado en su paso por boca. Equilibrado, de taninos redondos, cálido y con una acidéz que resalta la fruta. Evoluciona hacia un finalpleno de notas tostadas, persistente y de agradable recuerdo.', 30000000, 2, '2022', 1, 1, 1, 'palo_alto_joven-malbec.png', 1),
(DEFAULT, 'Palo Alto Joven Torrontes', 'De entrada amable, es delicado y untuoso en su paso por boca, es dueño de una equilibrada acidez que aporta frescura a la fruta. Posee un persistente y cálido final.', 40000, 3, '2022', 1, 1, 1, 'palo_alto_joven-torrentes.png', 1),
(DEFAULT, 'Palo Alto Benito A Grand Reserve Blend', 'Tiene un ataque dulce, despliega en el medio de boca su potencia donde muestra sus taninos firmes, muestra un exquisito equilibrio entre la fruta y la acidez en su paso por boca. Corre sedoso y robusto para culminar en un final prolongado colmado de notas', 50000, 4, '2019', 1, 1, 2, 'palo_alto-benito-blend.jpg', 1),
(DEFAULT, 'Gin Bosque Alta Montaña', 'Enebro, Cardamomo, Coriandro, Flor de Azahar, Cedrón, Piel de Pomelo, Piel de Limón y Clavo de Olor son algunos de los botánicos y cítricos que utilizamos en la maceración. El enebro salvaje de la patagonia le da un perfil especial y lo diferencia de la m', 8900, 5, '2022', 1, 2, 2, 'gin-bosque-alta-montaña.webp', 2),
(DEFAULT, 'Buenos Aires Gin', 'Destilado premium argentino, una creación de Destilería Moretti. BUENOS AIRES GIN es una bebida obtenida a partir de 13 botánicos, con lo que se logra un resultado elegante y sofisticado, de aroma y sabor exquisitamente equilibrados.', 4200, 5, '2022', 1, 2, 2, 'gins_BOTELLA-BSASGIN-scaled.jpg', 3),
(DEFAULT, 'Gin Aconcagua Blue', 'Gin hecho a mano en Buenos Aires, Argentina. Nuestra esencia es extraída a partir de 7 botánicos: Bayas de Enebro, Semillas de Coriandro, Raíz de Angelica, Raíz de Regaliz, Almendra, Cassia, Cáscara de Limon. Gracias a un meticuluso proceso de maceración ', 7000, 5, '2022', 1, 2, 2, 'gins_aconcagua_BLUE.jpeg', 4),
(DEFAULT, 'Gin Aconcagua Lemongrass', 'Gin hecho a mano destilado en alambique de cobre y extraido a partir de 7 botánicos: Lima, Bayas de Enebro, Semillas de Coriandro, Lemon Grass, Raíz de Angelica, Raíz de Regaliz y Almendra.', 7000, 5, '2022', 1, 2, 2, 'gins_aconcagua_lemongrass.webp', 4),
(DEFAULT, 'Smirnoff Green Apple', 'Es la marca de bebidas espirituosas más grande del mundo. Su calidad y pureza son extraordinarias. Smirnoff está triplemente destilado y filtrado 10 veces sobre carbón vegetal por un lapso de 8 horas. Smirnoff Green Apple está infusionado con manzana verd', 1800, 6, '2022', 1, 3, 2, 'vodka_smf_green_apple_685x1200.jpg', 5),
(DEFAULT, 'Smirnoff Raspberry', 'Es la marca de bebidas espirituosas más grande del mundo. Su calidad y pureza son extraordinarias. Smirnoff está triplemente destilado y filtrado 10 veces sobre carbón vegetal por un lapso de 8 horas. Smirnoff Raspberry está infusionado con frutos rojos y', 2300, 6, '2022', 1, 3, 2, 'vodka_smf_raspberry_685x1200.jpg', 5),
(DEFAULT, 'Smirnoff 21', 'Smirnoff es la marca de bebidas espirituosas más grande del mundo. Su calidad y pureza son extraordinarias. Smirnoff está triplemente destilado y filtrado 10 veces sobre carbón vegetal por un lapso de 8 horas. Este Vodka fue creado especialmente para que ', 1800, 6, '2022', 1, 3, 2, 'vodka_smf_21_685x1200.jpg', 5),
(DEFAULT, 'Smirnoff Watermelon', 'Es la marca de bebidas espirituosas más grande del mundo. Su calidad y pureza son extraordinarias. Smirnoff está triplemente destilado y filtrado 10 veces sobre carbón vegetal por un lapso de 8 horas. Smirnoff Watermelon está infusionado con manzana verde', 1800, 6, '2022', 1, 3, 2, 'vodka_smf_watermelon_685x1200.jpg', 5);

