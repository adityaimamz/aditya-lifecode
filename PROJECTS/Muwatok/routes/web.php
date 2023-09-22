<?php

use App\Http\Controllers\auth\LoginController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\articleController;
use App\Http\Controllers\BlogController;
use App\Models\article;

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

// Route::get('/', [BlogController::class, 'index']);

Route::get('/', function () {
    $articles = article::all();
    return view('blog', ['articles' => $articles]);
});

Route::get('/detail/{slug}', function ($slug) {
    $article = article::where('slug', $slug)->first();
    $articles = article::all();
    return view('detail-article', [
        'article' => $article,
        
    ]);
});



Route::get('/detail', function () {
    return view('detail-article');
});

Route::prefix('admin')->middleware('auth')->group(function () {
    Route::get('/', function () {
        return view('admin.dashboard');
    });
    Route::resource('article', articleController::class);
});

Route::get('/login', [LoginController::class, 'index'])->name('login');
Route::post('/login', [LoginController::class, 'store'])->name('login.store');
Route::get('/logout', [LoginController::class, 'logout'])->name('logout');

Route::get('/test', function () {
    return view('admin.test');
});