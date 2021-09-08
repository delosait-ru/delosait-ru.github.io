<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* W:\domains\sash.loc/themes/sash/layouts/category.htm */
class __TwigTemplate_3b8d1d863b86488fbf9f6560e440825a7a94178fa219211452db88b416eedc2a extends \Twig\Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $this->checkSecurity();
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 1
        echo "<!DOCTYPE html>
<html>

<head>
    <meta charset=\"utf-8\">
    <title>October CMS - ";
        // line 6
        echo twig_escape_filter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["this"] ?? null), "page", [], "any", false, false, true, 6), "title", [], "any", false, false, true, 6), 6, $this->source), "html", null, true);
        echo "</title>
    <meta name=\"description\" content=\"";
        // line 7
        echo twig_escape_filter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["this"] ?? null), "page", [], "any", false, false, true, 7), "meta_description", [], "any", false, false, true, 7), 7, $this->source), "html", null, true);
        echo "\">
    <meta name=\"title\" content=\"";
        // line 8
        echo twig_escape_filter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["this"] ?? null), "page", [], "any", false, false, true, 8), "meta_title", [], "any", false, false, true, 8), 8, $this->source), "html", null, true);
        echo "\">
    <meta name=\"author\" content=\"OctoberCMS\">
    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">
    <meta name=\"generator\" content=\"OctoberCMS\">
    <link rel=\"icon\" type=\"image/png\" href=\"";
        // line 12
        echo $this->extensions['Cms\Twig\Extension']->themeFilter("assets/images/october.png");
        echo "\">
    <link href=\"";
        // line 13
        echo $this->extensions['Cms\Twig\Extension']->themeFilter("assets/css/vendor.css");
        echo "\" rel=\"stylesheet\">
    <link href=\"";
        // line 14
        echo $this->extensions['Cms\Twig\Extension']->themeFilter("assets/css/global.css");
        echo "\" rel=\"stylesheet\">
    <link href=\"";
        // line 15
        echo $this->extensions['Cms\Twig\Extension']->themeFilter("assets/css/main.css");
        echo "\" rel=\"stylesheet\">
    <script src=\"https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;apikey=<ваш API-ключ>\" type=\"text/javascript\"></script>
    <!--    <script type=\"text/javascript\" src=\"https://yandex.st/jquery/2.2.3/jquery.js\"></script>-->


    ";
        // line 20
        echo $this->env->getExtension('Cms\Twig\Extension')->assetsFunction('css');
        echo $this->env->getExtension('Cms\Twig\Extension')->displayBlock('styles');
        // line 21
        echo "</head>

<body>
    <div class=\"page\">
        <!-- Header -->
        <header class=\"header\">
            ";
        // line 27
        $context['__cms_partial_params'] = [];
        echo $this->env->getExtension('Cms\Twig\Extension')->partialFunction("header"        , $context['__cms_partial_params']        , true        );
        unset($context['__cms_partial_params']);
        // line 28
        echo "        </header>



        <!-- Content -->
        <main>
            <div class=\"heading\">
                <div class=\"container-lg\">
                    <div class=\"row\">
                        <div class=\"col-md-6\">
                            <h1>Каталог продукции</h1>
                            <ul class=\"breadcrumbs\">
                                <li><a href=\"/\"><i class=\"fa fa-home\">&nbsp; </i>Главная</a></li>
                                <li>Каталог</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class=\"container-lg\">
                <div class=\"row\">
                    <div class=\"col-md-12 col-lg-4 forder-2\">

                        <div class=\"discount_block\">
                            <svg class=\"ic_sidebar\">
                                <use xlink:href=\"";
        // line 53
        echo $this->extensions['Cms\Twig\Extension']->themeFilter("./assets/img/sprite.svg#discount");
        echo "\"></use>
                            </svg>

                            <div class=\"order_block_title\">
                                Коммерческое предложение дистрибьютерам
                            </div>
                            <div class=\"order_block_subtitle\">Оставьте заявку и узнайте об индивидуальных условиях работы в вашем регионе</div>
                            <div class=\"btn-tr\" data-bs-toggle=\"modal\" data-bs-target=\"#callme\">
                                Отправить заявку
                            </div>
                        </div>
                        <div class=\"buttons_block\">
                            <div data-bs-toggle=\"modal\" data-bs-target=\"#buyme\" class=\"calc_price_btn\">
                                <svg class=\"ic_sidebar-small\">
                                    <use xlink:href=\"";
        // line 67
        echo $this->extensions['Cms\Twig\Extension']->themeFilter("./assets/img/sprite.svg#barrel3");
        echo "\"></use>
                                </svg>

                                Сервис по подбору масел

                            </div>
                            <div class=\"calc_price_btn\" data-bs-toggle=\"modal\" data-bs-target=\"#askme\">
                                <svg class=\"ic_sidebar-small\">
                                    <use xlink:href=\"";
        // line 75
        echo $this->extensions['Cms\Twig\Extension']->themeFilter("./assets/img/sprite.svg#documents");
        echo "\"></use>
                                </svg>

                                Задать вопрос
                            </div>

                        </div>
                        <div class=\"tizers_page\">
                            <div class=\"tizer_page\">
                                <svg class=\"ic_tizer\">
                                    <use xlink:href=\"";
        // line 85
        echo $this->extensions['Cms\Twig\Extension']->themeFilter("./assets/img/sprite.svg#route");
        echo "\"></use>
                                </svg>

                                <div class=\"tizer_title\">
                                    Эксклюзивные условия
                                </div>
                            </div>
                            <div class=\"tizer_page\">
                                <svg class=\"ic_tizer\">
                                    <use xlink:href=\"";
        // line 94
        echo $this->extensions['Cms\Twig\Extension']->themeFilter("./assets/img/sprite.svg#barrel");
        echo "\"></use>
                                </svg>

                                <div class=\"tizer_title\">
                                    Широкий ассортимент
                                </div>
                            </div>
                            <div class=\"tizer_page\">
                                <svg class=\"ic_tizer\">
                                    <use xlink:href=\"";
        // line 103
        echo $this->extensions['Cms\Twig\Extension']->themeFilter("./assets/img/sprite.svg#startup");
        echo "\"></use>
                                </svg>

                                <div class=\"tizer_title\">
                                    Кредитная линия и рекламная поддержка
                                </div>
                            </div>


                        </div>
                    </div>
                    <div class=\"col-md-12 col-lg-8 right-block\">
                        <div class=\"row\">
                            ";
        // line 116
        echo $this->env->getExtension('Cms\Twig\Extension')->pageFunction();
        // line 117
        echo "                        </div>
                    </div>
                </div>
            </div>

        </main>

        <!-- Footer -->
        <footer class=\"footer\">
            ";
        // line 126
        $context['__cms_partial_params'] = [];
        echo $this->env->getExtension('Cms\Twig\Extension')->partialFunction("footer"        , $context['__cms_partial_params']        , true        );
        unset($context['__cms_partial_params']);
        // line 127
        echo "        </footer>
    </div>
    <!-- Scripts -->
    <script src=\"";
        // line 130
        echo $this->extensions['Cms\Twig\Extension']->themeFilter("assets/js/vendor.js");
        echo "\"></script>
    <script src=\"";
        // line 131
        echo $this->extensions['Cms\Twig\Extension']->themeFilter("assets/js/main.js");
        echo "\"></script>

    ";
        // line 133
        $_minify = System\Classes\CombineAssets::instance()->useMinify;
        if ($_minify) {
            echo '<script src="' . Request::getBasePath() . '/modules/system/assets/js/framework.combined-min.js"></script>'.PHP_EOL;
        }
        else {
            echo '<script src="' . Request::getBasePath() . '/modules/system/assets/js/framework.js"></script>'.PHP_EOL;
            echo '<script src="' . Request::getBasePath() . '/modules/system/assets/js/framework.extras.js"></script>'.PHP_EOL;
        }
        echo '<link rel="stylesheet" property="stylesheet" href="' . Request::getBasePath() .'/modules/system/assets/css/framework.extras'.($_minify ? '-min' : '').'.css">'.PHP_EOL;
        unset($_minify);
        // line 134
        echo "    ";
        echo $this->env->getExtension('Cms\Twig\Extension')->assetsFunction('js');
        echo $this->env->getExtension('Cms\Twig\Extension')->displayBlock('scripts');
        // line 135
        echo "
</body>

</html>";
    }

    public function getTemplateName()
    {
        return "W:\\domains\\sash.loc/themes/sash/layouts/category.htm";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  250 => 135,  246 => 134,  235 => 133,  230 => 131,  226 => 130,  221 => 127,  217 => 126,  206 => 117,  204 => 116,  188 => 103,  176 => 94,  164 => 85,  151 => 75,  140 => 67,  123 => 53,  96 => 28,  92 => 27,  84 => 21,  81 => 20,  73 => 15,  69 => 14,  65 => 13,  61 => 12,  54 => 8,  50 => 7,  46 => 6,  39 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("<!DOCTYPE html>
<html>

<head>
    <meta charset=\"utf-8\">
    <title>October CMS - {{ this.page.title }}</title>
    <meta name=\"description\" content=\"{{ this.page.meta_description }}\">
    <meta name=\"title\" content=\"{{ this.page.meta_title }}\">
    <meta name=\"author\" content=\"OctoberCMS\">
    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">
    <meta name=\"generator\" content=\"OctoberCMS\">
    <link rel=\"icon\" type=\"image/png\" href=\"{{ 'assets/images/october.png'|theme }}\">
    <link href=\"{{ 'assets/css/vendor.css'|theme }}\" rel=\"stylesheet\">
    <link href=\"{{ 'assets/css/global.css'|theme }}\" rel=\"stylesheet\">
    <link href=\"{{ 'assets/css/main.css'|theme }}\" rel=\"stylesheet\">
    <script src=\"https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;apikey=<ваш API-ключ>\" type=\"text/javascript\"></script>
    <!--    <script type=\"text/javascript\" src=\"https://yandex.st/jquery/2.2.3/jquery.js\"></script>-->


    {% styles %}
</head>

<body>
    <div class=\"page\">
        <!-- Header -->
        <header class=\"header\">
            {% partial 'header' %}
        </header>



        <!-- Content -->
        <main>
            <div class=\"heading\">
                <div class=\"container-lg\">
                    <div class=\"row\">
                        <div class=\"col-md-6\">
                            <h1>Каталог продукции</h1>
                            <ul class=\"breadcrumbs\">
                                <li><a href=\"/\"><i class=\"fa fa-home\">&nbsp; </i>Главная</a></li>
                                <li>Каталог</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class=\"container-lg\">
                <div class=\"row\">
                    <div class=\"col-md-12 col-lg-4 forder-2\">

                        <div class=\"discount_block\">
                            <svg class=\"ic_sidebar\">
                                <use xlink:href=\"{{'./assets/img/sprite.svg#discount'|theme}}\"></use>
                            </svg>

                            <div class=\"order_block_title\">
                                Коммерческое предложение дистрибьютерам
                            </div>
                            <div class=\"order_block_subtitle\">Оставьте заявку и узнайте об индивидуальных условиях работы в вашем регионе</div>
                            <div class=\"btn-tr\" data-bs-toggle=\"modal\" data-bs-target=\"#callme\">
                                Отправить заявку
                            </div>
                        </div>
                        <div class=\"buttons_block\">
                            <div data-bs-toggle=\"modal\" data-bs-target=\"#buyme\" class=\"calc_price_btn\">
                                <svg class=\"ic_sidebar-small\">
                                    <use xlink:href=\"{{'./assets/img/sprite.svg#barrel3'|theme}}\"></use>
                                </svg>

                                Сервис по подбору масел

                            </div>
                            <div class=\"calc_price_btn\" data-bs-toggle=\"modal\" data-bs-target=\"#askme\">
                                <svg class=\"ic_sidebar-small\">
                                    <use xlink:href=\"{{'./assets/img/sprite.svg#documents'|theme}}\"></use>
                                </svg>

                                Задать вопрос
                            </div>

                        </div>
                        <div class=\"tizers_page\">
                            <div class=\"tizer_page\">
                                <svg class=\"ic_tizer\">
                                    <use xlink:href=\"{{'./assets/img/sprite.svg#route'|theme}}\"></use>
                                </svg>

                                <div class=\"tizer_title\">
                                    Эксклюзивные условия
                                </div>
                            </div>
                            <div class=\"tizer_page\">
                                <svg class=\"ic_tizer\">
                                    <use xlink:href=\"{{'./assets/img/sprite.svg#barrel'|theme}}\"></use>
                                </svg>

                                <div class=\"tizer_title\">
                                    Широкий ассортимент
                                </div>
                            </div>
                            <div class=\"tizer_page\">
                                <svg class=\"ic_tizer\">
                                    <use xlink:href=\"{{'./assets/img/sprite.svg#startup'|theme}}\"></use>
                                </svg>

                                <div class=\"tizer_title\">
                                    Кредитная линия и рекламная поддержка
                                </div>
                            </div>


                        </div>
                    </div>
                    <div class=\"col-md-12 col-lg-8 right-block\">
                        <div class=\"row\">
                            {% page %}
                        </div>
                    </div>
                </div>
            </div>

        </main>

        <!-- Footer -->
        <footer class=\"footer\">
            {% partial 'footer' %}
        </footer>
    </div>
    <!-- Scripts -->
    <script src=\"{{ 'assets/js/vendor.js'|theme }}\"></script>
    <script src=\"{{ 'assets/js/main.js'|theme }}\"></script>

    {% framework extras %}
    {% scripts %}

</body>

</html>", "W:\\domains\\sash.loc/themes/sash/layouts/category.htm", "");
    }
    
    public function checkSecurity()
    {
        static $tags = array("styles" => 20, "partial" => 27, "page" => 116, "framework" => 133, "scripts" => 134);
        static $filters = array("escape" => 6, "theme" => 12);
        static $functions = array();

        try {
            $this->sandbox->checkSecurity(
                ['styles', 'partial', 'page', 'framework', 'scripts'],
                ['escape', 'theme'],
                []
            );
        } catch (SecurityError $e) {
            $e->setSourceContext($this->source);

            if ($e instanceof SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

    }
}
