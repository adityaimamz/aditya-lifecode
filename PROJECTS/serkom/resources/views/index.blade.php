@extends('layouts.app')

@section('content')
    <!-- 
    Deskripsi: Menampilkan header carousel untuk halaman utama
    Initial state: Tidak ada
    Final state: Menampilkan header carousel dengan gambar dan caption
    Author: Aditya Imam Zuhdi
    Versi dan/atau tanggal
    -->
    <div id="header-carousel" class="carousel slide carousel-fade" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img class="w-100" src="img/carousel-1.jpg" alt="Image">
                <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                    <div class="p-3" style="max-width: 900px;">
                        <h5 class="text-white text-uppercase mb-3 animated slideInDown">Beasiswa Unggul</h5>
                        <h1 class="display-1 text-white mb-md-4 animated zoomIn">Ayo Segera Daftarkan Anda di Beasiswa
                            Unggul</h1>
                        <a href="/pendaftaran" class="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Beasiswa
                            Akademik</a>
                        <a href="/pendaftaran" class="btn btn-outline-light py-md-3 px-md-5 animated slideInRight">Beasiswa
                            Non Akademik</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div class="container py-5">
            <div class="row g-5">
                <div class="col-lg-7">
                    <div class="section-title position-relative pb-3 mb-5">
                        <h5 class="fw-bold text-primary text-uppercase">Tentang</h5>
                        <h1 class="mb-0">Beasiswa Unggul adalah beasiswa yang dipetuntukan untuk mahasiswa berprestasi
                        </h1>
                    </div>
                    <p class="mb-4">Syarat-syarat yang harus disiapkan untuk mendaftar beasiswa non akademik</p>
                    <div class="row g-0 mb-3">
                        <div class="col-sm-6 wow zoomIn" data-wow-delay="0.2s">
                            <h5 class="mb-3"><i class="fa fa-check text-primary me-3"></i>IPK ditas 3.0</h5>
                            <h5 class="mb-3"><i class="fa fa-check text-primary me-3"></i>Mahasiswa Aktif dari semester
                                1-8</h5>
                        </div>
                        <div class="col-sm-6 wow zoomIn" data-wow-delay="0.4s">
                            <h5 class="mb-3"><i class="fa fa-check text-primary me-3"></i>Mengumpulkan berkas yang
                                ditentukan</h5>
                                <h5 class="mb-3"><i class="fa fa-check text-primary me-3"></i>Mempunyai prestasi dibidang non kadamik seperti perlombaan Atletik atau Esports</h5>
                        </div>
                    </div>
                    <p class="mb-4">Syarat-syarat yang harus disiapkan untuk mendaftar beasiswa akademik</p>
                    <div class="row g-0 mb-3">
                        <div class="col-sm-6 wow zoomIn" data-wow-delay="0.2s">
                            <h5 class="mb-3"><i class="fa fa-check text-primary me-3"></i>IPK ditas 3.0</h5>
                            <h5 class="mb-3"><i class="fa fa-check text-primary me-3"></i>Mahasiswa Aktif dari semester
                                1-8</h5>
                        </div>
                        <div class="col-sm-6 wow zoomIn" data-wow-delay="0.4s">
                            <h5 class="mb-3"><i class="fa fa-check text-primary me-3"></i>Mengumpulkan berkas yang
                                ditentukan</h5>
                                <h5 class="mb-3"><i class="fa fa-check text-primary me-3"></i>Mempunyai prestasi dibidang akadamik seperti Olimpiade</h5>
                        </div>
                    </div>
                </div>
                <div class="col-lg-5" style="min-height: 500px;">
                    <div class="position-relative h-100">
                        <img class="position-absolute w-100 h-100 rounded wow zoomIn" data-wow-delay="0.9s"
                            src="img/about.jpeg" style="object-fit: cover;">
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
