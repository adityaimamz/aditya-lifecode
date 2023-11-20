@extends('layouts/app')

@section('content')

    <div class="container-fluid bg-primary py-5 bg-header" style="margin-bottom: 90px;">
        <div class="row py-5">
            <div class="col-12 pt-lg-5 mt-lg-5 text-center">
                <h1 class="display-4 text-white animated zoomIn">Halaman Hasil</h1>
            </div>
        </div>
    </div>
    <div class="container-fluid wow fadeInUp h-screen" data-wow-delay="0.1s">
        <div class="container">
            <div class="section-title text-center position-relative pb-3 mb-5 mx-auto" style="max-width: 600px;">
                <h5 class="fw-bold text-primary text-uppercase">Hasil</h5>
                <h1 class="mb-0">Berikut daftar nama yang telah mendaftar beasiswa unggul</h1>
            </div>
            <table class="data-table table stripe hover nowrap" id="hasil">
                <thead>
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">Nama</th>
                        <th scope="col">Email</th>
                        <th scope="col">No HP</th>
                        <th scope="col">Semester</th>
                        <th scope="col">IPK</th>
                        <th scope="col">Jalur Beasiswa</th>
                        <th scope="col">Status Ajuan</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($data as $d)
                        <tr>
                            <td>{{ $loop->iteration }}</td>
                            <td>{{ $d->nama }}</td>
                            <td>{{ $d->email }}</td>
                            <td>{{ $d->nomor_hp }}</td>
                            <td>{{ $d->semester }}</td>
                            <td>{{ $d->ipk }}</td>
                            <td>{{ $d->jenis_beasiswa }}</td>
                            <td>{{ $d->status_ajuan }}</td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
            
        </div>
    </div>
    </div>

@endsection
