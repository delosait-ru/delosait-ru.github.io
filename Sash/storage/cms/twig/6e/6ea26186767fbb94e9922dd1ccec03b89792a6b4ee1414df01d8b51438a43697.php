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

/* W:\domains\sash.loc/themes/sash/layouts/default.htm */
class __TwigTemplate_de094e06e5b4386007733817b166342e14263368d0ce5700f2fc08746f09656e extends \Twig\Template
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
            ";
        // line 32
        echo $this->env->getExtension('Cms\Twig\Extension')->pageFunction();
        // line 33
        echo "        </main>

        <!-- Footer -->
        <footer class=\"footer\">
            ";
        // line 37
        $context['__cms_partial_params'] = [];
        echo $this->env->getExtension('Cms\Twig\Extension')->partialFunction("footer"        , $context['__cms_partial_params']        , true        );
        unset($context['__cms_partial_params']);
        // line 38
        echo "        </footer>
    </div>
    <!-- Scripts -->
    <script src=\"";
        // line 41
        echo $this->extensions['Cms\Twig\Extension']->themeFilter("assets/js/vendor.js");
        echo "\"></script>
    <script src=\"";
        // line 42
        echo $this->extensions['Cms\Twig\Extension']->themeFilter("assets/js/main.js");
        echo "\"></script>

    ";
        // line 44
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
        // line 45
        echo "    ";
        echo $this->env->getExtension('Cms\Twig\Extension')->assetsFunction('js');
        echo $this->env->getExtension('Cms\Twig\Extension')->displayBlock('scripts');
        // line 46
        echo "
</body>

</html>";
    }

    public function getTemplateName()
    {
        return "W:\\domains\\sash.loc/themes/sash/layouts/default.htm";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  143 => 46,  139 => 45,  128 => 44,  123 => 42,  119 => 41,  114 => 38,  110 => 37,  104 => 33,  102 => 32,  96 => 28,  92 => 27,  84 => 21,  81 => 20,  73 => 15,  69 => 14,  65 => 13,  61 => 12,  54 => 8,  50 => 7,  46 => 6,  39 => 1,);
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
            {% page %}
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

</html>", "W:\\domains\\sash.loc/themes/sash/layouts/default.htm", "");
    }
    
    public function checkSecurity()
    {
        static $tags = array("styles" => 20, "partial" => 27, "page" => 32, "framework" => 44, "scripts" => 45);
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
