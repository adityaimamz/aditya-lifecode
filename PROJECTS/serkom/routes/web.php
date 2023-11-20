<?php


use App\Http\Controllers\PendaftaranController;
use App\Http\Controllers\HasilController;
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

Route::get('/', function () {
    return view('index', ['title' => 'Dashboard']);
});

Route::resource('pendaftaran', PendaftaranController::class);

Route::resource('hasil', HasilController::class);

Route::get('/test', function () {
    return view('test');
});
