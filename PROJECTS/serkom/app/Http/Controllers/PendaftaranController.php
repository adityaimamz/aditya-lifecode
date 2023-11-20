<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use App\Models\pendaftaran;
use Illuminate\Support\Facades\Validator;


class PendaftaranController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // Menampilkan halaman pendaftaran dengan data judul dan IPK acak
        return view('pendaftaran', [
            'title' => 'Pendaftaran Beasiswa',
            'ipk' => rand(300, 320) / 100
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Validasi data yang diterima dari form
        $validator = Validator::make($request->all(), [
            'nama' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'nomor_hp' => 'required|numeric',
            'semester' => 'required|numeric|between:1,8',
            'ipk' => 'numeric|min:3', // Memastikan IPK memiliki nilai minimal 3
            'jenis_beasiswa' => 'required|in:akademik,nonakademik',
            'upload_berkas' => 'required|mimes:pdf,jpg,jpeg,png,zip|max:2048',
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
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
