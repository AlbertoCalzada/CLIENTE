SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


CREATE TABLE `base` (
  `id` int(11) NOT NULL,
  `nif` varchar(9) COLLATE latin1_spanish_ci NOT NULL,
  `clave` varchar(6) COLLATE latin1_spanish_ci NOT NULL,
  `puntos` int(11) NOT NULL,
  `nombre` varchar(255) COLLATE latin1_spanish_ci NOT NULL,
  `apellidos` varchar(255) COLLATE latin1_spanish_ci NOT NULL,
  `fecha` date NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;


INSERT INTO `base` (`id`, `nif`, `clave`, `puntos`, `nombre`, `apellidos`, `fecha`) VALUES
(1, '49144265g', '123456', 10, 'Alejandro', 'Munoz Vaquero', '1998-16-10');


ALTER TABLE `base`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `nif` (`nif`);


ALTER TABLE `base`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;