-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 14-02-2014 a las 11:44:50
-- Versión del servidor: 5.5.24-log
-- Versión de PHP: 5.4.3

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `bd_viajes`
--
CREATE DATABASE `bd_viajes` DEFAULT CHARACTER SET latin1 COLLATE latin1_spanish_ci;
USE `bd_viajes`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `hoteles`
--

CREATE TABLE IF NOT EXISTS `hoteles` (
  `id_hotel` int(6) NOT NULL,
  `nombre` varchar(30) COLLATE latin1_spanish_ci NOT NULL,
  `direccion` varchar(200) COLLATE latin1_spanish_ci NOT NULL,
  `ciudad` varchar(30) COLLATE latin1_spanish_ci NOT NULL,
  `precio` int(3) NOT NULL,
  `habitaciones` int(3) NOT NULL,
  PRIMARY KEY (`id_hotel`)
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

CREATE TABLE IF NOT EXISTS `reservas` (
  `id_reserva` int(11) NOT NULL AUTO_INCREMENT,
  `cia` varchar(6) COLLATE latin1_spanish_ci NOT NULL,
  `id_usuario` varchar(50) COLLATE latin1_spanish_ci NOT NULL,
  `fecha` date NOT NULL,
  `salida` time NOT NULL,
  `num_pasajeros` int(2) NOT NULL,
  PRIMARY KEY (`id_reserva`),
  KEY `id_vuelo` (`cia`),
  KEY `id_usuario` (`id_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reservashoteles`
--

CREATE TABLE IF NOT EXISTS `reservashoteles` (
  `id_reservaHotel` int(11) NOT NULL AUTO_INCREMENT,
  `id_hotel` int(6) NOT NULL,
  `num_personas` int(2) NOT NULL,
  `precioTotal` int(3) NOT NULL,
  `fechaEntrada` date NOT NULL,
  `fechaSalida` date NOT NULL,
  PRIMARY KEY (`id_reservaHotel`),
  KEY `id_hotel` (`id_hotel`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE IF NOT EXISTS `usuarios` (
  `id_usuario` varchar(15) COLLATE latin1_spanish_ci NOT NULL,
  `nombre` varchar(20) COLLATE latin1_spanish_ci NOT NULL,
  `apellidos` varchar(30) COLLATE latin1_spanish_ci NOT NULL,
  `email` varchar(40) COLLATE latin1_spanish_ci NOT NULL,
  `contrasena` varchar(20) COLLATE latin1_spanish_ci NOT NULL,
  PRIMARY KEY (`id_usuario`)
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

CREATE TABLE IF NOT EXISTS `vuelos` (
  `id_vuelo` int(11) NOT NULL,
  `cia` varchar(6) COLLATE latin1_spanish_ci NOT NULL,
  `origen` varchar(50) COLLATE latin1_spanish_ci NOT NULL,
  `destino` varchar(50) COLLATE latin1_spanish_ci NOT NULL,
  `fecha` date NOT NULL,
  `salida` time NOT NULL,
  `max_pasajeros` int(3) NOT NULL,
  `precio` int(3) NOT NULL,
  PRIMARY KEY (`id_vuelo`),
  KEY `cia` (`cia`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

--
-- Volcado de datos para la tabla `vuelos`
--

INSERT INTO `vuelos` (`id_vuelo`, `cia`, `origen`, `destino`, `fecha`, `salida`, `max_pasajeros`, `precio`) VALUES
(0, 'IB510', 'Sevilla', 'Madrid', '2016-02-28', '11:05:00', 10, 48),
(1, 'UX2159', 'Barcelona', 'Madrid', '2016-02-24', '21:00:00', 200, 87),
(2, 'VY1001', 'Barcelona', 'Madrid', '2016-02-24', '07:00:00', 200, 54),
(3, 'VY1012', 'Madrid', 'Barcelona', '2016-02-28', '16:00:00', 200, 69),
(4, 'VY1002', 'Madrid', 'Barcelona', '2016-02-24', '08:55:00', 200, 39),
(5, 'UX4063', 'Madrid', 'Valencia', '2016-02-24', '06:50:00', 200, 51),
(6, 'VY1028', 'Madrid', 'Barcelona', '2016-02-24', '07:20:00', 200, 37),
(7, 'IB8982', 'Madrid', 'Valencia', '2016-02-24', '22:45:00', 200, 56),
(8, 'IB3742', 'Madrid', 'Barcelona', '2016-02-24', '09:15:00', 150, 55),
(9, 'IB327', 'Madrid', 'Sevilla', '2016-02-24', '18:05:00', 200, 30),
(10, 'IB510', 'Sevilla', 'Madrid', '2016-02-24', '10:45:00', 200, 80),
(11, 'IB318', 'Sevilla', 'Madrid', '2016-02-28', '07:45:00', 8, 75),
(12, 'IB8999', 'Valencia', 'Madrid', '2016-02-28', '06:00:00', 200, 56),
(13, 'UX4064', 'Valencia', 'Madrid', '2016-02-28', '12:20:00', 200, 51),
(14, 'UX4060', 'Valencia', 'Madrid', '2016-02-24', '19:25:00', 200, 44),
(15, 'UX4063', 'Madrid', 'Valencia', '2016-02-28', '06:50:00', 200, 44);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `reservas`
--
ALTER TABLE `reservas`
  ADD CONSTRAINT `reservas_ibfk_1` FOREIGN KEY (`cia`) REFERENCES `vuelos` (`cia`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `reservas_ibfk_2` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `reservashoteles`
--
ALTER TABLE `reservashoteles`
  ADD CONSTRAINT `reservashoteles_ibfk_1` FOREIGN KEY (`id_hotel`) REFERENCES `hoteles` (`id_hotel`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
