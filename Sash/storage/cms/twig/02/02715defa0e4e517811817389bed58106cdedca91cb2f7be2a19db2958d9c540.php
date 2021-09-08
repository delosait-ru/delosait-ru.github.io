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

/* W:\domains\sash.loc/themes/sash/partials/menu-top.htm */
class __TwigTemplate_bf24f8cea900c9c28a6b650e161ec6959a485469f371680768e4bd858f404421 extends \Twig\Template
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
        echo "<ul class=\"sf-menu\">
";
        // line 2
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(($context["items"] ?? null));
        foreach ($context['_seq'] as $context["_key"] => $context["item"]) {
            // line 3
            echo "    <li>
        <a ";
            // line 4
            if (twig_get_attribute($this->env, $this->source, $context["item"], "items", [], "any", false, false, true, 4)) {
                echo "class=\"dropdwn\" ";
            }
            echo " href=\"";
            echo twig_escape_filter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["item"], "url", [], "any", false, false, true, 4), 4, $this->source), "html", null, true);
            echo "\"> ";
            echo twig_escape_filter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["item"], "title", [], "any", false, false, true, 4), 4, $this->source), "html", null, true);
            echo "</a>
        ";
            // line 5
            if (twig_get_attribute($this->env, $this->source, $context["item"], "items", [], "any", false, false, true, 5)) {
                // line 6
                echo "        ";
                $context['__cms_partial_params'] = [];
                $context['__cms_partial_params']['items'] = twig_get_attribute($this->env, $this->source, $context["item"], "items", [], "any", false, false, true, 6)                ;
                echo $this->env->getExtension('Cms\Twig\Extension')->partialFunction("submenu"                , $context['__cms_partial_params']                , true                );
                unset($context['__cms_partial_params']);
                // line 7
                echo "        ";
            }
            // line 8
            echo "    </li>
";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['item'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 10
        echo "</ul>";
    }

    public function getTemplateName()
    {
        return "W:\\domains\\sash.loc/themes/sash/partials/menu-top.htm";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  77 => 10,  70 => 8,  67 => 7,  61 => 6,  59 => 5,  49 => 4,  46 => 3,  42 => 2,  39 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("<ul class=\"sf-menu\">
{% for item in items %}
    <li>
        <a {% if item.items %}class=\"dropdwn\" {% endif %} href=\"{{ item.url }}\"> {{ item.title }}</a>
        {% if item.items %}
        {% partial 'submenu' items=item.items %}
        {% endif %}
    </li>
{% endfor %}
</ul>", "W:\\domains\\sash.loc/themes/sash/partials/menu-top.htm", "");
    }
    
    public function checkSecurity()
    {
        static $tags = array("for" => 2, "if" => 4, "partial" => 6);
        static $filters = array("escape" => 4);
        static $functions = array();

        try {
            $this->sandbox->checkSecurity(
                ['for', 'if', 'partial'],
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
