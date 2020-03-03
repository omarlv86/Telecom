-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 03-03-2020 a las 02:20:14
-- Versión del servidor: 10.4.11-MariaDB
-- Versión de PHP: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `empresa`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empleados`
--

CREATE TABLE `empleados` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `apellidoP` varchar(50) NOT NULL,
  `apellidoM` varchar(50) NOT NULL,
  `puesto` varchar(50) NOT NULL,
  `fechaNac` date NOT NULL,
  `correo` varchar(50) NOT NULL,
  `salario` int(10) NOT NULL,
  `contratista` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `empleados`
--

INSERT INTO `empleados` (`id`, `nombre`, `apellidoP`, `apellidoM`, `puesto`, `fechaNac`, `correo`, `salario`, `contratista`) VALUES
(1, 'Ricardo Omar', 'Lugo', 'Vargas', 'Desarollador', '1995-05-06', 'omarl.vargass@hotmail.com', 10000, 0),
(2, 'Luis Martin', 'Gomez', 'Rios', 'Programador', '1994-02-06', 'luism@hotmail.com', 10000, 1),
(3, 'Deysi', 'Gomez', 'Vargas', 'Diseñador UI', '1995-05-08', 'deysig@hotmail.com', 12000, 0),
(4, 'Alejandro Josue', 'Hernandez', 'Gomez', 'Ing Industrial', '1995-02-14', 'alejosue@hotmail.com', 12000, 1),
(5, 'Jose ', 'Ramirez', 'Gomez', 'Xamarin Developer', '1995-08-12', 'joserg@hotmail.com', 8000, 1),
(6, 'Yunue', 'Mandujano', 'Luna', 'Tecnico Informatico', '1994-12-18', 'yunue@hotmail.com', 16000, 1),
(14, 'Karina', 'Lugo', 'Vargas', 'Quimico', '1995-09-09', 'karina@hotmail.com', 13500, 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `empleados`
--
ALTER TABLE `empleados`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `empleados`
--
ALTER TABLE `empleados`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
