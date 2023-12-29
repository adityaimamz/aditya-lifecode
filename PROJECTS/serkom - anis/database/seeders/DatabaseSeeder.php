<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;



class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        DB::table('mahasiswas')->delete();

        // Tambahkan data seeder
        DB::table('mahasiswas')->insert([
            'nama' => 'aditya',
            'nim' => '20102217',
            'ipk' => 3.5,
            'created_at' => now(),
            'updated_at' => now(),
        ]);
        DB::table('mahasiswas')->insert([
            'nama' => 'fikri',
            'nim' => '20102218',
            'ipk' => 2.9,
            'created_at' => now(),
            'updated_at' => now(),
        ]);
        DB::table('mahasiswas')->insert([
            'nama' => 'satria',
            'nim' => '20102219',
            'ipk' => 3.9,
            'created_at' => now(),
            'updated_at' => now(),
        ]);
        DB::table('mahasiswas')->insert([
            'nama' => 'nabil',
            'nim' => '20102220',
            'ipk' => 2.1,
            'created_at' => now(),
            'updated_at' => now(),
        ]);
        DB::table('mahasiswas')->insert([
            'nama' => 'nanda',
            'nim' => '20102221',
            'ipk' => 3.7,
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }
}
