@extends('layouts/app')

@section('content')
    <div class="container-fluid bg-primary py-5 bg-header" style="margin-bottom: 90px;">
        <div class="row py-5">
            <div class="col-12 pt-lg-5 mt-lg-5 text-center">
                <h1 class="display-4 text-white animated zoomIn">Halaman Pendaftaran</h1>
            </div>
        </div>
    </div>
    <div class="container-fluid wow fadeInUp" data-wow-delay="0.1s">
        <div class="container">
            <div class="section-title text-center position-relative pb-3 mb-5 mx-auto" style="max-width: 600px;">
                <h5 class="fw-bold text-primary text-uppercase">Daftar</h5>
                <h1 class="mb-0">Jadilah Bagian dari Beasiswa Unggul</h1>
            </div>
            <div class="row g-5 mb-5">

                <div class="col-lg-4 mx-auto">
                    <div class="d-flex align-items-center wow fadeIn" data-wow-delay="0.4s">
                        <div class="bg-primary d-flex align-items-center justify-content-center rounded"
                            style="width: 60px; height: 60px;">
                            <i class="fa fa-envelope-open text-white"></i>
                        </div>
                        <div class="ps-4">
                            <h5 class="mb-2">Lengkapi data diri anda</h5>
                            <h4 class="text-primary mb-0">Isi form dibawah ini</h4>
                        </div>
                    </div>
                </div>

            </div>
            <div class="row g-5">
                <div class="col-lg-12 wow slideInUp" data-wow-delay="0.3s">
                    @if (Session::has('success'))
                        <a href="/hasil">
                            <div class="alert alert-success alert-dismissible fade show" role="alert">
                                {{ Session::get('success') }}
                                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </div>
                        </a>
                    @endif
                    <form action="{{ route('pendaftaran.store') }}" method="POST" class="text-main"
                        enctype="multipart/form-data" id="beasiswaForm">
                        @csrf
                        <div class="row g-3">
                            <div class="col-md-12">
                                <select class="form-select border-0 bg-light px-4" name="nim" id="nim"
                                    style="height: 55px;">
                                    <option value="" disabled selected>Pilih NIM</option>
                                    <!-- Tampilkan daftar NIM dari database -->
                                    @foreach ($daftarNIM as $nim)
                                        <option value="{{ $nim }}">{{ $nim }}</option>
                                    @endforeach
                                </select>
                                <div class="errors text-danger" style="font-size: 14px">
                                    {{ $errors->pendaftaran->first('nim') }}</div>
                            </div>
                            <div class="col-md-12">
                                <input type="text" class="form-control border-0 bg-light px-4" name="nama"
                                    placeholder="Masukan Nama Anda" value="{{ isset($mahasiswa->nama) ? $nama : '' }}"
                                    style="height: 55px;" readonly>
                                <div class="errors text-danger" style="font-size: 14px">
                                    {{ $errors->pendaftaran->first('nama') }}</div>
                            </div>
                            <div class="col-md-12">
                                <input type="email" class="form-control border-0 bg-light px-4" name="email"
                                    placeholder="Masukan Email" style="height: 55px;">
                                <div class="errors text-danger" style="font-size: 14px">
                                    {{ $errors->pendaftaran->first('email') }}</div>
                            </div>
                            <div class="col-md-12">
                                <input type="number" class="form-control border-0 bg-light px-4" name="nomor_hp"
                                    placeholder="Masukan Nomor HP"
                                    style="height: 55px;">
                                <div class="errors text-danger" style="font-size: 14px">
                                    {{ $errors->pendaftaran->first('nomor_hp') }}</div>
                            </div>
                            <div class="col-md-12">
                                <select class="form-select border-0 bg-light px-4" name="semester" id style="height: 55px;">
                                    <option value="" disabled selected>Semester</option>
                                    @for ($i = 1; $i <= 8; $i++)
                                        <option value="{{ $i }}">{{ $i }}</option>
                                    @endfor
                                </select>
                                <div class="errors text-danger" style="font-size: 14px">
                                    {{ $errors->pendaftaran->first('semester') }}</div>
                            </div>
                            <div class="col-md-12">
                                <input type="text" class="form-control border-0 bg-light px-4" name="ipk"
                                    id="ipk" value="{{ isset($mahasiswa->ipk) ? $ipk : '' }}"
                                    placeholder="Masukan IPK" style="height: 55px;" readonly>
                                <div class="errors text-danger" style="font-size: 14px">
                                    {{ $errors->pendaftaran->first('ipk') }}</div>
                            </div>

                            <div class="col-md-12">
                                <select class="form-select border-0 bg-light px-4" name="jenis_beasiswa"
                                    style="height: 55px;" id="jenisBeasiswa" disabled>
                                    <option value="" disabled selected>Jenis Beasiswa</option>
                                    <option value="akademik">Akademik</option>
                                    <option value="nonakademik">Non Akademik</option>
                                </select>
                                <div class="errors text-danger" style="font-size: 14px">
                                    {{ $errors->pendaftaran->first('jenis_beasiswa') }}</div>
                            </div>

                            <div class="col-md-12">
                                <input type="file" class="form-control border-0 bg-light px-4" name="upload_berkas"
                                    id="uploadBerkas" style="height: 55px;" disabled>
                                <div class="errors text-danger" style="font-size: 14px">
                                    {{ $errors->pendaftaran->first('upload_berkas') }}</div>
                            </div>
                            <div class="col-12">
                                <button id="btnDaftar" class="btn btn-primary w-100 py-3" type="submit" disabled>Daftar Beasiswa</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>

    <script>
        $(document).ready(function() {
            let ipkValue = "";
            // Menangkap perubahan pada pilihan NIM
            $('#nim').on('change', function() {
                var nim = $(this).val();

                // Lakukan permintaan AJAX untuk mengambil data mahasiswa berdasarkan NIM
                $.ajax({
                    url: '/get-mahasiswa/' + nim, // Ganti dengan URL yang sesuai di aplikasi Anda
                    dataType: 'json',
                    type: 'GET',
                    success: function(data) {
                        // Isi nilai nama dan IPK dengan data yang diambil dari server
                        $('input[name="nama"]').val(data.nama);
                        $('input[name="ipk"]').val(data.ipk);
                        ipkValue = data.ipk;
                        console.log(ipkValue);
                        // Mendapatkan elemen input jenis beasiswa
                        let jenisBeasiswaInput = document.getElementById("jenisBeasiswa");
                        let upload_berkas = document.getElementById("uploadBerkas");
                        let button = document.getElementById("btnDaftar");

                        // Memeriksa apakah IPK kurang dari 3, jika ya, nonaktifkan input jenis beasiswa
                        if (ipkValue < 3) {
                            jenisBeasiswaInput.disabled = true;
                            upload_berkas.disabled = true;
                            button.disabled = true;
                        } else {
                            jenisBeasiswaInput.disabled = false;
                            upload_berkas.disabled = false;
                            button.disabled = false;
                        }
                    },
                    error: function(xhr, status, error) {
                        console.error(error);
                    }
                });

            });
        });
    </script>
@endsection
