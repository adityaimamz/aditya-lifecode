@extends('layouts.app')

@section('content')
@foreach ($dashboard as $item)
        <div id="hero" class="carousel slide carousel-fade" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img class="w-100" src="{{ Storage::url($item->heroimage) }}" alt="Image">
                <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                    <div class="p-3" style="max-width: 900px;">
                        <h5 class="text-white text-uppercase mb-3 animated slideInDown">{{ $item->herosubtitle }}</h5>
                        <h1 class="display-1 text-white mb-md-4 animated zoomIn">{{ $item->herotitle }}</h1>
                        <a href="#about" class="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">About</a>
                        <a href="#contact" class="btn btn-outline-light py-md-3 px-md-5 animated slideInRight">Contact</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
        <div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s" id="about">
        <div class="container py-5">
            <div class="row g-5">
                <div class="col-lg-7">
                    <div class="section-title position-relative pb-3 mb-5">
                        <h5 class="fw-bold text-primary text-uppercase">About</h5>
                        <h1 class="mb-0">{{ $item->abouttitle }}</h1>
                    </div>
                    <p class="mb-4">{{ $item->abouttext }}</p>
                    <a href="/blog" class="btn btn-primary py-3 px-5 mt-3 wow zoomIn" data-wow-delay="0.9s">Lihat Artikel</a>
                </div>
                <div class="col-lg-5" style="min-height: 500px;">
                    <div class="position-relative h-100">
                        <img class="position-absolute w-100 h-100 rounded wow zoomIn" data-wow-delay="0.9s"
                            src="{{ Storage::url($item->aboutimage) }}" style="object-fit: cover;">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s" id="contact">
        <div class="container py-5">
            <div class="section-title text-center position-relative pb-3 mb-5 mx-auto" style="max-width: 600px;">
                <h5 class="fw-bold text-primary text-uppercase">Contact</h5>
                <h1 class="mb-0">{{ $item->contacttitle }}</h1>
            </div>
            <div class="row g-5 mb-5">
                <div class="col-lg-4">
                    <div class="d-flex align-items-center wow fadeIn" data-wow-delay="0.1s">
                        <div class="bg-primary d-flex align-items-center justify-content-center rounded"
                            style="width: 60px; height: 60px;">
                            <i class="fa fa-phone-alt text-white"></i>
                        </div>
                        <div class="ps-4">
                            <h5 class="mb-2">
                                Nomor Telepon</h5>
                            <h4 class="text-primary mb-0">{{ $item->phone }}</h4>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="d-flex align-items-center wow fadeIn" data-wow-delay="0.4s">
                        <div class="bg-primary d-flex align-items-center justify-content-center rounded"
                            style="width: 60px; height: 60px;">
                            <i class="fa fa-envelope-open text-white"></i>
                        </div>
                        <div class="ps-4">
                            <h5 class="mb-2">Email</h5>
                            <h4 class="text-primary mb-0">{{ $item->email }}</h4>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="d-flex align-items-center wow fadeIn" data-wow-delay="0.8s">
                        <div class="bg-primary d-flex align-items-center justify-content-center rounded"
                            style="width: 60px; height: 60px;">
                            <i class="fa fa-map-marker-alt text-white"></i>
                        </div>
                        <div class="ps-4">
                            <h5 class="mb-2">Kantor</h5>
                            <h4 class="text-primary mb-0">{{ $item->address }}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endforeach



@endsection
