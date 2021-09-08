<?php namespace Delosait\Catalog\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateDelosaitCatalogCategories extends Migration
{
    public function up()
    {
        Schema::create('delosait_catalog_categories', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id')->unsigned();
            $table->string('slug')->nullable();
            $table->boolean('is_active')->default(1);
            $table->string('cat_title')->nullable();
            $table->text('cat_desc')->nullable();
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('delosait_catalog_categories');
    }
}
