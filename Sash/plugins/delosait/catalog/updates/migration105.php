<?php namespace Delosait\Catalog\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class Migration105 extends Migration
{
    public function up()
    {
  Schema::create('delosait_catalog_category_product', function($table)
{
    $table->integer('category_id')->unsigned();
    $table->integer('product_id')->unsigned();
    $table->primary(['category_id', 'product_id']);
});
    }

    public function down()
    {
         Schema::drop('delosait_catalog_category_product');
    }
}