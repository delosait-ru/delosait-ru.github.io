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

/* W:\domains\sash.loc/themes/sash/pages/catalog/cat.htm */
class __TwigTemplate_a69b6879356fe164abeb69b8db336b30bec5b52179da70c36cc49bed9959ed36 extends \Twig\Template
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
        echo "<!--<h1>Это то что ты подключил компонент.</h1>

теперь в переменной categories твои категории лежат.


";
        // line 6
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(($context["categories"] ?? null));
        $context['_iterated'] = false;
        foreach ($context['_seq'] as $context["_key"] => $context["item"]) {
            // line 7
            echo "<p><a href='/catalog/";
            echo twig_escape_filter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["item"], "slug", [], "any", false, false, true, 7), 7, $this->source), "html", null, true);
            echo "'>";
            echo twig_escape_filter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["item"], "cat_title", [], "any", false, false, true, 7), 7, $this->source), "html", null, true);
            echo "</a></p>
";
            // line 8
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable(twig_get_attribute($this->env, $this->source, $context["item"], "products", [], "any", false, false, true, 8));
            foreach ($context['_seq'] as $context["_key"] => $context["product"]) {
                // line 9
                echo "<p>";
                echo twig_escape_filter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["product"], "prod_title", [], "any", false, false, true, 9), 9, $this->source), "html", null, true);
                echo "</p>
";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['product'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            $context['_iterated'] = true;
        }
        if (!$context['_iterated']) {
            // line 12
            echo "Категории отсутствуют
";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['item'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 14
        echo "





Теперь если мы загрузили категорию, то вот она:


<p><a href='/catalog/";
        // line 23
        echo twig_escape_filter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["category"] ?? null), "slug", [], "any", false, false, true, 23), 23, $this->source), "html", null, true);
        echo "'>";
        echo twig_escape_filter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["category"] ?? null), "cat_title", [], "any", false, false, true, 23), 23, $this->source), "html", null, true);
        echo "</a></p>

";
        // line 25
        echo twig_escape_filter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["category"] ?? null), "cat_title", [], "any", false, false, true, 25), 25, $this->source), "html", null, true);
        echo "-->


<p><a href='/catalog/";
        // line 28
        echo twig_escape_filter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["item"] ?? null), "slug", [], "any", false, false, true, 28), 28, $this->source), "html", null, true);
        echo "'>";
        echo twig_escape_filter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["category"] ?? null), "cat_title", [], "any", false, false, true, 28), 28, $this->source), "html", null, true);
        echo "</a></p>";
    }

    public function getTemplateName()
    {
        return "W:\\domains\\sash.loc/themes/sash/pages/catalog/cat.htm";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  105 => 28,  99 => 25,  92 => 23,  81 => 14,  74 => 12,  62 => 9,  58 => 8,  51 => 7,  46 => 6,  39 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("<!--<h1>Это то что ты подключил компонент.</h1>

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


<p><a href='/catalog/{{ category.slug }}'>{{ category.cat_title }}</a></p>

{{ category.cat_title }}-->


<p><a href='/catalog/{{ item.slug }}'>{{ category.cat_title }}</a></p>", "W:\\domains\\sash.loc/themes/sash/pages/catalog/cat.htm", "");
    }
    
    public function checkSecurity()
    {
        static $tags = array("for" => 6);
        static $filters = array("escape" => 7);
        static $functions = array();

        try {
            $this->sandbox->checkSecurity(
                ['for'],
                ['escape'],
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
