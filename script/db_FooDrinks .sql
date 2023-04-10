-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 10-04-2023 a las 02:14:25
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `db_foodrinks`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `brands`
--

CREATE TABLE `brands` (
  `id` int(11) NOT NULL,
  `brand_name` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `deleted_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `brands`
--

INSERT INTO `brands` (`id`, `brand_name`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'Palo Alto', '2023-04-07 15:29:30', '2023-04-07 15:29:30', NULL),
(2, 'Gin Bosque', '2023-04-07 15:30:31', '2023-04-07 15:30:31', NULL),
(3, 'Buenos Aires Gin', '2023-04-07 15:30:59', '2023-04-07 15:30:59', NULL),
(4, 'Gin Aconcagua', '2023-04-07 15:31:31', '2023-04-07 15:31:31', NULL),
(5, 'Smirnoff', '2023-04-07 15:32:37', '2023-04-07 15:32:37', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carts`
--

CREATE TABLE `carts` (
  `id` int(11) NOT NULL,
  `total` decimal(10,0) NOT NULL,
  `payment_id` int(11) NOT NULL,
  `item_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `deleted_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cart_products`
--

CREATE TABLE `cart_products` (
  `id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `cart_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `deleted_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `category_name` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `deleted_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `categories`
--

INSERT INTO `categories` (`id`, `category_name`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'Vinos', '2023-04-07 15:25:59', '2023-04-07 15:25:59', NULL),
(2, 'Destilados', '2023-04-07 15:26:38', '2023-04-07 15:26:38', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `origenes`
--

CREATE TABLE `origenes` (
  `id` int(11) NOT NULL,
  `country` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `deleted_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `origenes`
--

INSERT INTO `origenes` (`id`, `country`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'Argentina', '2023-04-07 15:23:26', '2023-04-07 15:23:26', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `payments`
--

CREATE TABLE `payments` (
  `id` int(11) NOT NULL,
  `method` varchar(255) NOT NULL,
  `installments` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `deleted_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `price` int(11) NOT NULL,
  `varietal_id` int(11) DEFAULT NULL,
  `year` varchar(255) DEFAULT NULL,
  `origen_id` int(11) DEFAULT NULL,
  `region_id` int(11) DEFAULT NULL,
  `category_id` int(11) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `brand_id` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `deleted_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `name`, `description`, `price`, `varietal_id`, `year`, `origen_id`, `region_id`, `category_id`, `image`, `brand_id`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'Palo Alto Joven Cabernet Sauvignon', 'Muestra un color rojo rubí brillante con reflejos violáceos. Presta aromas característicos de lavariedad tales como el casis, la pimienta negra y el pimiento verde maduro.', 8000, 1, '2022', 1, 1, 1, 'palo_alto_joven-cabernet_sauvignon.png', 1, '2023-04-07 15:35:53', '2023-04-07 15:35:53', NULL),
(2, 'Palo Alto Joven Malbec', 'Tiene un ataque dulce, de cuerpo medio, fresco y frutado en su paso por boca. Equilibrado, de taninos redondos, cálido y con una acidéz que resalta la fruta. Evoluciona hacia un finalpleno de notas tostadas, persistente y de agradable recuerdo.', 30000000, 2, '2022', 1, 1, 1, 'palo_alto_joven-malbec.png', 1, '2023-04-07 15:37:47', '2023-04-07 15:37:47', NULL),
(3, 'Palo Alto Joven Torrontes', 'De entrada amable, es delicado y untuoso en su paso por boca, es dueño de una equilibrada acidez que aporta frescura a la fruta. Posee un persistente y cálido final.', 40000, 3, '2022', 1, 1, 1, 'palo_alto_joven-torrentes.png', 1, '2023-04-07 15:39:26', '2023-04-07 15:39:26', NULL),
(4, 'Palo Alto Benito A Grand Reserve Blend', 'Tiene un ataque dulce, despliega en el medio de boca su potencia donde muestra sus taninos firmes, muestra un exquisito equilibrio entre la fruta y la acidez en su paso por boca. Corre sedoso y robusto para culminar en un final prolongado colmado de notas', 50000, 4, '2019', 1, 1, 2, 'palo_alto-benito-blend.jpg', 1, '2023-04-07 15:42:01', '2023-04-07 15:42:01', NULL),
(5, 'Gin Bosque Alta Montaña', 'Enebro, Cardamomo, Coriandro, Flor de Azahar, Cedrón, Piel de Pomelo, Piel de Limón y Clavo de Olor son algunos de los botánicos y cítricos que utilizamos en la maceración. El enebro salvaje de la patagonia le da un perfil especial y lo diferencia de la m', 8900, 5, '2022', 1, 2, 2, 'gin-bosque-alta-montaña.webp', 2, '2023-04-07 15:44:24', '2023-04-07 15:44:24', NULL),
(6, 'Buenos Aires Gin', 'Destilado premium argentino, una creación de Destilería Moretti. BUENOS AIRES GIN es una bebida obtenida a partir de 13 botánicos, con lo que se logra un resultado elegante y sofisticado, de aroma y sabor exquisitamente equilibrados.', 4200, 5, '2022', 1, 2, 2, 'gins_BOTELLA-BSASGIN-scaled.jpg', 3, '2023-04-07 15:46:18', '2023-04-07 15:46:18', NULL),
(7, 'Gin Aconcagua Blue', 'Gin hecho a mano en Buenos Aires, Argentina. Nuestra esencia es extraída a partir de 7 botánicos: Bayas de Enebro, Semillas de Coriandro, Raíz de Angelica, Raíz de Regaliz, Almendra, Cassia, Cáscara de Limon. Gracias a un meticuluso proceso de maceración ', 7000, 5, '2022', 1, 2, 2, 'gins_aconcagua_BLUE.jpeg', 4, '2023-04-07 15:47:23', '2023-04-07 15:47:23', NULL),
(8, 'Gin Aconcagua Lemongrass', 'Gin hecho a mano destilado en alambique de cobre y extraido a partir de 7 botánicos: Lima, Bayas de Enebro, Semillas de Coriandro, Lemon Grass, Raíz de Angelica, Raíz de Regaliz y Almendra.', 7000, 5, '2022', 1, 2, 2, 'gins_aconcagua_lemongrass.webp', 4, '2023-04-07 15:48:49', '2023-04-07 15:48:49', NULL),
(9, 'Smirnoff Green Apple', 'Es la marca de bebidas espirituosas más grande del mundo. Su calidad y pureza son extraordinarias. Smirnoff está triplemente destilado y filtrado 10 veces sobre carbón vegetal por un lapso de 8 horas. Smirnoff Green Apple está infusionado con manzana verd', 1800, 6, '2022', 1, 3, 2, 'vodka_smf_green_apple_685x1200.jpg', 5, '2023-04-07 15:49:55', '2023-04-07 15:49:55', NULL),
(10, 'Smirnoff Raspberry', 'Es la marca de bebidas espirituosas más grande del mundo. Su calidad y pureza son extraordinarias. Smirnoff está triplemente destilado y filtrado 10 veces sobre carbón vegetal por un lapso de 8 horas. Smirnoff Raspberry está infusionado con frutos rojos y', 2300, 6, '2022', 1, 3, 2, 'vodka_smf_raspberry_685x1200.jpg', 5, '2023-04-07 15:51:03', '2023-04-07 15:51:03', NULL),
(11, 'Smirnoff 21', 'Smirnoff es la marca de bebidas espirituosas más grande del mundo. Su calidad y pureza son extraordinarias. Smirnoff está triplemente destilado y filtrado 10 veces sobre carbón vegetal por un lapso de 8 horas. Este Vodka fue creado especialmente para que ', 1800, 6, '2022', 1, 3, 2, 'vodka_smf_21_685x1200.jpg', 5, '2023-04-07 15:52:39', '2023-04-07 15:52:39', NULL),
(12, 'Smirnoff Watermelon', 'Es la marca de bebidas espirituosas más grande del mundo. Su calidad y pureza son extraordinarias. Smirnoff está triplemente destilado y filtrado 10 veces sobre carbón vegetal por un lapso de 8 horas. Smirnoff Watermelon está infusionado con manzana verde', 1800, 6, '2022', 1, 3, 2, 'vodka_smf_watermelon_685x1200.jpg', 5, '2023-04-07 15:53:36', '2023-04-07 15:53:36', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `regions`
--

CREATE TABLE `regions` (
  `id` int(11) NOT NULL,
  `region` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `deleted_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `regions`
--

INSERT INTO `regions` (`id`, `region`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'Luján de Cuyo, Mendoza (1100 m S.N.M.)', '2023-04-07 15:24:32', '2023-04-07 15:24:32', NULL),
(2, 'Buenos Aires', '2023-04-07 15:24:59', '2023-04-07 15:24:59', NULL),
(3, 'Cordoba', '2023-04-07 15:25:20', '2023-04-07 15:25:20', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rols`
--

CREATE TABLE `rols` (
  `id` int(11) NOT NULL,
  `rol_name` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `deleted_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `rols`
--

INSERT INTO `rols` (`id`, `rol_name`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'user', '2023-04-07 14:13:27', '2023-04-07 14:13:27', NULL),
(2, 'admin', '2023-04-07 15:04:26', '2023-04-07 15:04:26', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `Id` int(11) NOT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `user_name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `confirm_password` varchar(255) NOT NULL,
  `rol_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `deleted_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`Id`, `avatar`, `name`, `last_name`, `email`, `user_name`, `password`, `confirm_password`, `rol_id`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'user-1680806462846.jpg', 'Lilian', 'Devico', 'ldevico@hotmail.com', 'lilian.devico', 'lilian1234', 'lilian1234', 1, '2023-04-07 15:08:43', '2023-04-07 15:08:43', NULL),
(2, 'user-1678052139339.jpeg', 'Antonella', 'Rodríguez', 'rodriguez.antonella.n@gmail.com', 'anrrid', 'antonella1234', 'antonella1234', 1, '2023-04-07 15:10:26', '2023-04-07 15:10:26', NULL),
(3, 'user-1678045453322.png', 'Charly', 'Garcia', 'charly@mail.com', 'charly', 'charly1234', 'charly1234', 2, '2023-04-07 15:12:09', '2023-04-07 15:12:09', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `varietales`
--

CREATE TABLE `varietales` (
  `id` int(11) NOT NULL,
  `varietal_name` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `deleted_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `varietales`
--

INSERT INTO `varietales` (`id`, `varietal_name`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'Cabernet Sauvignon', '2023-04-07 15:19:55', '2023-04-07 15:19:55', NULL),
(2, 'Malbec', '2023-04-07 15:20:11', '2023-04-07 15:20:11', NULL),
(3, 'Torrontes', '2023-04-07 15:20:27', '2023-04-07 15:20:27', NULL),
(4, 'Blend', '2023-04-07 15:20:41', '2023-04-07 15:20:41', NULL),
(5, 'Gin', '2023-04-07 15:20:56', '2023-04-07 15:20:56', NULL),
(6, 'Vodka', '2023-04-07 15:21:15', '2023-04-07 15:21:15', NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `brands`
--
ALTER TABLE `brands`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `carts`
--
ALTER TABLE `carts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_976da1cc-9734-4ccf-a424-2ffa4f6babd2` (`payment_id`),
  ADD KEY `FK_ef9f9a39-a025-4152-ad87-8a0c7b952386` (`user_id`);

--
-- Indices de la tabla `cart_products`
--
ALTER TABLE `cart_products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_2d377a53-6eac-4d14-b90b-5d0f97c4e8c8` (`product_id`),
  ADD KEY `FK_2f4e0464-0a0c-4157-ac16-d04d348c1afe` (`cart_id`);

--
-- Indices de la tabla `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `origenes`
--
ALTER TABLE `origenes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `payments`
--
ALTER TABLE `payments`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_aa5da438-93ee-4483-9232-7324259e146f` (`category_id`),
  ADD KEY `FK_21b631f8-e568-4fb8-aeb2-14c69d48b335` (`region_id`),
  ADD KEY `FK_6f707b59-4c32-4aad-8e81-9bc1dc660f9f` (`brand_id`),
  ADD KEY `FK_c7ee9f63-461c-4a5a-8d6d-0d5fffa7c2d4` (`varietal_id`),
  ADD KEY `FK_a197ec21-7134-448d-abbd-2b75d6f6d247` (`origen_id`);

--
-- Indices de la tabla `regions`
--
ALTER TABLE `regions`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `rols`
--
ALTER TABLE `rols`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `FK_4bfcf1cb-2214-4f31-8bf9-cd7efbfcbde3` (`rol_id`);

--
-- Indices de la tabla `varietales`
--
ALTER TABLE `varietales`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `carts`
--
ALTER TABLE `carts`
  ADD CONSTRAINT `FK_976da1cc-9734-4ccf-a424-2ffa4f6babd2` FOREIGN KEY (`payment_id`) REFERENCES `payments` (`id`),
  ADD CONSTRAINT `FK_ef9f9a39-a025-4152-ad87-8a0c7b952386` FOREIGN KEY (`user_id`) REFERENCES `users` (`Id`);

--
-- Filtros para la tabla `cart_products`
--
ALTER TABLE `cart_products`
  ADD CONSTRAINT `FK_2d377a53-6eac-4d14-b90b-5d0f97c4e8c8` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  ADD CONSTRAINT `FK_2f4e0464-0a0c-4157-ac16-d04d348c1afe` FOREIGN KEY (`cart_id`) REFERENCES `carts` (`id`);

--
-- Filtros para la tabla `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `FK_21b631f8-e568-4fb8-aeb2-14c69d48b335` FOREIGN KEY (`region_id`) REFERENCES `regions` (`id`),
  ADD CONSTRAINT `FK_6f707b59-4c32-4aad-8e81-9bc1dc660f9f` FOREIGN KEY (`brand_id`) REFERENCES `brands` (`id`),
  ADD CONSTRAINT `FK_a197ec21-7134-448d-abbd-2b75d6f6d247` FOREIGN KEY (`origen_id`) REFERENCES `origenes` (`id`),
  ADD CONSTRAINT `FK_aa5da438-93ee-4483-9232-7324259e146f` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`),
  ADD CONSTRAINT `FK_c7ee9f63-461c-4a5a-8d6d-0d5fffa7c2d4` FOREIGN KEY (`varietal_id`) REFERENCES `varietales` (`id`);

--
-- Filtros para la tabla `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `FK_4bfcf1cb-2214-4f31-8bf9-cd7efbfcbde3` FOREIGN KEY (`rol_id`) REFERENCES `rols` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
