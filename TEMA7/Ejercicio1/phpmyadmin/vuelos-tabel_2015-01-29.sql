-- phpMyAdmin SQL Dump
-- version 4.3.4
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jan 29, 2015 at 12:15 PM
-- Server version: 5.5.41
-- PHP Version: 5.4.36

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `bd_viajes`
--

-- --------------------------------------------------------

--
-- Table structure for table `vuelos`
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
-- Dumping data for table `vuelos`
--

INSERT INTO `vuelos` (`id_vuelo`, `cia`, `origen`, `destino`, `fecha`, `salida`, `max_pasajeros`, `precio`) VALUES
(1, 'UX2159', 'Barcelona', 'Madrid', '2015-02-24', '21:00:00', 200, 87),
(2, 'VY1001', 'Barcelona', 'Madrid', '2015-02-24', '07:00:00', 200, 54),
(3, 'VY1012', 'Madrid', 'Barcelona', '2015-02-28', '16:00:00', 200, 69),
(4, 'VY1002', 'Madrid', 'Barcelona', '2015-02-24', '08:55:00', 200, 39),
(5, 'UX4063', 'Madrid', 'Valencia', '2015-02-24', '06:50:00', 200, 51),
(6, 'VY1028', 'Madrid', 'Barcelona', '2015-02-24', '07:20:00', 200, 37),
(7, 'IB8982', 'Madrid', 'Valencia', '2015-02-24', '22:45:00', 200, 56),
(8, 'IB3742', 'Madrid', 'Barcelona', '2015-02-24', '09:15:00', 150, 55),
(9, 'IB327', 'Madrid', 'Sevilla', '2015-02-24', '18:05:00', 200, 30),
(10, 'IB510', 'Sevilla', 'Madrid', '2015-02-24', '10:45:00', 200, 80),
(11, 'IB318', 'Sevilla', 'Madrid', '2015-02-28', '07:45:00', 8, 75),
(12, 'IB8999', 'Valencia', 'Madrid', '2015-02-28', '06:00:00', 200, 56),
(13, 'UX4064', 'Valencia', 'Madrid', '2015-02-28', '12:20:00', 200, 51),
(14, 'UX4060', 'Valencia', 'Madrid', '2015-02-24', '19:25:00', 200, 44),
(15, 'UX4063', 'Madrid', 'Valencia', '2015-02-28', '06:50:00', 200, 44);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `vuelos`
--
ALTER TABLE `vuelos`
  ADD PRIMARY KEY (`id_vuelo`), ADD KEY `cia` (`cia`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
