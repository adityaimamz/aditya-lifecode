<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "db_pmb";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$nama_mahasiswa = $_POST['nama_mahasiswa'];
$alamat = $_POST['alamat'];
$jenis_kelamin = $_POST['jenis_kelamin'];
$agama = $_POST['agama'];
$sekolah_asal = $_POST['sekolah_asal'];

$sql = "INSERT INTO tb_mahasiswa (nama_mahasiswa, alamat, jenis_kelamin, agama, sekolah_asal) VALUES (?, ?, ?, ?, ?)";

if ($stmt = $conn->prepare($sql)) {
  $stmt->bind_param('sssss', $nama_mahasiswa, $alamat, $jenis_kelamin, $agama, $sekolah_asal);
  if ($stmt->execute()) {
    // jika sukses insert, kita redirect ke index.php
    header('Location: index.php?status=sukses');
  }
} else {
  echo "Terjadi kesalahan: " . $sql . "<br>" . $conn->error;
  echo $stmt->error;
}

$conn->close();
