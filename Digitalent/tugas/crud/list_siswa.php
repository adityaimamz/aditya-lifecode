<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "db_pmb";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM tb_mahasiswa";
$result = $conn->query($sql);
?>

<table style="border : Irem Gray">
  <tr>
    <th>Id Mahasiswa</th>
    <th>Nama Mahasiswa</th>
    <th>Alamat</th>
    <th>Jenis Kelamin</th>
    <th>Agama</th>
    <th>Sekolah Asal</th>
  </tr>

<?php
if ($result->num_rows > 0) {
    $jumlah = 0;
  while($row = $result->fetch_array(MYSQLI_ASSOC)) {
    echo '<tr>';
    echo '<td>' . 
    $row["id_mahasiswa"]. '</td><td>' .
    $row["nama_mahasiswa"]. '</td><td>' . 
    $row["alamat"] . '</td><td>' . 
    $row["jenis_kelamin"] . '</td><td>' . 
    $row["agama"] . '</td> <td>' . 
    $row["sekolah_asal"] . 
    "</td>";
    echo '</tr>';
    $jumlah++;
  }
}
$conn->close();
?>

</table>
