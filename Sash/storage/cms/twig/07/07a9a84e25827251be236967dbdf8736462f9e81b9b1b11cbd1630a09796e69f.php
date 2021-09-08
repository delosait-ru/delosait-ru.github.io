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

/* W:\domains\sash.loc/themes/sash/pages/home.htm */
class __TwigTemplate_8640b9cc0d30ecd3e90131994c4ba772ec7453a5f9bdb3ae01d88f2a7bbeda28 extends \Twig\Template
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
        echo "<div class=\"video-bg\">
    <video id=\"video\" width=\"100%\" height=\"auto\" autoplay=\"autoplay\" loop=\"loop\" preload=\"auto\" poster=\"";
        // line 2
        echo $this->extensions['Cms\Twig\Extension']->themeFilter("./assets/img/poster.jpg");
        echo "\" muted>
        <source src=\"";
        // line 3
        echo $this->extensions['Cms\Twig\Extension']->themeFilter("./assets/img/video.mp4");
        echo "\" type=\"video/mp4\">
        <source src=\"";
        // line 4
        echo $this->extensions['Cms\Twig\Extension']->themeFilter("./assets/img/video.webm");
        echo "\" type=\"video/webm\">
        <source src=\"";
        // line 5
        echo $this->extensions['Cms\Twig\Extension']->themeFilter("./assets/img/video.ogv");
        echo "\" type=\"video/ogv\">
    </video>
    <div class=\"main-banner\">
        <div class=\"container-lg\">
            <div class=\"banner__wrp\">
                <div class=\"banner__text\">
                    <h1>";
        // line 11
        echo twig_escape_filter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["this"] ?? null), "theme", [], "any", false, false, true, 11), "main_title", [], "any", false, false, true, 11), 11, $this->source), "html", null, true);
        echo "</h1>
                    <p>";
        // line 12
        echo twig_escape_filter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["this"] ?? null), "theme", [], "any", false, false, true, 12), "main_subtitle", [], "any", false, false, true, 12), 12, $this->source), "html", null, true);
        echo "</p>
                    <div class=\"btn-blue\" data-bs-toggle=\"modal\" data-bs-target=\"#callme\">
                        Коммерческое предложение
                    </div>
                </div>
                <div class=\"banner__img animate__animated animate__fadeIn animate__delay-2s\">
                    <picture>
                        <source srcset=\"";
        // line 19
        echo $this->extensions['System\Twig\Extension']->mediaFilter($this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["this"] ?? null), "theme", [], "any", false, false, true, 19), "main_image", [], "any", false, false, true, 19), 19, $this->source));
        echo "\" type=\"image/webp\">
                        <img src=\"";
        // line 20
        echo $this->extensions['System\Twig\Extension']->mediaFilter($this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["this"] ?? null), "theme", [], "any", false, false, true, 20), "main_image2", [], "any", false, false, true, 20), 20, $this->source));
        echo "\" alt=\"масло sash\" />
                    </picture>
                </div>
            </div>
        </div>
    </div>
</div>

<div class=\"tizers\">
    <div class=\"container\">
        <div class=\"tizers_wrp\">
            <div class=\"tizer tizer1\">
                <div class=\"tizer_icon\">
                    <svg class=\"ic_tizer\">
                        <use xlink:href=\"";
        // line 34
        echo $this->extensions['Cms\Twig\Extension']->themeFilter("./assets/img/sprite.svg#route");
        echo "\"></use>
                    </svg>

                </div>
                <div class=\"tizer_descr\">
                    <span> Эксклюзивные условия</span> работы на территории
                </div>
            </div>
            <div class=\"tizer tizer2\">
                <div class=\"tizer_icon\">
                    <svg class=\"ic_tizer\">
                        <use xlink:href=\"";
        // line 45
        echo $this->extensions['Cms\Twig\Extension']->themeFilter("img/sprite.svg#oil");
        echo "\"></use>
                    </svg>
                </div>

                <div class=\"tizer_descr\">
                    <span>Широкий ассортимент</span>
                    и&nbsp;высокое качество
                </div>
            </div>
            <div class=\"tizer tizer3\">
                <div class=\"tizer_image\">
                    <!--     <svg class=\"ic_tizer ic_orange\">
                            <use xlink:href=\"img/sprite.svg#calculator\"></use>
                        </svg>-->
                    <img src=\"";
        // line 59
        echo $this->extensions['Cms\Twig\Extension']->themeFilter("./assets/img/bull.png");
        echo "\" alt=\"производство испания\">
                </div>

                <div class=\"tizer_descr tizer_descr--bull\">
                    <span>Европейское премиальное качество</span> с исторической родины корриды

                </div>
            </div>
            <div class=\"tizer tizer4\">
                <div class=\"tizer_icon\">
                    <svg class=\"ic_tizer\">
                        <use xlink:href=\"";
        // line 70
        echo $this->extensions['Cms\Twig\Extension']->themeFilter("./assets/img/sprite.svg#seo");
        echo "\"></use>
                    </svg>
                </div>

                <div class=\"tizer_descr\">
                    Маркетинговая поддержка
                </div>

            </div>
        </div>
    </div>
</div>

<section id=\"catalogid\" class=\"catalog\">
    <div class=\"container-lg\">
        <div class=\"row\">
            <div class=\"col-sm-12 col-md-5\">
                <h2>";
        // line 87
        echo twig_escape_filter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["this"] ?? null), "theme", [], "any", false, false, true, 87), "catalog_title", [], "any", false, false, true, 87), 87, $this->source), "html", null, true);
        echo "</h2>
            </div>
            <div class=\"col-sm-12 col-md-7\">
                <div class=\"catalog_dscr\">
                    <b>
                        ";
        // line 92
        echo $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["this"] ?? null), "theme", [], "any", false, false, true, 92), "catalog_subtitle", [], "any", false, false, true, 92), 92, $this->source);
        echo "
                    </b>
                    <a href=\"#\" class=\"btn-blue btn-blue--ic\">
                        Перейти в каталог
                        <svg class=\"ic_btn\">
                            <use xlink:href=\"img/sprite.svg#ic-arrow\"></use>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div class=\"container-lg\">
        <div class=\"arrows\">
        </div>
        <div class=\"catalog_slider\">
            ";
        // line 108
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["this"] ?? null), "theme", [], "any", false, false, true, 108), "slider", [], "any", false, false, true, 108));
        foreach ($context['_seq'] as $context["_key"] => $context["field"]) {
            // line 109
            echo "            <div>
                <div class=\"item\">
                    <div class=\"item__img\">
                        <a href=\"";
            // line 112
            echo twig_escape_filter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["field"], "p_link", [], "any", false, false, true, 112), 112, $this->source), "html", null, true);
            echo "\">
                            <img src=\"";
            // line 113
            echo call_user_func_array($this->env->getFilter('resize')->getCallable(), [$this->extensions['System\Twig\Extension']->mediaFilter($this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["field"], "p_image", [], "any", false, false, true, 113), 113, $this->source)), 300, 300, false, ["mode" => "crop", "quality" => "80"]]);
            echo "\" alt=\"";
            echo twig_escape_filter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["field"], "p_title", [], "any", false, false, true, 113), 113, $this->source), "html", null, true);
            echo "\">
                        </a>
                    </div>
                    <a href=\"";
            // line 116
            echo twig_escape_filter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["field"], "p_link", [], "any", false, false, true, 116), 116, $this->source), "html", null, true);
            echo "\" class=\"item__title\">
                        ";
            // line 117
            echo twig_escape_filter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["field"], "p_title", [], "any", false, false, true, 117), 117, $this->source), "html", null, true);
            echo "
                    </a>
                    <div class=\"item__info\">
                        <div class=\"item__code\">
                            Арт. ";
            // line 121
            echo twig_escape_filter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["field"], "p_articul", [], "any", false, false, true, 121), 121, $this->source), "html", null, true);
            echo "
                        </div>
                        <div class=\"item__sticker item__sticker--green\">
                            В наличии
                        </div>
                    </div>
                    <div class=\"item__rating\">
                        <svg class=\"ic_rating\">
                            <use xlink:href=\"";
            // line 129
            echo $this->extensions['Cms\Twig\Extension']->themeFilter("./assets/img/sprite.svg#star");
            echo "\"></use>
                        </svg>

                        <svg class=\"ic_rating\">
                            <use xlink:href=\"";
            // line 133
            echo $this->extensions['Cms\Twig\Extension']->themeFilter("./assets/img/sprite.svg#star");
            echo "\"></use>
                        </svg>

                        <svg class=\"ic_rating\">
                            <use xlink:href=\"";
            // line 137
            echo $this->extensions['Cms\Twig\Extension']->themeFilter("./assets/img/sprite.svg#star");
            echo "\"></use>
                        </svg>

                        <svg class=\"ic_rating\">
                            <use xlink:href=\"";
            // line 141
            echo $this->extensions['Cms\Twig\Extension']->themeFilter("./assets/img/sprite.svg#star");
            echo "\"></use>
                        </svg>

                        <svg class=\"ic_rating\">
                            <use xlink:href=\"";
            // line 145
            echo $this->extensions['Cms\Twig\Extension']->themeFilter("./assets/img/sprite.svg#star");
            echo "\"></use>
                        </svg>
                    </div>
                    <div class=\"item__buy\">
                        <a href=\"";
            // line 149
            echo twig_escape_filter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["field"], "p_link", [], "any", false, false, true, 149), 149, $this->source), "html", null, true);
            echo "\" class=\"btn-orange item__btn\">Подробнее</a>
                    </div>
                </div>
            </div>
            ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['field'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 154
        echo "        </div>
    </div>
</section>

<section class=\"about-top\">
    <div class=\"container-lg\">
        <div class=\"row\">
            <div class=\"col-md-12 col-lg-6\">
                <div class=\"about-top__text-wrp\">
                    <div class=\"about-top__text-sm\">
                        О компании
                    </div>
                    <h2>";
        // line 166
        echo $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["this"] ?? null), "theme", [], "any", false, false, true, 166), "about_title", [], "any", false, false, true, 166), 166, $this->source);
        echo "</h2>
                </div>
            </div>
            <div class=\"col-md-12 col-lg-6\">
                <div class=\"about-top__img wow animate__animated animate__slower animate__delay-1s  animate__fadeIn animated\">
                    <picture>
                        <source srcset=\"";
        // line 172
        echo $this->extensions['Cms\Twig\Extension']->themeFilter("./assets/img/moto.webp");
        echo "\" type=\"image/webp\">
                        <img src=\"";
        // line 173
        echo $this->extensions['Cms\Twig\Extension']->themeFilter("./assets/img/moto.png");
        echo "\" alt=\"масло sash\" />
                    </picture>
                </div>
            </div>
        </div>
    </div>
</section>
<section class=\"about-bottom\">
    <div class=\"container-lg\">
        <div class=\"row\">
            <div class=\"col-md-12 col-lg-7\">
                <div class=\"about-bottom__info\">
                    <article>
                        ";
        // line 186
        echo $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["this"] ?? null), "theme", [], "any", false, false, true, 186), "about_text", [], "any", false, false, true, 186), 186, $this->source);
        echo "
                    </article>
                </div>

            </div>
            <div class=\"col-md-12 col-lg-5\">
                <div class=\"about-bottom__info2\">
                    <h2>Узнайте больше</h2>
                    <p>Задайте вопрос нашим консультантам или посмотрите короткую видео-презентацию нашей продукции </p>
                    <div class=\"about-bottom__btns\">
                        <div class=\"btn-blue btn-more btn-blue--ic\" data-bs-toggle=\"modal\" data-bs-target=\"#askme\">
                            Задайте вопрос
                            <svg class=\"ic_btn\">
                                <use xlink:href=\"img/sprite.svg#ic-arrow\"></use>
                            </svg>
                        </div>
                        <div onclick=\"playVid()\" class=\"prez btn-tr btn-more btn-tr--ic \" data-bs-toggle=\"modal\" data-bs-target=\"#watchme\">
                            Смотрите видео
                            <svg class=\"ic_btn\">
                                <use xlink:href=\"img/sprite.svg#ic-arrow\"></use>
                            </svg>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>

</section>

<section class=\"news\">
    <div class=\"container-lg\">
        <div class=\"news__sm\">
            <h5>Новости</h5>
            <a href=\"./news.html\">Все новости
                <svg class=\"ic_btn\">
                    <use xlink:href=\"img/sprite.svg#ic-arrow\"></use>
                </svg>
            </a>
        </div>
        <h2>События компании</h2>
        <p>Наша компания специализируется на комплексном решении B2B и B2C секторов.</p>

        <div class=\"news__items\">
            <div class=\"row\">
                <div class=\"col-sm-12 col-md-6 col-lg-3\">
                    <div class=\"news-item\">
                        <a class=\"news-item__image\" href=\"/news-page.html\"><img src=\"./img/news1.jpg\" alt=\"\"></a>
                        <div class=\"news-item__date\"> 20 июня 2021</div>
                        <a href=\"/news-page.html\" class=\"news-item__title\">
                            Новый стиль компании — свежий взгляд на нашу работу
                        </a>
                    </div>
                </div>
                <div class=\"col-sm-12 col-md-6 col-lg-3\">
                    <div class=\"news-item\">
                        <a class=\"news-item__image\" href=\"/news-page.html\"><img src=\"./img/news2.jpg\" alt=\"\"></a>
                        <div class=\"news-item__date\"> 20 июня 2021</div>
                        <a href=\"/news-page.html\" class=\"news-item__title\">
                            Новый стиль компании — свежий взгляд на нашу работу
                        </a>
                    </div>
                </div>
                <div class=\"col-sm-12 col-md-6 col-lg-3\">
                    <div class=\"news-item\">
                        <a class=\"news-item__image\" href=\"/news-page.html\"><img src=\"./img/news3.jpg\" alt=\"\"></a>
                        <div class=\"news-item__date\"> 20 июня 2021</div>
                        <a href=\"/news-page.html\" class=\"news-item__title\">
                            Новый стиль компании
                        </a>
                    </div>
                </div>
                <div class=\"col-sm-12 col-md-6 col-lg-3\">
                    <div class=\"news-item\">
                        <a class=\"news-item__image\" href=\"/news-page.html\"><img src=\"./img/news4.jpg\" alt=\"\"></a>
                        <div class=\"news-item__date\"> 20 июня 2021</div>
                        <a href=\"/news-page.html\" class=\"news-item__title\">
                            Новый стиль компании — свежий взгляд на нашу работу свежий взгляд на нашу работу
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>

</section>

<section class=\"mapinfo\">
    <div class=\"container-lg\">
        <div class=\"news__sm\">
            <h5>Контакты</h5>
            <a href=\"./contacts.html\">Перейти в раздел
                <svg class=\"ic_btn\">
                    <use xlink:href=\"img/sprite.svg#ic-arrow\"></use>
                </svg>
            </a>
        </div>
        <h2>Где купить?</h2>
        <p>Цель нашей компании — сократить издержки, увеличить обороты и доходность вашего бизнеса. Для этого мы изучаем бизнес-процессы компании, анализируем их и ищем узкие места.</p>
    </div>



    <div class=\"container-lg\">
        <div class=\"ymap\">


            <div class=\"row\">
                <div class=\"col-sm-12 col-md-3\">
                    <div class=\"inputs_map\">
                        <label class=\"filters-check\">
                            <input class=\"checkbox-hidden\" type=\"checkbox\" id=\"orange\" checked=true><span class=\"checkbox-wrap wrap-orange\"></span><span class=\"checkbox-text\">Дистрибьюторы</span>
                        </label>
                        <label class=\"filters-check\">
                            <input class=\"checkbox-hidden\" type=\"checkbox\" id=\"blue\" checked=true><span class=\"checkbox-wrap wrap-blue\"></span><span class=\"checkbox-text\">Дилеры</span>
                        </label>
                        <label class=\"filters-check\">
                            <input class=\"checkbox-hidden\" type=\"checkbox\" id=\"yellow\" checked=true><span class=\"checkbox-wrap wrap-yellow\"></span><span class=\"checkbox-text\">Торговые точки</span>
                        </label>


                    </div>
                </div>
                <div class=\"col-sm-12 col-md-9\">
                    <div id=\"maps\"></div>
                </div>

            </div>

            <!--       <div class=\"inputs_map\">

                    <input type='checkbox' id='red' checked=true>Дилеры</input><br>
                    <input type='checkbox' id='green' checked=true>Дистрибьютеры</input><br>
                    <input type='checkbox' id='yellow' checked=true>Розничные точки</input>

                </div>-->




        </div>


    </div>
</section>";
    }

    public function getTemplateName()
    {
        return "W:\\domains\\sash.loc/themes/sash/pages/home.htm";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  322 => 186,  306 => 173,  302 => 172,  293 => 166,  279 => 154,  268 => 149,  261 => 145,  254 => 141,  247 => 137,  240 => 133,  233 => 129,  222 => 121,  215 => 117,  211 => 116,  203 => 113,  199 => 112,  194 => 109,  190 => 108,  171 => 92,  163 => 87,  143 => 70,  129 => 59,  112 => 45,  98 => 34,  81 => 20,  77 => 19,  67 => 12,  63 => 11,  54 => 5,  50 => 4,  46 => 3,  42 => 2,  39 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("<div class=\"video-bg\">
    <video id=\"video\" width=\"100%\" height=\"auto\" autoplay=\"autoplay\" loop=\"loop\" preload=\"auto\" poster=\"{{'./assets/img/poster.jpg'|theme}}\" muted>
        <source src=\"{{'./assets/img/video.mp4'|theme}}\" type=\"video/mp4\">
        <source src=\"{{'./assets/img/video.webm'|theme}}\" type=\"video/webm\">
        <source src=\"{{'./assets/img/video.ogv'|theme}}\" type=\"video/ogv\">
    </video>
    <div class=\"main-banner\">
        <div class=\"container-lg\">
            <div class=\"banner__wrp\">
                <div class=\"banner__text\">
                    <h1>{{this.theme.main_title}}</h1>
                    <p>{{this.theme.main_subtitle}}</p>
                    <div class=\"btn-blue\" data-bs-toggle=\"modal\" data-bs-target=\"#callme\">
                        Коммерческое предложение
                    </div>
                </div>
                <div class=\"banner__img animate__animated animate__fadeIn animate__delay-2s\">
                    <picture>
                        <source srcset=\"{{this.theme.main_image|media}}\" type=\"image/webp\">
                        <img src=\"{{this.theme.main_image2|media}}\" alt=\"масло sash\" />
                    </picture>
                </div>
            </div>
        </div>
    </div>
</div>

<div class=\"tizers\">
    <div class=\"container\">
        <div class=\"tizers_wrp\">
            <div class=\"tizer tizer1\">
                <div class=\"tizer_icon\">
                    <svg class=\"ic_tizer\">
                        <use xlink:href=\"{{'./assets/img/sprite.svg#route'|theme}}\"></use>
                    </svg>

                </div>
                <div class=\"tizer_descr\">
                    <span> Эксклюзивные условия</span> работы на территории
                </div>
            </div>
            <div class=\"tizer tizer2\">
                <div class=\"tizer_icon\">
                    <svg class=\"ic_tizer\">
                        <use xlink:href=\"{{'img/sprite.svg#oil'|theme}}\"></use>
                    </svg>
                </div>

                <div class=\"tizer_descr\">
                    <span>Широкий ассортимент</span>
                    и&nbsp;высокое качество
                </div>
            </div>
            <div class=\"tizer tizer3\">
                <div class=\"tizer_image\">
                    <!--     <svg class=\"ic_tizer ic_orange\">
                            <use xlink:href=\"img/sprite.svg#calculator\"></use>
                        </svg>-->
                    <img src=\"{{'./assets/img/bull.png'|theme}}\" alt=\"производство испания\">
                </div>

                <div class=\"tizer_descr tizer_descr--bull\">
                    <span>Европейское премиальное качество</span> с исторической родины корриды

                </div>
            </div>
            <div class=\"tizer tizer4\">
                <div class=\"tizer_icon\">
                    <svg class=\"ic_tizer\">
                        <use xlink:href=\"{{'./assets/img/sprite.svg#seo'|theme}}\"></use>
                    </svg>
                </div>

                <div class=\"tizer_descr\">
                    Маркетинговая поддержка
                </div>

            </div>
        </div>
    </div>
</div>

<section id=\"catalogid\" class=\"catalog\">
    <div class=\"container-lg\">
        <div class=\"row\">
            <div class=\"col-sm-12 col-md-5\">
                <h2>{{this.theme.catalog_title}}</h2>
            </div>
            <div class=\"col-sm-12 col-md-7\">
                <div class=\"catalog_dscr\">
                    <b>
                        {{this.theme.catalog_subtitle|raw}}
                    </b>
                    <a href=\"#\" class=\"btn-blue btn-blue--ic\">
                        Перейти в каталог
                        <svg class=\"ic_btn\">
                            <use xlink:href=\"img/sprite.svg#ic-arrow\"></use>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div class=\"container-lg\">
        <div class=\"arrows\">
        </div>
        <div class=\"catalog_slider\">
            {% for field in this.theme.slider %}
            <div>
                <div class=\"item\">
                    <div class=\"item__img\">
                        <a href=\"{{field.p_link}}\">
                            <img src=\"{{field.p_image|media| resize(300, 300, false, { mode: 'crop', quality: '80'})}}\" alt=\"{{field.p_title}}\">
                        </a>
                    </div>
                    <a href=\"{{field.p_link}}\" class=\"item__title\">
                        {{field.p_title}}
                    </a>
                    <div class=\"item__info\">
                        <div class=\"item__code\">
                            Арт. {{field.p_articul}}
                        </div>
                        <div class=\"item__sticker item__sticker--green\">
                            В наличии
                        </div>
                    </div>
                    <div class=\"item__rating\">
                        <svg class=\"ic_rating\">
                            <use xlink:href=\"{{'./assets/img/sprite.svg#star'|theme}}\"></use>
                        </svg>

                        <svg class=\"ic_rating\">
                            <use xlink:href=\"{{'./assets/img/sprite.svg#star'|theme}}\"></use>
                        </svg>

                        <svg class=\"ic_rating\">
                            <use xlink:href=\"{{'./assets/img/sprite.svg#star'|theme}}\"></use>
                        </svg>

                        <svg class=\"ic_rating\">
                            <use xlink:href=\"{{'./assets/img/sprite.svg#star'|theme}}\"></use>
                        </svg>

                        <svg class=\"ic_rating\">
                            <use xlink:href=\"{{'./assets/img/sprite.svg#star'|theme}}\"></use>
                        </svg>
                    </div>
                    <div class=\"item__buy\">
                        <a href=\"{{field.p_link}}\" class=\"btn-orange item__btn\">Подробнее</a>
                    </div>
                </div>
            </div>
            {% endfor %}
        </div>
    </div>
</section>

<section class=\"about-top\">
    <div class=\"container-lg\">
        <div class=\"row\">
            <div class=\"col-md-12 col-lg-6\">
                <div class=\"about-top__text-wrp\">
                    <div class=\"about-top__text-sm\">
                        О компании
                    </div>
                    <h2>{{this.theme.about_title|raw}}</h2>
                </div>
            </div>
            <div class=\"col-md-12 col-lg-6\">
                <div class=\"about-top__img wow animate__animated animate__slower animate__delay-1s  animate__fadeIn animated\">
                    <picture>
                        <source srcset=\"{{'./assets/img/moto.webp'|theme}}\" type=\"image/webp\">
                        <img src=\"{{'./assets/img/moto.png'|theme}}\" alt=\"масло sash\" />
                    </picture>
                </div>
            </div>
        </div>
    </div>
</section>
<section class=\"about-bottom\">
    <div class=\"container-lg\">
        <div class=\"row\">
            <div class=\"col-md-12 col-lg-7\">
                <div class=\"about-bottom__info\">
                    <article>
                        {{this.theme.about_text|raw}}
                    </article>
                </div>

            </div>
            <div class=\"col-md-12 col-lg-5\">
                <div class=\"about-bottom__info2\">
                    <h2>Узнайте больше</h2>
                    <p>Задайте вопрос нашим консультантам или посмотрите короткую видео-презентацию нашей продукции </p>
                    <div class=\"about-bottom__btns\">
                        <div class=\"btn-blue btn-more btn-blue--ic\" data-bs-toggle=\"modal\" data-bs-target=\"#askme\">
                            Задайте вопрос
                            <svg class=\"ic_btn\">
                                <use xlink:href=\"img/sprite.svg#ic-arrow\"></use>
                            </svg>
                        </div>
                        <div onclick=\"playVid()\" class=\"prez btn-tr btn-more btn-tr--ic \" data-bs-toggle=\"modal\" data-bs-target=\"#watchme\">
                            Смотрите видео
                            <svg class=\"ic_btn\">
                                <use xlink:href=\"img/sprite.svg#ic-arrow\"></use>
                            </svg>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>

</section>

<section class=\"news\">
    <div class=\"container-lg\">
        <div class=\"news__sm\">
            <h5>Новости</h5>
            <a href=\"./news.html\">Все новости
                <svg class=\"ic_btn\">
                    <use xlink:href=\"img/sprite.svg#ic-arrow\"></use>
                </svg>
            </a>
        </div>
        <h2>События компании</h2>
        <p>Наша компания специализируется на комплексном решении B2B и B2C секторов.</p>

        <div class=\"news__items\">
            <div class=\"row\">
                <div class=\"col-sm-12 col-md-6 col-lg-3\">
                    <div class=\"news-item\">
                        <a class=\"news-item__image\" href=\"/news-page.html\"><img src=\"./img/news1.jpg\" alt=\"\"></a>
                        <div class=\"news-item__date\"> 20 июня 2021</div>
                        <a href=\"/news-page.html\" class=\"news-item__title\">
                            Новый стиль компании — свежий взгляд на нашу работу
                        </a>
                    </div>
                </div>
                <div class=\"col-sm-12 col-md-6 col-lg-3\">
                    <div class=\"news-item\">
                        <a class=\"news-item__image\" href=\"/news-page.html\"><img src=\"./img/news2.jpg\" alt=\"\"></a>
                        <div class=\"news-item__date\"> 20 июня 2021</div>
                        <a href=\"/news-page.html\" class=\"news-item__title\">
                            Новый стиль компании — свежий взгляд на нашу работу
                        </a>
                    </div>
                </div>
                <div class=\"col-sm-12 col-md-6 col-lg-3\">
                    <div class=\"news-item\">
                        <a class=\"news-item__image\" href=\"/news-page.html\"><img src=\"./img/news3.jpg\" alt=\"\"></a>
                        <div class=\"news-item__date\"> 20 июня 2021</div>
                        <a href=\"/news-page.html\" class=\"news-item__title\">
                            Новый стиль компании
                        </a>
                    </div>
                </div>
                <div class=\"col-sm-12 col-md-6 col-lg-3\">
                    <div class=\"news-item\">
                        <a class=\"news-item__image\" href=\"/news-page.html\"><img src=\"./img/news4.jpg\" alt=\"\"></a>
                        <div class=\"news-item__date\"> 20 июня 2021</div>
                        <a href=\"/news-page.html\" class=\"news-item__title\">
                            Новый стиль компании — свежий взгляд на нашу работу свежий взгляд на нашу работу
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>

</section>

<section class=\"mapinfo\">
    <div class=\"container-lg\">
        <div class=\"news__sm\">
            <h5>Контакты</h5>
            <a href=\"./contacts.html\">Перейти в раздел
                <svg class=\"ic_btn\">
                    <use xlink:href=\"img/sprite.svg#ic-arrow\"></use>
                </svg>
            </a>
        </div>
        <h2>Где купить?</h2>
        <p>Цель нашей компании — сократить издержки, увеличить обороты и доходность вашего бизнеса. Для этого мы изучаем бизнес-процессы компании, анализируем их и ищем узкие места.</p>
    </div>



    <div class=\"container-lg\">
        <div class=\"ymap\">


            <div class=\"row\">
                <div class=\"col-sm-12 col-md-3\">
                    <div class=\"inputs_map\">
                        <label class=\"filters-check\">
                            <input class=\"checkbox-hidden\" type=\"checkbox\" id=\"orange\" checked=true><span class=\"checkbox-wrap wrap-orange\"></span><span class=\"checkbox-text\">Дистрибьюторы</span>
                        </label>
                        <label class=\"filters-check\">
                            <input class=\"checkbox-hidden\" type=\"checkbox\" id=\"blue\" checked=true><span class=\"checkbox-wrap wrap-blue\"></span><span class=\"checkbox-text\">Дилеры</span>
                        </label>
                        <label class=\"filters-check\">
                            <input class=\"checkbox-hidden\" type=\"checkbox\" id=\"yellow\" checked=true><span class=\"checkbox-wrap wrap-yellow\"></span><span class=\"checkbox-text\">Торговые точки</span>
                        </label>


                    </div>
                </div>
                <div class=\"col-sm-12 col-md-9\">
                    <div id=\"maps\"></div>
                </div>

            </div>

            <!--       <div class=\"inputs_map\">

                    <input type='checkbox' id='red' checked=true>Дилеры</input><br>
                    <input type='checkbox' id='green' checked=true>Дистрибьютеры</input><br>
                    <input type='checkbox' id='yellow' checked=true>Розничные точки</input>

                </div>-->




        </div>


    </div>
</section>", "W:\\domains\\sash.loc/themes/sash/pages/home.htm", "");
    }
    
    public function checkSecurity()
    {
        static $tags = array("for" => 108);
        static $filters = array("theme" => 2, "escape" => 11, "media" => 19, "raw" => 92, "resize" => 113);
        static $functions = array();

        try {
            $this->sandbox->checkSecurity(
                ['for'],
                ['theme', 'escape', 'media', 'raw', 'resize'],
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
