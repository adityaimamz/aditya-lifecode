@extends('layouts/app')

@section('content')
    <div class="container-fluid wow fadeInUp pt-5" data-wow-delay="0.1s">
        <div class="container">
            <div class="text-center mx-auto pb-5 wow fadeIn" data-wow-delay=".3s" style="max-width: 600px;">
                <h5 class="text-primary">Pendaftaran</h5>
                <h1 class="mb-3">Silahkan isi form dibawah</h1>
                <p class="mb-2">Cek nim anda dan pastikan anda mememnuhi syarat dna berkas dari beasiswa yang akan anda
                    daftarkan</a>.</p>
            </div>

            <div class="row g-5 mb-5">

                <div class="col-lg-4 mx-auto">
                    <div class="d-flex align-items-center wow fadeIn" data-wow-delay="0.4s">
                    </div>
                </div>

            </div>
            <div class="row g-5 contact-form ">
                <div class="col-lg-12 slideInUp" data-wow-delay="0.3s">
                    <!-- Menampilkan pesan sukses jika ada -->

                    <form action="{{ route('pendaftaran.store') }}" method="POST" class="text-main"
                        enctype="multipart/form-data" id="beasiswaForm">
                        @csrf
                        <div class="row g-3">
                            <div class="col-md-12">
                                <input type="number" class="form-control border-0 bg-light px-4" id="nim"
                                    name="nim" placeholder="Masukan Nim Anda terlebih dahulu!" 
                                    style="height: 55px;" >
                                    <div class="errors text-danger" style="font-size: 14px">
                                        {{ $errors->pendaftaran->first('nim') }}</div>
                                </div>
                                <div class="col-md-12">
                                    <input type="text" class="form-control border-0 bg-light px-4" name="nama"
                                        placeholder="Masukan Nama Anda" value="{{ isset($mahasiswa->nama) ? $nama : '' }}"
                                        style="height: 55px;" readonly>
                                        <div class="errors text-danger" style="font-size: 14px" hidden id="nimError">
                                            nim tidak terdaftar!
                                        </div>
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
                                        placeholder="Masukan Nomor HP" style="height: 55px;">
                                    <div class="errors text-danger" style="font-size: 14px">
                                        {{ $errors->pendaftaran->first('nomor_hp') }}</div>
                                </div>
                                <div class="col-md-12">
                                    <select class="form-select border-0 bg-light px-4" name="semester" id style="height: 55px;">
                                        <option value="" disabled selected>Semester</option>
                                         @for ($semester=1; $semester <=8;
                                    $semester++)
                                <option value="{{ $semester }}">{{ $semester }}</option>
                                @endfor
                                </select>
                                <div class="errors text-danger" style="font-size: 14px">
                                    {{ $errors->pendaftaran->first('semester') }}</div>
                            </div>
                            <div class="col-md-12">
                                <input type="text" class="form-control border-0 bg-light px-4" name="ipk"
                                    id="ipk" value="{{ isset($mahasiswa->ipk) ? $ipk : '' }}"
                                    placeholder="Masukan IPK" style="height: 55px;" readonly>
                                <div class="errors text-danger" style="font-size: 14px" hidden id="ipkError">
                                    IPK dibawah 3, tidak dapat mendaftar beasiswa
                                </div>
                            </div>

                            <div class="col-md-12">
                                <select class="form-select border-0 bg-light px-4" name="jenis_beasiswa"
                                    style="height: 55px;" id="jenisBeasiswa" disabled>
                                    <option value="" disabled selected>Jenis Beasiswa</option>
                                    <option value="opes">OPES (One Pipe Education System)</option>
                                    <option value="jsu">JSU (Jalur Seleksi Unggulan)</option>
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
                            @if (Session::has('success'))
                                <a href="/hasil">
                                    <div class="alert alert-success alert-dismissible fade show" role="alert">
                                        {{ Session::get('success') }}
                                        <button type="button" class="btn-close" data-bs-dismiss="alert"
                                            aria-label="Close"></button>
                                    </div>
                                </a>
                            @endif
                            <div class="col-12">
                                <button id="btnDaftar" class="btn btn-primary w-100 py-3" type="submit" disabled>Daftar
                                    Beasiswa</button>
                                <button id="btnCancel" class="btn btn-light w-100 my-3 py-3" type="reset"
                                    disabled>Cancel</button>
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
                        // Mendapatkan elemen input jenis beasiswa
                        let jenisBeasiswaInput = document.getElementById("jenisBeasiswa");
                        let upload_berkas = document.getElementById("uploadBerkas");
                        let button = document.getElementById("btnDaftar");
                        let button_cancel = document.getElementById("btnCancel");
                        let ipkError = document.getElementById("ipkError");
                        let nimError = document.getElementById("nimError");
                        // Memeriksa apakah IPK kurang dari 3, jika ya, nonaktifkan input jenis beasiswa
                        if (data.ipk < 3) {
                            ipkError.hidden = false;
                            nimError.hidden = true;
                        } else {
                            ipkError.hidden = true;
                            nimError.hidden = true;
                        }
                        jenisBeasiswaInput.disabled = data.ipk < 3;
                        upload_berkas.disabled = data.ipk < 3;
                        button.disabled = data.ipk < 3;
                        button_cancel.disabled = data.ipk < 3;
                    },
                    error: function(xhr, status, error) {
                        console.error(error);
                        $('input[name="nama"]').val('');
                        $('input[name="ipk"]').val('');
                        let jenisBeasiswaInput = document.getElementById("jenisBeasiswa");
                        let upload_berkas = document.getElementById("uploadBerkas");
                        let button = document.getElementById("btnDaftar");
                        let button_cancel = document.getElementById("btnCancel");
                        let ipkError = document.getElementById("ipkError");
                        let nimError = document.getElementById("nimError");
                        jenisBeasiswaInput.disabled = true;
                        upload_berkas.disabled = true;
                        button.disabled = true;
                        button_cancel.disabled = true;
                        nimError.hidden = false;
                    }
                });

            });

        });
    </script>
@endsection
