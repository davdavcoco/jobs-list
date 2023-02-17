-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 17, 2023 at 06:10 PM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 7.4.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `jobs`
--
CREATE DATABASE IF NOT EXISTS `jobs` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `jobs`;

-- --------------------------------------------------------

--
-- Table structure for table `tasks`
--

DROP TABLE IF EXISTS `tasks`;
CREATE TABLE `tasks` (
  `id` bigint(20) NOT NULL,
  `title` varchar(100) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `finished` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tasks`
--

INSERT INTO `tasks` (`id`, `title`, `description`, `finished`) VALUES
(1, 'title_1', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi error aut accusamus possimus alias illo nisi ullam, non fugiat id odio porro, vero laudantium iure nobis. Ea sed laudantium dolorum.', 0),
(2, 'title_2', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi error aut accusamus possimus alias illo nisi ullam, non fugiat id odio porro, vero laudantium iure nobis. Ea sed laudantium dolorum.', 0),
(3, 'title_3', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi error aut accusamus possimus alias illo nisi ullam, non fugiat id odio porro, vero laudantium iure nobis. Ea sed laudantium dolorum.', 0),
(4, 'title_4', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi error aut accusamus possimus alias illo nisi ullam, non fugiat id odio porro, vero laudantium iure nobis. Ea sed laudantium dolorum.', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tasks`
--
ALTER TABLE `tasks`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tasks`
--
ALTER TABLE `tasks`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
