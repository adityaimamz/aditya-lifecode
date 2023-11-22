<?php

namespace App\Http\Controllers;

use App\Models\pendaftaran;

class HasilController extends Controller
{
    /**
    * Menampilkan hasil pendaftaran beasiswa
    * 
    * Initial state: Tidak ada data yang ditampilkan
    * Final state: Menampilkan halaman hasil dengan data pendaftaran, jumlah akademik, jumlah non-akademik, dan judul
    * Author: aditya imam zuhdi
    * Version: 1.0
    * Date: [tanggal]
    */
    public function index()
    {
        // Mengambil semua data pendaftaran
        $data = pendaftaran::all();

        // Menghitung jumlah pendaftaran dengan jenis beasiswa akademik
        $akademik = pendaftaran::where('jenis_beasiswa', 'akademik')->count();

        // Menghitung jumlah pendaftaran dengan jenis beasiswa non-akademik
        $nonakademik = pendaftaran::where('jenis_beasiswa', 'nonakademik')->count();

        // Mengembalikan view hasil dengan data pendaftaran, jumlah akademik, jumlah non-akademik, dan judul
        return view('hasil', [
            'data' => $data,
            'akademik' => $akademik,
            'nonakademik' => $nonakademik,
            'title' => 'Hasil Pendaftaran',
        ]);
    }

}
