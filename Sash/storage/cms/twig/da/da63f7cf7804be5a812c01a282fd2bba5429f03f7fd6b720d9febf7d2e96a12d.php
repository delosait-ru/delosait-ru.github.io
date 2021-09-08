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

/* W:\domains\sash.loc/themes/sash/partials/header.htm */
class __TwigTemplate_f6eed45642a656e37c7aa7556ff0c6f4edab01c0aea6adcbc758b3d1101ca0fe extends \Twig\Template
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
        echo "<div class=\"container-lg\">
    <div class=\"header__top\">
        <div class=\"header__adress\">
            <svg class=\"ic_header\">
                <use xlink:href=\"";
        // line 5
        echo $this->extensions['Cms\Twig\Extension']->themeFilter("./assets/img/sprite.svg#marker");
        echo "\"></use>
            </svg>
            ";
        // line 7
        echo twig_escape_filter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["this"] ?? null), "theme", [], "any", false, false, true, 7), "adress", [], "any", false, false, true, 7), 7, $this->source), "html", null, true);
        echo "
        </div>
        <div class=\"header__contacts\">
            <div class=\"header__tel\">
                <svg class=\"ic_header\">
                    <use xlink:href=\"";
        // line 12
        echo $this->extensions['Cms\Twig\Extension']->themeFilter("./assets/img/sprite.svg#call2");
        echo "\"></use>
                </svg>
                <a href=\"tel:";
        // line 14
        echo twig_escape_filter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["this"] ?? null), "theme", [], "any", false, false, true, 14), "phone_lnk", [], "any", false, false, true, 14), 14, $this->source), "html", null, true);
        echo "\">";
        echo twig_escape_filter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["this"] ?? null), "theme", [], "any", false, false, true, 14), "phone", [], "any", false, false, true, 14), 14, $this->source), "html", null, true);
        echo "</a>
            </div>
            <div class=\"header__mail\">
                <svg class=\"ic_header\">
                    <use xlink:href=\"";
        // line 18
        echo $this->extensions['Cms\Twig\Extension']->themeFilter("./assets/img/sprite.svg#mail");
        echo "\"></use>
                </svg>
                <a href=\"mailto:";
        // line 20
        echo twig_escape_filter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["this"] ?? null), "theme", [], "any", false, false, true, 20), "email", [], "any", false, false, true, 20), 20, $this->source), "html", null, true);
        echo "\">";
        echo twig_escape_filter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["this"] ?? null), "theme", [], "any", false, false, true, 20), "email", [], "any", false, false, true, 20), 20, $this->source), "html", null, true);
        echo "</a>
            </div>
        </div>
    </div>
</div>
<hr>
<div class=\"fixed_wrp\">
    <div class=\"container-lg\">
        <div class=\"header__bottom\">
            <a class=\"logolnk\" href=\"/\"><img src=\"";
        // line 29
        echo $this->extensions['System\Twig\Extension']->mediaFilter($this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["this"] ?? null), "theme", [], "any", false, false, true, 29), "logo_color", [], "any", false, false, true, 29), 29, $this->source));
        echo "\" alt=\"логотип Sash\">
                <div class=\"header__dscr\">
                    ";
        // line 31
        echo $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["this"] ?? null), "theme", [], "any", false, false, true, 31), "logo_desc", [], "any", false, false, true, 31), 31, $this->source);
        echo "
                </div>
            </a>
            <div class=\"mobile_wrp\">
                <div class=\"wrapper\">
                    <a href=\"#mobile-menu\" class=\"toggle-mnu\"><span></span></a>
                    <div class=\"header-wrap clearfix\">
                        <div class=\"top-mnu\">
                            ";
        // line 39
        $context['__cms_partial_params'] = [];
        $context['__cms_partial_params']['items'] = twig_get_attribute($this->env, $this->source, ($context["staticMenu"] ?? null), "menuItems", [], "any", false, false, true, 39)        ;
        echo $this->env->getExtension('Cms\Twig\Extension')->partialFunction("menu-top"        , $context['__cms_partial_params']        , true        );
        unset($context['__cms_partial_params']);
        // line 40
        echo "                        </div>
                    </div>
                </div>
                <div class=\"mobile_buttons\">

                    <a href=\"tel:";
        // line 45
        echo twig_escape_filter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["this"] ?? null), "theme", [], "any", false, false, true, 45), "phone_lnk", [], "any", false, false, true, 45), 45, $this->source), "html", null, true);
        echo "\"> <svg class=\"ic_mob\">
                            <use xlink:href=\"img/sprite.svg#call2\"></use>
                        </svg></a>
                    <a href=\"mailto:";
        // line 48
        echo twig_escape_filter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["this"] ?? null), "theme", [], "any", false, false, true, 48), "email", [], "any", false, false, true, 48), 48, $this->source), "html", null, true);
        echo "\"> <svg class=\"ic_mob\">
                            <use xlink:href=\"img/sprite.svg#mail\"></use>
                        </svg></a>
                    <a href=\"./contacts\"> <svg class=\"ic_mob\">
                            <use xlink:href=\"img/sprite.svg#marker\"></use>
                        </svg></a>
                </div>
            </div>
        </div>
    </div>
</div>";
    }

    public function getTemplateName()
    {
        return "W:\\domains\\sash.loc/themes/sash/partials/header.htm";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  125 => 48,  119 => 45,  112 => 40,  107 => 39,  96 => 31,  91 => 29,  77 => 20,  72 => 18,  63 => 14,  58 => 12,  50 => 7,  45 => 5,  39 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("<div class=\"container-lg\">
    <div class=\"header__top\">
        <div class=\"header__adress\">
            <svg class=\"ic_header\">
                <use xlink:href=\"{{'./assets/img/sprite.svg#marker'|theme}}\"></use>
            </svg>
            {{this.theme.adress}}
        </div>
        <div class=\"header__contacts\">
            <div class=\"header__tel\">
                <svg class=\"ic_header\">
                    <use xlink:href=\"{{'./assets/img/sprite.svg#call2'|theme}}\"></use>
                </svg>
                <a href=\"tel:{{this.theme.phone_lnk}}\">{{this.theme.phone}}</a>
            </div>
            <div class=\"header__mail\">
                <svg class=\"ic_header\">
                    <use xlink:href=\"{{'./assets/img/sprite.svg#mail'|theme}}\"></use>
                </svg>
                <a href=\"mailto:{{this.theme.email}}\">{{this.theme.email}}</a>
            </div>
        </div>
    </div>
</div>
<hr>
<div class=\"fixed_wrp\">
    <div class=\"container-lg\">
        <div class=\"header__bottom\">
            <a class=\"logolnk\" href=\"/\"><img src=\"{{this.theme.logo_color|media}}\" alt=\"логотип Sash\">
                <div class=\"header__dscr\">
                    {{this.theme.logo_desc|raw}}
                </div>
            </a>
            <div class=\"mobile_wrp\">
                <div class=\"wrapper\">
                    <a href=\"#mobile-menu\" class=\"toggle-mnu\"><span></span></a>
                    <div class=\"header-wrap clearfix\">
                        <div class=\"top-mnu\">
                            {% partial 'menu-top' items=staticMenu.menuItems %}
                        </div>
                    </div>
                </div>
                <div class=\"mobile_buttons\">

                    <a href=\"tel:{{this.theme.phone_lnk}}\"> <svg class=\"ic_mob\">
                            <use xlink:href=\"img/sprite.svg#call2\"></use>
                        </svg></a>
                    <a href=\"mailto:{{this.theme.email}}\"> <svg class=\"ic_mob\">
                            <use xlink:href=\"img/sprite.svg#mail\"></use>
                        </svg></a>
                    <a href=\"./contacts\"> <svg class=\"ic_mob\">
                            <use xlink:href=\"img/sprite.svg#marker\"></use>
                        </svg></a>
                </div>
            </div>
        </div>
    </div>
</div>", "W:\\domains\\sash.loc/themes/sash/partials/header.htm", "");
    }
    
    public function checkSecurity()
    {
        static $tags = array("partial" => 39);
        static $filters = array("theme" => 5, "escape" => 7, "media" => 29, "raw" => 31);
        static $functions = array();

        try {
            $this->sandbox->checkSecurity(
                ['partial'],
                ['theme', 'escape', 'media', 'raw'],
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
