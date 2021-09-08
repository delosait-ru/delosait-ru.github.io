<?php namespace Delosait\Catalog\Models;

use Model;

/**
 * Model
 */
class Product extends Model
{
    use \October\Rain\Database\Traits\Validation;
    
    use \October\Rain\Database\Traits\SoftDelete;
    use \October\Rain\Database\Traits\Sluggable;
    
    public $slugs =['slug' => 'cat_title'];

    protected $dates = ['deleted_at'];


    /**
     * @var string The database table used by the model.
     */
    public $table = 'delosait_catalog_products';

    /**
     * @var array Validation rules
     */
    public $rules = [
    ];
    public $belongsToMany =[
        'categories' => [\Delosait\Catalog\Models\Category::class, 'table' => 'delosait_catalog_category_product']
    ];
}
