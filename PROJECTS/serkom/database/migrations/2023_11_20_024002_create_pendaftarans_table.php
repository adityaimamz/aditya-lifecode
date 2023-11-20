<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('pendaftarans', function (Blueprint $table) {
            $table->id();
            $table->string('nama');
            $table->string('email');
            $table->string('nomor_hp');
            $table->integer('semester')->unsigned();
            $table->float('ipk', 3, 2); // Menyesuaikan dengan format IPK yang diinginkan
            $table->string('upload_berkas'); // Menyesuaikan dengan jenis berkas yang diizinkan
            $table->string('jenis_beasiswa');
            $table->string('status_ajuan')->default('belum di verifikasi');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pendaftarans');
    }
};
