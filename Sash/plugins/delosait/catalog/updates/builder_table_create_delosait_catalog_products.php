<?php namespace Delosait\Catalog\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateDelosaitCatalogProducts extends Migration
{
    public function up()
    {
        Schema::create('delosait_catalog_products', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id')->unsigned();
            $table->timestamp('created_at')->nullable();
            $table->timestamp('updated_at')->nullable();
            $table->timestamp('deleted_at')->nullable();
            $table->integer('prod_title')->nullable();
            $table->text('prod_descr')->nullable();
            $table->string('slug')->nullable();
            $table->boolean('is_active')->default(1);
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('delosait_catalog_products');
    }
}
