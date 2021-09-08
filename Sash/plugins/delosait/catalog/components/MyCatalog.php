<?php namespace Delosait\Catalog\Components;

use Cms\Classes\ComponentBase;
use Delosait\Catalog\Models\Category;

class MyCatalog extends ComponentBase
{
    public function componentDetails()
    {
        return [
            'name'        => 'myCatalog Component',
            'description' => 'No description provided yet...'
        ];
    }

    public function defineProperties()
    {
        return [];
    }
    
    public function onRun()
    {
        $this->page['categories'] = Category::all();
  
        
        // Дальше тут логика, определяешь по имени файла, что это роут для категории
        if ($this->page->id == 'catalog-cat') {
            $this->page['category'] = Category::where('slug', $this->param('cat_slug'))->first();
        }
    }
}
