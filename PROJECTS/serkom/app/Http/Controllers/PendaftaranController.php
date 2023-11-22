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
    /**
     * Menampilkan daftar pendaftaran beasiswa
     * 
     * Initial state: Tidak ada data yang ditampilkan
     * Final state: Menampilkan halaman pendaftaran dengan data judul, dan daftar NIM
     * Author: aditya imam zuhdi
     * Version: 1.0
     * Date: 2022-10-01
     */
    public function index()
    {
        // Mengambil daftar NIM dari tabel mahasiswa
        $daftarNIM = Mahasiswa::pluck('nim');
        $jenisBeasiswaData = pendaftaran::all();

        // Menampilkan halaman pendaftaran dengan data judul, dan daftar NIM
        return view('pendaftaran', [
            'title' => 'Pendaftaran Beasiswa',
            'daftarNIM' => $daftarNIM,
            'jenisBeasiswaData' => $jenisBeasiswaData
        ]);
    }    
    

/**
 * Mengambil data mahasiswa berdasarkan NIM
 *
 * Initial state: Tidak ada data mahasiswa yang diambil
 * Final state: Mengembalikan data mahasiswa berdasarkan NIM
 * Author: aditya imam zuhdi
 * Version: 1.0
 * Date: 2022-10-01
 */
public function getMahasiswa($nim)
{
    $mahasiswa = Mahasiswa::where('nim', $nim)->first();

    return $mahasiswa ? json_encode($mahasiswa) : 'mahasiswa tidak ditemukan';
}


    /**
     * Menyimpan data pendaftaran beasiswa ke dalam database
     * 
     * Initial state: Tidak ada data pendaftaran beasiswa yang disimpan
     * Final state: Data pendaftaran beasiswa disimpan ke dalam database
     * Author: aditya imam zuhdi
     * Version: 1.0
     * Date: 2022-10-01
     */
    public function store(Request $request)
    {
        // Validasi data yang diterima dari form
        $validator = Validator::make($request->all(), [
            'nim' => 'required|numeric',
            'nama' => 'required|string|max:255',
            'email' => 'required|email:dns|max:255',
            'nomor_hp' => 'required|numeric',
            'semester' => 'required|numeric|between:1,8',
            'ipk' => 'numeric|min:3', // Memastikan IPK memiliki nilai minimal 3
            'jenis_beasiswa' => 'required|in:akademik,nonakademik',
            'upload_berkas' => 'required|mimes:pdf,jpg,jpeg,png,zip',
        ]);

        if ($validator->fails()) {
            // Jika validasi gagal, redirect kembali ke halaman pendaftaran dengan error
            return redirect()->route('pendaftaran.index')->withErrors($validator, 'pendaftaran');
        }


        // Memproses upload berkas
        $path = 'Gambar_Berkas';
        $file = $request->file('upload_berkas');
        $fileName = $file->getClientOriginalName();
        Storage::putFileAs($path, $file, $fileName);

        // Menyimpan data pendaftaran beasiswa ke dalam database
        pendaftaran::create([
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
        return redirect()->route('pendaftaran.index')->with('success', 'Data diproses, Silahkan Lihat di Halaman Hasil');
    }

    /**
     * Menghapus data pendaftaran beasiswa dari database
     * 
     * Initial state: Tidak ada data pendaftaran beasiswa yang dihapus
     * Final state: Data pendaftaran beasiswa dihapus dari database
     * Author: aditya imam zuhdi
     * Version: 1.0
     * Date: 2022-10-01
     */
    public function destroy(string $id)
    {
        $pendaftaran = pendaftaran::find($id);
        $pendaftaran->delete();
    }
}
