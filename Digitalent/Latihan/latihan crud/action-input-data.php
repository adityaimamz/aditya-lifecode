<?php
//cek button    
    if ($_POST['Submit'] == "Submit") {
    $nama            = $_POST['nama'];
    $alamat    = $_POST['alamat'];
    $jenis_kelamin        = $_POST['jenis_kelamin'];
    $agama            = $_POST['agama'];
    $asal_sekolah        = $_POST['asal_sekolah'];
    //validasi data data kosong
    if (empty($_POST['nama'])||empty($_POST['alamat'])||empty($_POST['jenis_kelamin'])||empty($_POST['agama'])||empty($_POST['asal_sekolah'])) {
        ?>
            <script language="JavaScript">
                alert('Data Harap Dilengkapi!');
                document.location='download-script-form-input-data.php';
            </script>
        <?php
    }
    else {
    include "../../koneksi-tutor.php";
    //Masukan data ke Table
    $input    ="INSERT INTO mahasiswa (nama,alamat,jurusan,jenis_kelamin,agama,asal_sekolah) VALUES ('$nama','$jenis_kelamin','$jurusan','$jenis_kelamin','$agama','$asal_sekolah')";
    $query_input =mysql_query($input);1
    if ($query_input) {
    //Jika Sukses
    ?>
        <script language="JavaScript">
        alert('Input Data Mahasiswa Berhasil');
        document.location='download-script-form-input-data.php';
        </script>
    <?php
    }
    else {
    //Jika Gagal
    echo "Input Data Mahasiswa Gagal!, Silahkan diulangi!";
    }
//Tutup koneksi engine MySQL
    mysql_close($Open);
    }
}
?>