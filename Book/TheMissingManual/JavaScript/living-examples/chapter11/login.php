<?php

$password="secret";
$username="007";

$user=isset($_GET['user']) ? $_GET['user'] : $_POST['user'];
$pass=isset($_GET['password']) ? $_GET['password'] : $_POST['password'];

if ($user==$username && $pass==$password) {
  echo 'pass';
} else {
  echo 'fail';
}



?>