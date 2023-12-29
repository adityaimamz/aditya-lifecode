<?php

namespace App\Http\Controllers;

use App\Models\pendaftaran; // Mengimpor model pendaftaran

class HasilController extends Controller // Mendefinisikan kelas HasilController yang merupakan turunan dari kelas Controller
{

public function index() // Mendefinisikan fungsi index
{
    $data = pendaftaran::all(); // Mengambil semua data dari model pendaftaran

    $opes = pendaftaran::where('jenis_beasiswa', 'OPES')->count(); // Menghitung jumlah data dengan jenis_beasiswa 'OPES'

    $jsu = pendaftaran::where('jenis_beasiswa', 'JSU')->count(); // Menghitung jumlah data dengan jenis_beasiswa 'JSU'

    return view('hasil', [ // Mengembalikan tampilan 'hasil' dengan data yang diberikan
        'data' => $data, // Data dari model pendaftaran
        'opes' => $opes, // Jumlah data dengan jenis_beasiswa 'OPES'
        'jsu' => $jsu, // Jumlah data dengan jenis_beasiswa 'JSU'
        'title' => 'Hasil Pendaftaran', // Judul tampilan
    ]);
}

}

