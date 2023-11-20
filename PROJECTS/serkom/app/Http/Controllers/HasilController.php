<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\pendaftaran;

class HasilController extends Controller
{
    public function index()
    {
        $data = pendaftaran::all();
        return view('hasil', [
            'data' => $data,
            'title' => 'Hasil Pendaftaran',
        ]);
    }
}
