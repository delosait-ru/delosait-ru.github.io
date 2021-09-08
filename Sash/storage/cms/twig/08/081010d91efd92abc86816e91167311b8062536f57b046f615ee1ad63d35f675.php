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

/* W:\domains\sash.loc/themes/sash/pages/catalog/all.htm */
class __TwigTemplate_45a121bd7e4a013273236e2dc116b49b7892a8b410ae5d4048f95253dc59dd91 extends \Twig\Template
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
        // line 18
        echo "               
               
               
               
                ";
        // line 22
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(($context["categories"] ?? null));
        foreach ($context['_seq'] as $context["_key"] => $context["item"]) {
            // line 23
            echo "                       <div class=\"col-sm-12 col-md-6 col-lg-6\">
                          <a href=\"/catalog/";
            // line 24
            echo twig_escape_filter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["item"], "slug", [], "any", false, false, true, 24), 24, $this->source), "html", null, true);
            echo "\" class=\"cat-item\">
                              <div class=\"cat-item__img\">
                                  <img src=\"";
            // line 26
            echo $this->extensions['System\Twig\Extension']->mediaFilter($this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["item"], "cat_img", [], "any", false, false, true, 26), 26, $this->source));
            echo "\" alt=\"";
            echo twig_escape_filter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["item"], "cat_title", [], "any", false, false, true, 26), 26, $this->source), "html", null, true);
            echo "\">
                              </div>
                              <div class=\"cat-item__wrp\">
                                  <div class=\"cat-item__title\">
                                      ";
            // line 30
            echo twig_escape_filter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["item"], "cat_title", [], "any", false, false, true, 30), 30, $this->source), "html", null, true);
            echo "

                                  </div>
                                  <div class=\"cat-item__smallimage\">
                                      <svg class=\"ic_catalog\">
                                          <use xlink:href=\"";
            // line 35
            echo $this->extensions['Cms\Twig\Extension']->themeFilter("./assets/img/sprite.svg#right-arrow");
            echo "\"></use>
                                      </svg>

                                  </div>
                              </div>

                          </a>
                      </div>
                ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['item'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
    }

    public function getTemplateName()
    {
        return "W:\\domains\\sash.loc/themes/sash/pages/catalog/all.htm";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  74 => 35,  66 => 30,  57 => 26,  52 => 24,  49 => 23,  45 => 22,  39 => 18,);
    }

    public function getSourceContext()
    {
        return new Source("{#<h1>Это то что ты подключил компонент.</h1>
теперь в переменной categories твои категории лежат.

{% for item in categories %}
<p><a href='/catalog/{{ item.slug }}'>{{ item.cat_title }}</a></p>
{% for product in item.products %}
<p>{{product.prod_title}}</p>
{%endfor%}
{% else %}
Категории отсутствуют
{% endfor %}


Теперь если мы загрузили категорию, то вот она:
{{ category.cat_title }}

<p><a href='/catalog/{{ category.slug }}'>{{ item.cat_title }}</a></p>#}
               
               
               
               
                {% for item in categories %}
                       <div class=\"col-sm-12 col-md-6 col-lg-6\">
                          <a href=\"/catalog/{{ item.slug }}\" class=\"cat-item\">
                              <div class=\"cat-item__img\">
                                  <img src=\"{{item.cat_img|media}}\" alt=\"{{ item.cat_title }}\">
                              </div>
                              <div class=\"cat-item__wrp\">
                                  <div class=\"cat-item__title\">
                                      {{ item.cat_title }}

                                  </div>
                                  <div class=\"cat-item__smallimage\">
                                      <svg class=\"ic_catalog\">
                                          <use xlink:href=\"{{'./assets/img/sprite.svg#right-arrow'|theme}}\"></use>
                                      </svg>

                                  </div>
                              </div>

                          </a>
                      </div>
                {% endfor %}", "W:\\domains\\sash.loc/themes/sash/pages/catalog/all.htm", "");
    }
    
    public function checkSecurity()
    {
        static $tags = array("for" => 22);
        static $filters = array("escape" => 24, "media" => 26, "theme" => 35);
        static $functions = array();

        try {
            $this->sandbox->checkSecurity(
                ['for'],
                ['escape', 'media', 'theme'],
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
