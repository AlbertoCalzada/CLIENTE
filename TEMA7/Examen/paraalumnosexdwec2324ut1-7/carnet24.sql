-- phpMyAdmin SQL Dump
--
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `carnet24`
--
CREATE DATABASE IF NOT EXISTS `carnet24` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;
USE `carnet24`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarioscj24`
--

DROP TABLE IF EXISTS `usuarioscj24`;
CREATE TABLE IF NOT EXISTS `usuarioscj24` (
  `nif` varchar(10) NOT NULL,
  `codigoacceso` int(6) NOT NULL,
  `nombreapellidos` varchar(200) NOT NULL,
  `annonacimiento` varchar(4) NOT NULL,
  PRIMARY KEY (`nif`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `usuarioscj24`
--

INSERT INTO `usuarioscj24` (`nif`, `codigoacceso`, `nombreapellidos`, `annonacimiento`) VALUES
('11935393A', 232323, 'Ruffus Student', '1999'),
('32873725D', 112233, 'Juan Carlo Alto Alto', '1988'),
('35605203F', 555555, 'Laly Lagarde Blanche', '1967'),
('37333549H', 443814, 'hola hola2', '2020'),
('40564521L', 332211, 'Pedro Segundo Tercero', '1999'),
('50252285E', 123456, 'Carlos First Date', '2000'),
('67445395B', 123456, 'Sergio Martin', '2002'),
('69603883H', 111111, 'Patrick Le Creme', '1998'),
('82416661W', 444444, 'Jean Luigi', '1988'),
('91789237D', 123456, 'Acuesta Cuesta', '2004'),
('94472009S', 565656, 'JACK SHADOW LARGE', '1988');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
