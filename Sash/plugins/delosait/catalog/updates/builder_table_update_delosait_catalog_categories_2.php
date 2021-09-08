<?php namespace Delosait\Catalog\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateDelosaitCatalogCategories2 extends Migration
{
    public function up()
    {
        Schema::table('delosait_catalog_categories', function($table)
        {
            $table->string('cat_img');
        });
    }
    
    public function down()
    {
        Schema::table('delosait_catalog_categories', function($table)
        {
            $table->dropColumn('cat_img');
        });
    }
}
