-- phpMyAdmin SQL Dump
-- version 5.2.3
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 06-02-2026 a las 02:54:47
-- Versión del servidor: 8.4.7
-- Versión de PHP: 8.3.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `clinica_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `citas`
--

DROP TABLE IF EXISTS `citas`;
CREATE TABLE IF NOT EXISTS `citas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `paciente_nombre` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `paciente_identidad` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `paciente_telefono` varchar(15) COLLATE utf8mb4_unicode_ci NOT NULL,
  `paciente_email` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `especialidad` enum('medicina_general','pediatria','odontologia','ginecologia','cardiologia') COLLATE utf8mb4_unicode_ci NOT NULL,
  `doctor` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `fecha_cita` datetime NOT NULL,
  `hora_cita` time NOT NULL,
  `duracion_minutos` int NOT NULL DEFAULT '30',
  `motivo_consulta` text COLLATE utf8mb4_unicode_ci,
  `estado` enum('pendiente','confirmada','atendida','cancelada') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'pendiente',
  `costo_consulta` decimal(8,2) NOT NULL,
  `forma_pago` enum('efectivo','tarjeta','transferencia','seguro') COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `observaciones` text COLLATE utf8mb4_unicode_ci,
  `fecha_registro` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
