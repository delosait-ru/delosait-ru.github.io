<?php namespace Delosait\Catalog;

use System\Classes\PluginBase;

class Plugin extends PluginBase
{
    public function registerComponents()
    {
        return [
            'Delosait\Catalog\Components\MyCatalog' => 'myCatalog'
        ];
    }

    public function registerSettings()
    {
    }
}
