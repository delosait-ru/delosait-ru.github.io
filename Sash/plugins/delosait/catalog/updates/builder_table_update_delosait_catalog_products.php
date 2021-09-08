<?php namespace Delosait\Catalog\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateDelosaitCatalogProducts extends Migration
{
    public function up()
    {
        Schema::table('delosait_catalog_products', function($table)
        {
            $table->string('prod_title', 1000)->nullable()->unsigned(false)->default(null)->change();
        });
    }
    
    public function down()
    {
        Schema::table('delosait_catalog_products', function($table)
        {
            $table->integer('prod_title')->nullable()->unsigned(false)->default(null)->change();
        });
    }
}
