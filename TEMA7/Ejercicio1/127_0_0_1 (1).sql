-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 09-01-2021 a las 21:32:06
-- Versión del servidor: 5.7.14
-- Versión de PHP: 5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bd_viajes`
--
CREATE DATABASE IF NOT EXISTS `bd_viajes` DEFAULT CHARACTER SET latin1 COLLATE latin1_spanish_ci;
USE `bd_viajes`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `hoteles`
--

CREATE TABLE `hoteles` (
  `id_hotel` int(6) NOT NULL,
  `nombre` varchar(30) COLLATE latin1_spanish_ci NOT NULL,
  `direccion` varchar(200) COLLATE latin1_spanish_ci NOT NULL,
  `ciudad` varchar(30) COLLATE latin1_spanish_ci NOT NULL,
  `precio` int(3) NOT NULL,
  `habitaciones` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

--
-- Volcado de datos para la tabla `hoteles`
--

INSERT INTO `hoteles` (`id_hotel`, `nombre`, `direccion`, `ciudad`, `precio`, `habitaciones`) VALUES
(1, 'Hotel Condes de Urgel', 'Calle Amargura, 18', 'Valencia', 25, 130),
(2, 'Hotel Parque', 'Calle Pique&ntilde;as, 23', 'Valencia', 21, 90);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reservas`
--

CREATE TABLE `reservas` (
  `id_reserva` int(11) NOT NULL,
  `cia` varchar(6) COLLATE latin1_spanish_ci NOT NULL,
  `id_cliente` int(11) NOT NULL,
  `fecha` date NOT NULL,
  `salida` time NOT NULL,
  `num_pasajeros` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

--
-- Volcado de datos para la tabla `reservas`
--

INSERT INTO `reservas` (`id_reserva`, `cia`, `id_cliente`, `fecha`, `salida`, `num_pasajeros`) VALUES
(1, 'IB318', 1, '2021-02-19', '07:45:00', 2),
(2, 'IB318', 2, '2021-02-19', '07:45:00', 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reservashoteles`
--

CREATE TABLE `reservashoteles` (
  `id_reservaHotel` int(11) NOT NULL,
  `id_hotel` int(6) NOT NULL,
  `num_personas` int(2) NOT NULL,
  `precioTotal` int(3) NOT NULL,
  `fechaEntrada` date NOT NULL,
  `fechaSalida` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id_usuario` varchar(15) COLLATE latin1_spanish_ci NOT NULL,
  `nombre` varchar(20) COLLATE latin1_spanish_ci NOT NULL,
  `apellidos` varchar(30) COLLATE latin1_spanish_ci NOT NULL,
  `email` varchar(40) COLLATE latin1_spanish_ci NOT NULL,
  `contrasena` varchar(20) COLLATE latin1_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id_usuario`, `nombre`, `apellidos`, `email`, `contrasena`) VALUES
('admin', 'Paco', 'Gutierrez Blanco', 'paco_gf91@hotmail.com', 'admin');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `vuelos`
--

CREATE TABLE `vuelos` (
  `id_vuelo` int(11) NOT NULL,
  `cia` varchar(6) COLLATE latin1_spanish_ci NOT NULL,
  `origen` varchar(50) COLLATE latin1_spanish_ci NOT NULL,
  `destino` varchar(50) COLLATE latin1_spanish_ci NOT NULL,
  `fecha` date NOT NULL,
  `salida` time NOT NULL,
  `max_pasajeros` int(3) NOT NULL,
  `precio` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

--
-- Volcado de datos para la tabla `vuelos`
--

INSERT INTO `vuelos` (`id_vuelo`, `cia`, `origen`, `destino`, `fecha`, `salida`, `max_pasajeros`, `precio`) VALUES
(1, 'UX2159', 'Barcelona', 'Madrid', '2021-02-24', '21:00:00', 200, 87),
(2, 'VY1001', 'Barcelona', 'Madrid', '2021-02-24', '07:00:00', 200, 54),
(3, 'VY1012', 'Madrid', 'Barcelona', '2021-02-18', '16:00:00', 200, 69),
(4, 'VY1002', 'Madrid', 'Barcelona', '2021-02-24', '08:55:00', 200, 39),
(5, 'UX4063', 'Madrid', 'Valencia', '2021-02-24', '06:50:00', 200, 51),
(6, 'VY1028', 'Madrid', 'Barcelona', '2021-02-24', '07:20:00', 200, 37),
(7, 'IB8982', 'Madrid', 'Valencia', '2021-02-24', '22:45:00', 200, 56),
(8, 'IB3742', 'Madrid', 'Barcelona', '2021-02-24', '09:15:00', 150, 55),
(9, 'IB327', 'Madrid', 'Sevilla', '2021-02-24', '18:05:00', 200, 30),
(10, 'IB510', 'Sevilla', 'Madrid', '2021-02-24', '10:45:00', 200, 80),
(11, 'IB318', 'Sevilla', 'Madrid', '2021-02-28', '07:45:00', 8, 75),
(12, 'IB8999', 'Valencia', 'Madrid', '2021-02-28', '06:00:00', 200, 56),
(13, 'UX4064', 'Valencia', 'Madrid', '2021-02-28', '12:20:00', 200, 51),
(14, 'UX4060', 'Valencia', 'Madrid', '2021-02-24', '19:25:00', 200, 44),
(15, 'UX4063', 'Madrid', 'Valencia', '2021-02-28', '06:50:00', 200, 44);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `hoteles`
--
ALTER TABLE `hoteles`
  ADD PRIMARY KEY (`id_hotel`);

--
-- Indices de la tabla `reservas`
--
ALTER TABLE `reservas`
  ADD PRIMARY KEY (`id_reserva`),
  ADD KEY `id_vuelo` (`cia`);

--
-- Indices de la tabla `reservashoteles`
--
ALTER TABLE `reservashoteles`
  ADD PRIMARY KEY (`id_reservaHotel`),
  ADD KEY `id_hotel` (`id_hotel`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id_usuario`);

--
-- Indices de la tabla `vuelos`
--
ALTER TABLE `vuelos`
  ADD PRIMARY KEY (`id_vuelo`),
  ADD KEY `cia` (`cia`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `reservas`
--
ALTER TABLE `reservas`
  MODIFY `id_reserva` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT de la tabla `reservashoteles`
--
ALTER TABLE `reservashoteles`
  MODIFY `id_reservaHotel` int(11) NOT NULL AUTO_INCREMENT;
--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `reservas`
--
ALTER TABLE `reservas`
  ADD CONSTRAINT `reservas_ibfk_1` FOREIGN KEY (`cia`) REFERENCES `vuelos` (`cia`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
