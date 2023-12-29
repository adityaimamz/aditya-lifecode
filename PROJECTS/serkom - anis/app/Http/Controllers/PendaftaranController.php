<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use App\Models\pendaftaran;
use Illuminate\Support\Facades\Validator;
use App\Models\Mahasiswa;


class PendaftaranController extends Controller
{
    // Fungsi untuk menampilkan halaman pendaftaran beasiswa
    public function index()
    {
        $daftarNIM = Mahasiswa::pluck('nim'); // Mengambil daftar NIM dari model Mahasiswa
        $jenisBeasiswaData = pendaftaran::all(); // Mengambil semua data jenis beasiswa dari model pendaftaran

        return view('pendaftaran', [ // Mengembalikan tampilan 'pendaftaran' dengan data yang diberikan
            'title' => 'Pendaftaran Beasiswa', // Judul tampilan
            'daftarNIM' => $daftarNIM, // Data daftar NIM
            'jenisBeasiswaData' => $jenisBeasiswaData // Data jenis beasiswa
        ]);
    }
    

    // Fungsi untuk mendapatkan data mahasiswa berdasarkan NIM
    public function getMahasiswa($nim)
    {
        $mahasiswa = Mahasiswa::where('nim', $nim)->first(); // Mengambil data mahasiswa berdasarkan NIM

        if ($mahasiswa) {
            return json_encode($mahasiswa); // Mengembalikan data mahasiswa dalam format JSON
        } else {
            return 'mahasiswa tidak ditemukan'; // Mengembalikan pesan jika mahasiswa tidak ditemukan
        }
    }


    // Fungsi untuk menyimpan data pendaftaran
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [ // Membuat validasi data pendaftaran
            'nim' => 'required|numeric',
            'nama' => 'required|string|max:255',
            'email' => 'required|email:dns|max:255|unique:pendaftarans,email',
            'nomor_hp' => 'required|numeric',
            'semester' => 'required|numeric|between:1,8',
            'ipk' => 'numeric|min:3', 
            'jenis_beasiswa' => 'required',
            'upload_berkas' => 'required|mimes:pdf,jpg,jpeg,zip',
        ]);

        if ($validator->fails()) {
            return redirect()->route('pendaftaran.index')->withErrors($validator, 'pendaftaran'); // Redirect kembali ke halaman pendaftaran dengan pesan error
        }


        $path = 'uploads'; // Menentukan path untuk menyimpan berkas
    
        $file = $request->file('upload_berkas'); // Mengambil berkas yang diupload
        $fileName = $file->getClientOriginalName(); // Mendapatkan nama asli berkas
        $file->move($path, $fileName); // Memindahkan berkas ke folder yang ditentukan
        $gambarPath = $path . '/' . $fileName; // Menyimpan path berkas yang diupload
    

        pendaftaran::create([ // Menyimpan data pendaftaran ke dalam database
            'nim' => $request->nim,
            'nama' => $request->nama,
            'email' => $request->email,
            'nomor_hp' => $request->nomor_hp,
            'semester' => $request->semester,
            'ipk' => $request->ipk,
            'jenis_beasiswa' => $request->jenis_beasiswa,
            'upload_berkas' => $path . '/' . $fileName,
            'status_ajuan' => 'belum di verifikasi',
        ]);

        // Redirect kembali ke halaman pendaftaran dengan pesan sukses
        return redirect()->route('pendaftaran.index')->with('success', 'Data terkirim!');
    }

    // Fungsi untuk menghapus data pendaftaran berdasarkan ID
    public function destroy(string $id)
    {
        $pendaftaran = pendaftaran::find($id); // Mengambil data pendaftaran berdasarkan ID
        $pendaftaran->delete(); // Menghapus data pendaftaran
    }
}

