<?php

use App\Http\Controllers\HasilController;
use App\Http\Controllers\PendaftaranController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
 */

// Route untuk menampilkan halaman utama
Route::get('/', function () {
    return view('index', ['title' => 'Dashboard']); 
});

// Route resource untuk pendaftaran
Route::resource('pendaftaran', PendaftaranController::class); 

// Route untuk mendapatkan data mahasiswa berdasarkan NIM
Route::get('/get-mahasiswa/{nim}', [PendaftaranController::class, 'getMahasiswa']); 

// Route resource untuk hasil
Route::resource('hasil', HasilController::class); 


