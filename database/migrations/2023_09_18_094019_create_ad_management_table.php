<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAdManagementTable extends Migration
{
    public function up()
    {
        Schema::create('ad_management', function (Blueprint $table) {
            $table->id();
            $table->string('Topgooglead');
            $table->string('bottomgooglead');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    public function down()
    {
        Schema::dropIfExists('ad_management');
    }
}