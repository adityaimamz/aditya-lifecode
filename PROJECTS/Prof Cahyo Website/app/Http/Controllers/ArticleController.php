<?php

namespace App\Http\Controllers;

use App\Models\article;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class ArticleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = article::all();
        return view('admin.article.index', ['data' => $data]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('admin.article.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $path = 'uploads';
    
        // Check if a file is uploaded
        if ($request->hasFile('gambar')) {
            $file = $request->file('gambar');
            $fileName = $file->getClientOriginalName();
            $file->move($path, $fileName);
            $gambarPath = $path . '/' . $fileName;
        } else {
            // Jika tidak ada file yang diunggah, atur $gambarPath menjadi null atau sesuai kebutuhan
            $gambarPath = null;
        }
    
        Article::create([
            'judul' => $request->judul,
            'slug' => Str::slug($request->judul, '-'),
            'meta_judul' => $request->meta_judul,
            'meta_deskripsi' => $request->meta_deskripsi,
            'konten' => $request->konten,
            'gambar' => $gambarPath, // Gunakan $gambarPath yang sudah diatur
        ]);
    
        return redirect()->route('article.index');
    }
    

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $data = article::where('slug', $id)->first();
        return view('admin.article.show', ['data' => $data]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $data = article::where('id', $id)->first();
        return view('admin.article.edit', ['data' => $data]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $path = 'uploads';
    
        // Check if a file is uploaded
        if ($request->hasFile('gambar')) {
            $file = $request->file('gambar');
            $fileName = $file->getClientOriginalName();
            $file->move($path, $fileName);
            $gambarPath = $path . '/' . $fileName;
        } else {
            // Jika tidak ada file yang diunggah, atur $gambarPath menjadi null atau sesuai kebutuhan
            $gambarPath = null;
        }
    
        $data = [
            'judul' => $request->judul,
            'slug' => Str::slug($request->judul, '-'),
            'meta_judul' => $request->meta_judul,
            'meta_deskripsi' => $request->meta_deskripsi,
            'konten' => $request->konten,
        ];
    
        // Hanya atur 'gambar' jika file diunggah
        if ($gambarPath !== null) {
            $data['gambar'] = $gambarPath;
        }
    
        Article::where('id', $id)->update($data);
    
        return redirect()->route('article.index');
    }
    

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        article::where('id', $id)->delete();
        return redirect()->route('article.index');
    }
}
