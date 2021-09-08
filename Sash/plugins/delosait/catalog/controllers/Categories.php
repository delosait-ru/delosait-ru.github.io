<?php namespace Delosait\Catalog\Controllers;

use Backend\Classes\Controller;
use BackendMenu;

class Categories extends Controller
{
    public $implement = [        'Backend\Behaviors\ListController',        'Backend\Behaviors\FormController'    ];
    
    public $listConfig = 'config_list.yaml';
    public $formConfig = 'config_form.yaml';

    public function __construct()
    {
        parent::__construct();
        BackendMenu::setContext('Delosait.Catalog', 'main-menu-item', 'side-menu-item');
    }
}
