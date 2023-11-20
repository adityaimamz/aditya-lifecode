@extends('layouts.app')

@section('content')
<div id="header-carousel" class="carousel slide carousel-fade" data-bs-ride="carousel">
    <div class="carousel-inner">
        <div class="carousel-item active">
            <img class="w-100" src="img/carousel-1.jpg" alt="Image">
            <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div class="p-3" style="max-width: 900px;">
                    <h5 class="text-white text-uppercase mb-3 animated slideInDown">Beasiswa Unggul</h5>
                    <h1 class="display-1 text-white mb-md-4 animated zoomIn">Ayo Segera Daftarkan Anda di Beasiswa Unggul</h1>
                    <a href="/pendaftaran" class="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Beasiswa Akademik</a>
                    <a href="/pendaftaran" class="btn btn-outline-light py-md-3 px-md-5 animated slideInRight">Beasiswa Non Akademik</a>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
