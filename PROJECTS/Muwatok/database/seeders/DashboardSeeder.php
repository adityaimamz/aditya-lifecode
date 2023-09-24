<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\dashboard;

class DashboardSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Dashboard::create([
            'herosubtitle' => 'Welcome',
            'herotitle' => 'Website Dr. Cahyo Budi Utomo, M.Pd',
            'heroimage' => 'Gambar_Hero/carousel-1.jpg',
            'abouttitle' => 'Dr. Cahyo Budi Utomo, M.Pd',
            'abouttext' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, natus.',
            'aboutimage' => 'Gambar_About/about.jpg',
            'contacttitle' => 'Hubungi saya',
            'email' => 'Km2bP@example.com',
            'phone' => '08123456789',
            'address' => 'Unniversitas Negeri Semarang'
        ]);
    }
}
