@extends('layouts.app')

@section('content')
    <!-- Carousel Start -->
    <div class="container-fluid px-0">
        <div id="carouselId" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner" role="listbox">
                <div class="carousel-item active">
                    <img src="img/carousel-1.jpg" class="w-100" alt="First slide">
                    <div class="carousel-caption">
                        <div class="container carousel-content">
                            <h6 class="text-light h4 animated fadeInUp">Selamat Datang!</h6>
                            <h1 class="text-white display-1 mb-4 animated fadeInRight">BEASISWA TELKOM TELAH HADIR</h1>
                            <p class="mb-4 text-white fs-5 animated fadeInDown">Dibuka kesempatan untuk mahasiswa aktif
                                Institut Teknologi Telkom Purwokerto</p>
                            <a href="#jsu" class="me-2"><button type="button"
                                    class="px-4 py-sm-3 px-sm-5 btn btn-dark rounded-pill carousel-content-btn1 animated fadeInLeft">Beasiswa
                                    JSU</button></a>
                            <a href="#opes" class="ms-2"><button type="button"
                                    class="px-4 py-sm-3 px-sm-5 btn btn-primary rounded-pill carousel-content-btn2 animated fadeInRight">Beasiswa
                                    OPES</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Carousel End -->



    <!-- About Start -->
    <div class="container-fluid py-5 my-5" >
        <div class="container pt-5">
            <div class="row g-5">
                <div class="col-lg-5 col-md-6 col-sm-12 wow fadeIn" data-wow-delay=".3s">
                    <div class="h-100 position-relative">
                        <img src="img/about-1.jpg" class="img-fluid w-75 rounded" alt=""
                            style="margin-bottom: 25%;">
                        <div class="position-absolute w-75" style="top: 25%; left: 25%;">
                            <img src="img/about-2.jpg" class="img-fluid w-100 rounded" alt="">
                        </div>
                    </div>
                </div>
                <div class="col-lg-7 col-md-6 col-sm-12 wow fadeIn" data-wow-delay=".5s" id="opes">
                    <h5 class="text-primary">Tentang</h5>
                    <h1 class="mb-4">Beasiswa OPES ( One Pipe Education System)</h1>
                    <p>Beasiswa OPES (One Pipe Education System). Merupakan program beasiswa khusus bagi lulusan Telkom School seluruh indonesia dengan
                        peringkat sepuluh besar pararel sekolah dengan benefit bebas biaya
                        pendidikan sampai lulus, serta program potongan biaya masuk untuk peringkat berikutnya.
                        </p>
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
                                    <h5 class="mb-3"><i class="fa fa-check text-primary me-3"></i>Lulusan 10 terbaik Telkom School seluruh Indonesia</h5>
                            </div>
                        </div>
                    <a href="/pendaftaran" class="btn btn-primary rounded-pill px-5 py-3 text-white">More Details</a>
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid py-5 my-5">
        <div class="container pt-5">
            <div class="row g-5">
                <div class="col-lg-6 col-md-6 col-sm-12 wow fadeIn" data-wow-delay=".3s" id="jsu">
                    <h5 class="text-primary">Tentang</h5>
                    <h1 class="mb-4">Beasiswa JSU (Jalur Seleksi Unggulan)</h1>
                    <p>
                        Beasiswa JSU (Jalur Seleksi Unggulan), yaitu program seleksi beasiswa penuh sampai lulus dengan evaluasi IPK. Diperuntukkan bagi siswa calon mahasiswa berprestasi akademik maupun non akademik dengan kualifikasi dibidang agama (Tahfidz), olahraga, skill (content Creator, influencer, dll),
                        entrepreneurship program dan sebagainya.</p>
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
                                    <h5 class="mb-3"><i class="fa fa-check text-primary me-3"></i>Mempunyai prestasi dibidang akadamik dan non akademik</h5>
                            </div>
                        </div>
                    <a href="/pendaftaran" class="btn btn-dark rounded-pill px-5 py-3 text-white">More Details</a>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12 wow fadeIn" data-wow-delay=".5s">
                    <div class="h-100 position-relative">
                        <img src="img/about-1.jpg" class="img-fluid w-75 rounded" alt=""
                            style="margin-bottom: 25%;">
                        <div class="position-absolute w-75" style="top: 25%; left: 25%;">
                            <img src="img/about-2.jpg" class="img-fluid w-100 rounded" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- About End -->
@endsection
