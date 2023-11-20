<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>Pendaftaran Beasiswa</title>
    <meta content="width=device-width, initial-scale=1.0" name="viewport">

    <link href="img/favicon.png" rel="icon">

    <!-- Google Web Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&family=Rubik:wght@400;500;600;700&display=swap"
        rel="stylesheet">

    <!-- Icon Font Stylesheet -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet">


    <!-- Libraries Stylesheet -->
    <link href="{{ asset('lib/owlcarousel/assets/owl.carousel.min.css') }}" rel="stylesheet">
    <link href="{{ asset('lib/animate/animate.min.css') }}" rel="stylesheet">


    <!-- Customized Bootstrap Stylesheet -->
    <link href="{{ asset('css/bootstrap.min.css') }}" rel="stylesheet">

    <!-- Template Stylesheet -->
    <link href="{{ asset('css/style.css') }}" rel="stylesheet">
</head>

<body>
    <!-- Spinner Start -->
    <div id="spinner"
        class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
        <div class="spinner"></div>
    </div>
    <!-- Spinner End -->


    <!-- Navbar Start -->
    <div class="container-fluid position-relative p-0">
        <nav class="navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0">
            <a href="/" class="navbar-brand p-0">
                <h1 class="m-0">Beasiswa</h1>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span class="fa fa-bars"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <div class="navbar-nav ms-auto py-0">
                    <a href="/" class="nav-item nav-link {{ $title === 'Dashboard' ? 'active' : '' }}">Beranda</a>
                    <a href="/pendaftaran"
                        class="nav-item nav-link {{ $title === 'Pendaftaran Beasiswa' ? 'active' : '' }}">Pendaftaran</a>
                    <a href="/hasil"
                        class="nav-item nav-link {{ $title === 'Hasil Pendaftaran' ? 'active' : '' }}">Hasil</a>
                </div>
            </div>
        </nav>


        @yield('content')





        <!-- Back to Top -->
        <a href="#" class="btn btn-lg btn-primary btn-lg-square rounded back-to-top"><i
                class="bi bi-arrow-up"></i></a>


        <!-- JavaScript Libraries -->
        <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
        <script src="{{ asset('lib/wow/wow.min.js') }}"></script>
        <script src="{{ asset('lib/easing/easing.min.js') }}"></script>
        <script src="{{ asset('lib/waypoints/waypoints.min.js') }}"></script>
        <script src="{{ asset('lib/counterup/counterup.min.js') }}"></script>
        <script src="{{ asset('lib/owlcarousel/owl.carousel.min.js') }}"></script>
        <script src="{{ asset('assets-admin/src/plugins/datatables/js/jquery.dataTables.min.js') }}"></script>
        <script src="{{ asset('assets-admin/src/plugins/datatables/js/dataTables.bootstrap4.min.js') }}"></script>
        <script src="{{ asset('assets-admin/src/plugins/datatables/js/dataTables.responsive.min.js') }}"></script>
        <script src="{{ asset('assets-admin/src/plugins/datatables/js/responsive.bootstrap4.min.js') }}"></script>
        <!-- buttons for Export datatable -->
        <script src="{{ asset('assets-admin/src/plugins/datatables/js/dataTables.buttons.min.js') }}"></script>
        <script src="{{ asset('assets-admin/src/plugins/datatables/js/buttons.bootstrap4.min.js') }}"></script>
        <script src="{{ asset('assets-admin/src/plugins/datatables/js/buttons.print.min.js') }}"></script>
        <script src="{{ asset('assets-admin/src/plugins/datatables/js/buttons.html5.min.js') }}"></script>
        <script src="{{ asset('assets-admin/src/plugins/datatables/js/buttons.flash.min.js') }}"></script>
        <script src="{{ asset('assets-admin/src/plugins/datatables/js/pdfmake.min.js') }}"></script>
        <script src="{{ asset('assets-admin/src/plugins/datatables/js/vfs_fonts.js') }}"></script>

        <script src="{{ asset('assets-admin/vendors/scripts/datatable-setting.js') }}"></script>


        <!-- Template Javascript -->
        <script src="{{ asset('js/main.js') }}"></script>
</body>

</html>
