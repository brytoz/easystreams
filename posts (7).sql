-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 19, 2023 at 05:56 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `easystreams`
--

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` int(11) NOT NULL,
  `ref` varchar(32) NOT NULL,
  `posted_by` varchar(32) NOT NULL,
  `title` varchar(1000) NOT NULL,
  `home_team` varchar(32) NOT NULL,
  `away_team` varchar(32) NOT NULL,
  `home_img` varchar(60) NOT NULL,
  `away_img` varchar(60) NOT NULL,
  `match_day` varchar(32) NOT NULL,
  `match_time` varchar(32) NOT NULL,
  `league` varchar(32) NOT NULL,
  `scores` varchar(12) NOT NULL,
  `sport_type` varchar(32) NOT NULL,
  `link_one` varchar(2000) NOT NULL,
  `link_two` varchar(2000) NOT NULL,
  `link_three` varchar(2000) NOT NULL,
  `link_four` varchar(2000) NOT NULL,
  `link_five` varchar(2000) NOT NULL,
  `priority` varchar(12) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `ref`, `posted_by`, `title`, `home_team`, `away_team`, `home_img`, `away_img`, `match_day`, `match_time`, `league`, `scores`, `sport_type`, `link_one`, `link_two`, `link_three`, `link_four`, `link_five`, `priority`, `createdAt`, `updatedAt`) VALUES
(545, 'zcom9allcwye5zr', 'modesttek', 'Rennes vs Paris Saint German', 'Rennes', 'Paris Saint German', 'uploads/1673761519570.jpeg', 'uploads/1673761519570.png', '2023-01-19', '10:40', 'France Ligue 1', '-', 'Football', 'https://afr.score808.world/football/2216060-rennes-vs-paris-saint-germain-psg.html', 'https://afr.score808.world/football/2216060-rennes-vs-paris-saint-germain-psg.html', 'https://afr.score808.world/football/2216060-rennes-vs-paris-saint-germain-psg.html', 'https://afr.score808.world/football/2216060-rennes-vs-paris-saint-germain-psg.html', 'https://afr.score808.world/football/2216060-rennes-vs-paris-saint-germain-psg.html', 'A', '2023-01-15 05:45:19', '2023-01-15 05:45:19'),
(546, 'zcom9allcwyg04z', 'modesttek', 'AS Roma vs Fiorentina', 'AS Roma', 'Fiorentina', 'uploads/1673762511278.jpg', 'uploads/1673762511278.png', '2023-01-19', '08:43', 'Italy Seria A', '2- 0', 'Football', 'https://afr.score808.world/football/2222960-as-roma-vs-fiorentina.html', 'https://afr.score808.world/football/2222960-as-roma-vs-fiorentina.html', 'https://afr.score808.world/football/2222960-as-roma-vs-fiorentina.html', 'https://afr.score808.world/football/2222960-as-roma-vs-fiorentina.html', 'https://afr.score808.world/football/2222960-as-roma-vs-fiorentina.html', 'A', '2023-01-15 05:46:45', '2023-01-15 06:01:51'),
(547, 'zcom9allcwyiess', 'modesttek', 'Los Angeles Clippers vs Houston Rockets', 'Los Angeles Clippers', 'Houston Rockets', 'uploads/1673762966546.jpg', 'uploads/1673762966546.jpeg', '2023-01-19', '10:00', 'NBA', '-', 'Basketball', 'https://afr.score808.world/basketball/485431-los-angeles-clippers-vs-houston-rockets.html', 'https://afr.score808.world/basketball/485431-los-angeles-clippers-vs-houston-rockets.html', 'https://afr.score808.world/basketball/485431-los-angeles-clippers-vs-houston-rockets.html', 'https://afr.score808.world/basketball/485431-los-angeles-clippers-vs-houston-rockets.html', 'https://afr.score808.world/basketball/485431-los-angeles-clippers-vs-houston-rockets.html', 'C', '2023-01-15 05:48:37', '2023-01-15 06:09:26'),
(548, 'zcom9allcwykny0', 'modesttek', 'Chicago Bulls vs Golden State Warriors ', 'Chicago Bulls', 'Golden State Warriors ', 'uploads/1673761822773.png', 'uploads/1673761822773.jpeg', '2023-01-19', '20:30', 'NBA', '-', 'Basketball', 'https://afr.score808.world/basketball/485432-chicago-bulls-vs-golden-state-warriors.html', 'https://afr.score808.world/basketball/485432-chicago-bulls-vs-golden-state-warriors.html', 'https://afr.score808.world/basketball/485432-chicago-bulls-vs-golden-state-warriors.html', 'https://afr.score808.world/basketball/485432-chicago-bulls-vs-golden-state-warriors.html', 'https://afr.score808.world/basketball/485432-chicago-bulls-vs-golden-state-warriors.html', 'C', '2023-01-15 05:50:22', '2023-01-15 05:50:22'),
(549, 'zcom9allcwymvht', 'modesttek', 'FC Porto vs FC Famalicao', 'FC Porto', 'FC Famalicao', 'uploads/1673761925865.jpeg', 'uploads/1673761925866.png', '2023-01-19', '18:30', 'Liga Portugal 1', '-', 'Football', 'https://afr.score808.world/football/2237063-fc-porto-vs-fc-famalicao.html', 'https://afr.score808.world/football/2237063-fc-porto-vs-fc-famalicao.html', 'https://afr.score808.world/football/2237063-fc-porto-vs-fc-famalicao.html', 'https://afr.score808.world/football/2237063-fc-porto-vs-fc-famalicao.html', 'https://afr.score808.world/football/2237063-fc-porto-vs-fc-famalicao.html', 'B', '2023-01-15 05:52:05', '2023-01-15 05:52:05');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=550;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
