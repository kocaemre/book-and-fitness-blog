-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: blogapp
-- ------------------------------------------------------
-- Server version	8.0.34

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `blog`
--

DROP TABLE IF EXISTS `blog`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `blog` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(45) NOT NULL,
  `description` text NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blog`
--

LOCK TABLES `blog` WRITE;
/*!40000 ALTER TABLE `blog` DISABLE KEYS */;
INSERT INTO `blog` VALUES (1,'Book Reviews','Dive into the captivating world of literature with our in-depth book reviews. Our team of avid readers and reviewers provides insightful and honest critiques of the latest bestsellers, classics, and everything in between.'),(2,'Author Spotlights','Explore the minds behind the books. We shine a spotlight on talented authors, delving into their backgrounds, inspirations, and the stories that have captured their hearts.'),(3,'Book Recommendations','Looking for your next great read? Let us be your guide. We curate lists of must-read books, tailored to different genres and moods, ensuring there\'s something for everyone.');
/*!40000 ALTER TABLE `blog` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `details`
--

DROP TABLE IF EXISTS `details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `details` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(45) NOT NULL,
  `description` longtext NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `details`
--

LOCK TABLES `details` WRITE;
/*!40000 ALTER TABLE `details` DISABLE KEYS */;
INSERT INTO `details` VALUES (1,'Murder on the Orient Express','Murder on the Orient Express is a classic detective novel by Agatha Christie. The story revolves around the famous detective Hercule Poirot, who finds himself on a train stranded in the snow with a murdered millionaire on board. With a limited number of suspects, Poirot must use his legendary deductive skills to solve the baffling murder mystery.'),(3,'The Murder of Roger Ackroyd','he Murder of Roger Ackroyd is a groundbreaking novel in the detective genre. When the wealthy Roger Ackroyd is found dead in his study, the famous detective Hercule Poirot is called to investigate. As Poirot delves into the lives of the household\'s residents, he uncovers shocking secrets that will keep readers guessing until the final page'),(4,'Death on the Nile','In Death on the Nile, Hercule Poirot embarks on a luxurious cruise along the Nile River. However, what was meant to be a peaceful journey turns into a murder investigation when a wealthy heiress is found dead on board. Poirot must navigate through a web of jealousy, betrayal, and hidden motives to uncover the murderer on this gripping voyage.'),(8,'And Then There Were None','And Then There Were None is a thrilling and suspenseful novel by Agatha Christie. Ten strangers are lured to a remote island under different pretexts, only to discover that they are being accused of past crimes. As they start to die one by one, the tension rises, and the remaining guests must figure out who among them is the killer.');
/*!40000 ALTER TABLE `details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fitness`
--

DROP TABLE IF EXISTS `fitness`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `fitness` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(45) NOT NULL,
  `description` mediumtext,
  `day` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fitness`
--

LOCK TABLES `fitness` WRITE;
/*!40000 ALTER TABLE `fitness` DISABLE KEYS */;
INSERT INTO `fitness` VALUES (1,'Machine Chest Press','  ',1),(2,'Dumbell Bench Press','İncline (optional)',1),(3,'Machine Fly',NULL,1),(4,'Dumbell Shoulder Press',NULL,1),(5,'Lateral Raises',NULL,1),(6,'Triceps Pushdown',NULL,1),(7,'Lat Pulldown',NULL,2),(8,'Cable Row',NULL,2),(9,'Pull up','Barfiks',2),(10,'Dumbell Curl',NULL,2),(11,'Hummer Curl',NULL,2),(12,'Leg Extension',NULL,2),(13,'Leg Curl',NULL,2);
/*!40000 ALTER TABLE `fitness` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-10-03 20:59:20
