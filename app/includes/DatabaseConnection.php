<?php
$pdo = new PDO('mysql:host=mysql;dbname=jokes-cms;charset=utf8', 'root', 'root');
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);