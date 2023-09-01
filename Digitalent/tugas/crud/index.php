<h2>Pendaftaran Baru</h2>
<h1>Digital Talent</h1>
<h2>Menu</h2>
<ul>
    <li><a href="form_daftar.php">Daftar baru</a></li>
    <li><a href="list_siswa.php">Pendaftaran</a></li>
</ul>

<?php
if (isset($_GET["status"]) && $_GET["status"]== 'sukses') {
    echo "<p>Pendaftaran Siswa Baru Berhasil.</p>";
}
?>
