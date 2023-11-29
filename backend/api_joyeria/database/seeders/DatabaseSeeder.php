<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        \App\Models\Tipos_componente::factory(5)->create();
        \App\Models\Rol::factory(4)->create();
        \App\Models\Lote::factory(4)->create();
        \App\Models\User::factory(4)->create();
        \App\Models\RolAsignado::factory(4)->create();
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
    }
}
