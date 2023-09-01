<html>
    <head>
        <title>Formulir Pendaftaran Siswa Baru</title>
    </head>
    <body>
    <h2>Formulir Pendaftaran Siswa Baru</h2>
    <form action="tambah.php" method="post">        
                <label for="nama">Nama : </label>
                <input type="text" name="nama" placeholder="nama lengkap"><br>
            <br>
                <label for="alamat">Alamat : </label>
                <textarea id="alamat" name="alamat" cols="50" rows="4"></textarea><br>
            <br>
            <p>Jenis Kelamin : </p>
                <input type="radio" id="laki" name="jk" value="L"><label for="laki">Laki-laki</label>
                <input type="radio" id="perempuan" name="jk" vale="P"><label for="perempuan">Perempuan</label>
            <br>
                <label for="agama">Agama : </label> 
                <select id="agama" name="agama">
                <option value="islam">Islam</option>
                <option value="kristen">Kristen</option>
                <option value="hindu">Hindu</option>
                <option value="budha">Budha</option>
                <option value="katolik">Katoik</option>
            </select>
            <br>
                <label for="sekolah">Sekolah asal :</label>
                <input type="text" name="sekolah" placeholder="nama sekolah"><br>
             <br>   
                <input type="submit" name="submit" value="Daftar">
    </form>
</body>
</html>
