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

/* W:\domains\sash.loc/themes/sash/partials/footer.htm */
class __TwigTemplate_09adc5276bfc04d9e0d78df7c11284476d3870371d1fb3ba07ec64ba970cd541 extends \Twig\Template
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
        <div class=\"row\">
            <div class=\"col-sm-12 col-md-3\">
                <a href=\"/\"><img src=\"./img/logo-white.png\" alt=\"логотип sash\"></a>
                <p class=\"footer__desc\">Ведущая компания в секторе cмазочных материалов. Обладаем более чем 30-ти летним опытом в производстве и реализации продукции по всему миру. Предлагаем самые современные смазочные материалы</p>
            </div>
            <div class=\"col-sm-12 col-md-2\">
                <div class=\"footer__title\">
                    Главноe меню
                </div>
                <ul>
                    <li><a href=\"./catalog.html\">Продукция</a></li>
                    <li><a href=\"./catalog.html\">Где купить?</a></li>
                    <li><a href=\"./catalog.html\">Новости</a></li>
                </ul>
            </div>
            <div class=\"col-sm-12 col-md-3\">
                <div class=\"footer__title\">
                    ДИСТРИБЬЮТОРАМ
                </div>
                <ul>
                    <li><a href=\"./catalog.html\">Коммерческое предложение</a></li>
                    <li><a href=\"./catalog.html\">Политика конфиденциальности</a></li>
                    <li><a href=\"./catalog.html\">Публичная оферта</a></li>
                </ul>
            </div>
            <div class=\"col-sm-12 col-md-4\">
                <div class=\"footer__title\">
                    Эксклюзивный импортер в РФ и страны EAC
                    АО&nbsp;\"Сафари-215\"
                </div>
                <div class=\"footer__adress\">
                    <svg class=\"ic_footer\">
                        <use xlink:href=\"img/sprite.svg#marker\"></use>
                    </svg>
                    <p>Москвовская область, г. Балашиха, Звездная , владение 15</p>
                </div>
                <div class=\"footer__phone\">
                    <svg class=\"ic_footer\">
                        <use xlink:href=\"img/sprite.svg#call2\"></use>
                    </svg>
                    <a href=\"#\">8 (903) 162 61 03</a>
                </div>
                <div class=\"footer__mail\">
                    <svg class=\"ic_footer\">
                        <use xlink:href=\"img/sprite.svg#mail\"></use>
                    </svg>
                    <a href=\"mailto:#\">avk@safary215.ru</a>
                </div>

            </div>
            <hr>
            <div class=\"col-sm-12 col-lg-8\">
                <div class=\"footer__submit\">
                    <div class=\"footer__social\">
                        <a href=\"https://www.instagram.com/sash_russia/\">
                            <svg class=\"ic_social\">
                                <use xlink:href=\"img/sprite.svg#insta\"></use>
                            </svg>
                        </a>
                        <!--                      <a href=\"#\">
                            <svg class=\"ic_social\">
                                <use xlink:href=\"img/sprite.svg#facebook\"></use>
                            </svg>
                        </a>
                        <a href=\"#\">
                            <svg class=\"ic_social\">
                                <use xlink:href=\"img/sprite.svg#youtube\"></use>
                            </svg>
                        </a>-->
                    </div>
                    <div class=\"footer__form\">
                        <form action=\"#\">
                            <input type=\"text\" placeholder=\"Получать наши новости на email\">
                            <button type=\"submit\">
                                <svg class=\"ic_footerform\">
                                    <use xlink:href=\"img/sprite.svg#send\"></use>
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <div class=\"col-sm-12 col-lg-4\">
                <!--   <div class=\"footer__copy\"> © 2002- 2001 г. Эксклюзивный импортер в РФ и страны EAC
                    АО \"Сафари-215\"</div>-->

            </div>

        </div>
    </div>


    <div class=\"modal fade\" id=\"callme\" tabindex=\"-1\" aria-hidden=\"true\">
        <div class=\"modal-dialog modal-lg\">
            <div class=\"modal-content\">

                <div class=\"modal-body\">
                    <div class=\"row \">
                        <div class=\"col-sm-12 col-md-7\">

                            <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>
                            <form class=\"form_modal form2\" name=\"#\" method=\"post\" action=\"#\" enctype=\"multipart/form-data\">

                                <div class=\"form-group_modal\">

                                    <div class=\"modal-title\">Перезвоним,&nbsp;ответим на&nbsp;все вопросы, подготовим коммерческое предложение</div><br>
                                    <!-- <label for=\"username\">Введите Ваше имя <span>*</span></label>-->
                                    <input class=\"form_input__modal\" name=\"Имя\" type=\"text\" placeholder=\"Имя\" required>
                                    <!--  <label for=\"userphone\">Введите Ваш телефон <span>*</span></label>-->
                                    <input class=\"form_input__modal phone_mask\" name=\"Телефон\" type=\"text\" placeholder=\"Телефон\" required>
                                    <input class=\"form_input__modal\" name=\"Электронная почта\" type=\"email\" placeholder=\"Электронная почта\" required>
                                </div>
                                <div class=\"form_group__bottom-modal\">
                                    <input class=\"form_btn__modal\" value=\"Oтправить\" type=\"submit\">
                                    <div class=\"custom_chek\">
                                        <div id=\"wb_Checkbox1\">
                                            <input type=\"checkbox\" id=\"Checkbox1\" name=\"Условия договора и политики конфиденциальности\" value=\"Приняты\" checked><label for=\"Checkbox1\"></label>
                                        </div>
                                        <p>Я согласен на обработку моих персональных данных в соответствии с <a href=\"./privacy.html\">Условиями</a></p>
                                    </div>

                                </div>





                                <input type=\"hidden\" name=\"project_name\" value=\"Заполнена форма на сайте Sash-oil.ru\">
                                <input type=\"hidden\" name=\"admin_email\" value=\"info@delosait.ru\">
                                <input type=\"hidden\" name=\"form_subject\" value=\"Сообщение с формы Комерческое предложение\">


                            </form>
                            <div id=\"success\">
                                <div class=\"text_success\"> Ваша заявка<br>успешно отправлена!</div>


                            </div>

                        </div>
                        <div class=\"col-sm-12 col-md-5 d-flex graypart\">
                            <div class=\"mc-wrp\">
                                <div class=\"modal-contacts\">
                                    <div>
                                        <div class=\"modal-contacts__heading\">Также мы всегда
                                            на связи по нашим
                                            обычным контактам:</div>
                                        <div class=\"modal-contacts__contacts\">


                                            <a href=\"8(800)2000 600\"> 8(800)2000 600</a>
                                            <a href=\"mailto:info@posklab.ru\">

                                                avk@safary215.ru</a>
                                        </div>
                                        <a class=\"modal-contacts__bottom\" href=\"/contacts.html\">Контакты</a>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>



                </div>

            </div>
        </div>
    </div>
    <div class=\"modal fade\" onclick=\"pauseVid()\" id=\"watchme\" tabindex=\"-1\" aria-hidden=\"true\">
        <div class=\"modal-dialog modal-lg video-modal\">
            <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\" onclick=\"pauseVid()\"> </button>
            <div class=\"modal-content\">

                <div class=\"modal-body\">
                    <video id=\"gossVideo\" width=\"100%\" height=\"100%\" loop=\"loop\" preload=\"auto\" muted autoplay poster=\"./img/poster.jpg\" controls>
                        <source src=\"./img/prez.mp4\" type=\"video/mp4\">

                        <source src=\"./img/prez.webm\" type=\"video/webm\">

                        <source src=\"./img/prez.ogv\" type=\"video/ogv\">


                    </video>


                </div>

            </div>
        </div>
    </div>

    <div class=\"modal fade\" id=\"askme\" tabindex=\"-1\" aria-hidden=\"true\">
        <div class=\"modal-dialog modal-lg\">
            <div class=\"modal-content\">

                <div class=\"modal-body\">
                    <div class=\"row \">
                        <div class=\"col-sm-12 col-md-8\">

                            <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>
                            <form class=\"form_modal form2\" name=\"#\" method=\"post\" action=\"#\" enctype=\"multipart/form-data\">

                                <div class=\"form-group_modal\">

                                    <div class=\"modal-title\">Задайте вопрос нашим консультантам</div><br>
                                    <!-- <label for=\"username\">Введите Ваше имя <span>*</span></label>-->
                                    <input class=\"form_input__modal\" name=\"Имя\" type=\"text\" placeholder=\"Название компании\" required>

                                    <!--  <label for=\"userphone\">Введите Ваш email <span>*</span></label>-->
                                    <input class=\"form_input__modal\" name=\"Электронная почта\" type=\"text\" placeholder=\"Электронная почта\" required>
                                    <textarea class=\"form_input__modal\" placeholder=\"Ваш вопрос\" name=\"Сообщение\" cols=\"30\" rows=\"10\"></textarea>


                                </div>
                                <div class=\"form_group__bottom-modal\">
                                    <input class=\"form_btn__modal\" value=\"Oтправить\" type=\"submit\">
                                    <div class=\"custom_chek\">
                                        <div id=\"wb_Checkbox4\">
                                            <input type=\"checkbox\" id=\"Checkbox4\" name=\"Условия договора и политики конфиденциальности\" value=\"Приняты\" checked><label for=\"Checkbox4\"></label>
                                        </div>
                                        <p>Я согласен на обработку моих персональных данных в соответствии с <a href=\"./privacy.html\">Условиями</a></p>
                                    </div>

                                </div>





                                <input type=\"hidden\" name=\"project_name\" value=\"Заполнена форма на сайте POSCLUB.RU\">
                                <input type=\"hidden\" name=\"admin_email\" value=\"info@delosait.ru\">
                                <input type=\"hidden\" name=\"form_subject\" value=\"Сообщение с формы Задать вопрос\">


                            </form>
                            <div id=\"success2\">
                                <div class=\"text_success\"> Ваша заявка<br>успешно отправлена!</div>


                            </div>

                        </div>
                        <div class=\"col-sm-12 col-md-4 d-flex graypart\">
                            <div class=\"mc-wrp\">
                                <div class=\"modal-contacts\">
                                    <div>
                                        <div class=\"modal-contacts__heading\">Также мы всегда
                                            на&nbsp;связи по нашим
                                            обычным контактам:</div>
                                        <div class=\"modal-contacts__contacts\">


                                            <a href=\"8(800)2000 600\"> 8(800)2000 600</a>
                                            <a href=\"mailto:info@sash-oil.ru\"> info@sash-oil.ru</a>
                                        </div>
                                        <a class=\"modal-contacts__bottom\" href=\"/contacts.html\">Контакты</a>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>



                </div>

            </div>
        </div>
    </div>

    <div class=\"modal fade\" id=\"buyme\" tabindex=\"-1\" aria-hidden=\"true\">
        <div class=\"modal-dialog modal-lg\">
            <div class=\"modal-content\">

                <div class=\"modal-body\">
                    <div class=\"row \">
                        <div class=\"col-sm-12 col-md-8\">

                            <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>
                            <form class=\"form_modal form2\" name=\"#\" method=\"post\" action=\"#\" enctype=\"multipart/form-data\">

                                <div class=\"form-group_modal\">

                                    <div class=\"modal-title\">Введите параметры вашего автомобиля</div><br>

                                    <input class=\"form_input__modal\" name=\"Электронная почта\" type=\"text\" placeholder=\"Электронная почта\" required>
                                    <input class=\"form_input__modal\" name=\"Электронная почта\" type=\"tel\" placeholder=\"Ваш телефон\" required>
                                    <textarea class=\"form_input__modal\" placeholder=\"Параметры\" name=\"Сообщение\" cols=\"30\" rows=\"10\"></textarea>


                                </div>
                                <div class=\"form_group__bottom-modal\">
                                    <input class=\"form_btn__modal\" value=\"Oтправить\" type=\"submit\">
                                    <div class=\"custom_chek\">
                                        <div id=\"wb_Checkbox4\">
                                            <input type=\"checkbox\" id=\"Checkbox4\" name=\"Условия договора и политики конфиденциальности\" value=\"Приняты\" checked><label for=\"Checkbox4\"></label>
                                        </div>
                                        <p>Я согласен на обработку моих персональных данных в соответствии с <a href=\"./privacy.html\">Условиями</a></p>
                                    </div>

                                </div>





                                <input type=\"hidden\" name=\"project_name\" value=\"Заполнена форма на сайте POSCLUB.RU\">
                                <input type=\"hidden\" name=\"admin_email\" value=\"info@delosait.ru\">
                                <input type=\"hidden\" name=\"form_subject\" value=\"Сообщение с формы Задать вопрос\">


                            </form>
                            <div id=\"success2\">
                                <div class=\"text_success\"> Ваша заявка<br>успешно отправлена!</div>


                            </div>

                        </div>
                        <div class=\"col-sm-12 col-md-4 d-flex graypart\">
                            <div class=\"mc-wrp\">
                                <div class=\"modal-contacts\">
                                    <div>
                                        <div class=\"modal-contacts__heading\">Также мы всегда
                                            на&nbsp;связи по нашим
                                            обычным контактам:</div>
                                        <div class=\"modal-contacts__contacts\">


                                            <a href=\"8(800)2000 600\"> 8(800)2000 600</a>
                                            <a href=\"mailto:info@sash-oil.ru\"> info@sash-oil.ru</a>
                                        </div>
                                        <a class=\"modal-contacts__bottom\" href=\"/contacts.html\">Контакты</a>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>



                </div>

            </div>
        </div>
    </div>";
    }

    public function getTemplateName()
    {
        return "W:\\domains\\sash.loc/themes/sash/partials/footer.htm";
    }

    public function getDebugInfo()
    {
        return array (  39 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("<div class=\"container-lg\">
        <div class=\"row\">
            <div class=\"col-sm-12 col-md-3\">
                <a href=\"/\"><img src=\"./img/logo-white.png\" alt=\"логотип sash\"></a>
                <p class=\"footer__desc\">Ведущая компания в секторе cмазочных материалов. Обладаем более чем 30-ти летним опытом в производстве и реализации продукции по всему миру. Предлагаем самые современные смазочные материалы</p>
            </div>
            <div class=\"col-sm-12 col-md-2\">
                <div class=\"footer__title\">
                    Главноe меню
                </div>
                <ul>
                    <li><a href=\"./catalog.html\">Продукция</a></li>
                    <li><a href=\"./catalog.html\">Где купить?</a></li>
                    <li><a href=\"./catalog.html\">Новости</a></li>
                </ul>
            </div>
            <div class=\"col-sm-12 col-md-3\">
                <div class=\"footer__title\">
                    ДИСТРИБЬЮТОРАМ
                </div>
                <ul>
                    <li><a href=\"./catalog.html\">Коммерческое предложение</a></li>
                    <li><a href=\"./catalog.html\">Политика конфиденциальности</a></li>
                    <li><a href=\"./catalog.html\">Публичная оферта</a></li>
                </ul>
            </div>
            <div class=\"col-sm-12 col-md-4\">
                <div class=\"footer__title\">
                    Эксклюзивный импортер в РФ и страны EAC
                    АО&nbsp;\"Сафари-215\"
                </div>
                <div class=\"footer__adress\">
                    <svg class=\"ic_footer\">
                        <use xlink:href=\"img/sprite.svg#marker\"></use>
                    </svg>
                    <p>Москвовская область, г. Балашиха, Звездная , владение 15</p>
                </div>
                <div class=\"footer__phone\">
                    <svg class=\"ic_footer\">
                        <use xlink:href=\"img/sprite.svg#call2\"></use>
                    </svg>
                    <a href=\"#\">8 (903) 162 61 03</a>
                </div>
                <div class=\"footer__mail\">
                    <svg class=\"ic_footer\">
                        <use xlink:href=\"img/sprite.svg#mail\"></use>
                    </svg>
                    <a href=\"mailto:#\">avk@safary215.ru</a>
                </div>

            </div>
            <hr>
            <div class=\"col-sm-12 col-lg-8\">
                <div class=\"footer__submit\">
                    <div class=\"footer__social\">
                        <a href=\"https://www.instagram.com/sash_russia/\">
                            <svg class=\"ic_social\">
                                <use xlink:href=\"img/sprite.svg#insta\"></use>
                            </svg>
                        </a>
                        <!--                      <a href=\"#\">
                            <svg class=\"ic_social\">
                                <use xlink:href=\"img/sprite.svg#facebook\"></use>
                            </svg>
                        </a>
                        <a href=\"#\">
                            <svg class=\"ic_social\">
                                <use xlink:href=\"img/sprite.svg#youtube\"></use>
                            </svg>
                        </a>-->
                    </div>
                    <div class=\"footer__form\">
                        <form action=\"#\">
                            <input type=\"text\" placeholder=\"Получать наши новости на email\">
                            <button type=\"submit\">
                                <svg class=\"ic_footerform\">
                                    <use xlink:href=\"img/sprite.svg#send\"></use>
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <div class=\"col-sm-12 col-lg-4\">
                <!--   <div class=\"footer__copy\"> © 2002- 2001 г. Эксклюзивный импортер в РФ и страны EAC
                    АО \"Сафари-215\"</div>-->

            </div>

        </div>
    </div>


    <div class=\"modal fade\" id=\"callme\" tabindex=\"-1\" aria-hidden=\"true\">
        <div class=\"modal-dialog modal-lg\">
            <div class=\"modal-content\">

                <div class=\"modal-body\">
                    <div class=\"row \">
                        <div class=\"col-sm-12 col-md-7\">

                            <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>
                            <form class=\"form_modal form2\" name=\"#\" method=\"post\" action=\"#\" enctype=\"multipart/form-data\">

                                <div class=\"form-group_modal\">

                                    <div class=\"modal-title\">Перезвоним,&nbsp;ответим на&nbsp;все вопросы, подготовим коммерческое предложение</div><br>
                                    <!-- <label for=\"username\">Введите Ваше имя <span>*</span></label>-->
                                    <input class=\"form_input__modal\" name=\"Имя\" type=\"text\" placeholder=\"Имя\" required>
                                    <!--  <label for=\"userphone\">Введите Ваш телефон <span>*</span></label>-->
                                    <input class=\"form_input__modal phone_mask\" name=\"Телефон\" type=\"text\" placeholder=\"Телефон\" required>
                                    <input class=\"form_input__modal\" name=\"Электронная почта\" type=\"email\" placeholder=\"Электронная почта\" required>
                                </div>
                                <div class=\"form_group__bottom-modal\">
                                    <input class=\"form_btn__modal\" value=\"Oтправить\" type=\"submit\">
                                    <div class=\"custom_chek\">
                                        <div id=\"wb_Checkbox1\">
                                            <input type=\"checkbox\" id=\"Checkbox1\" name=\"Условия договора и политики конфиденциальности\" value=\"Приняты\" checked><label for=\"Checkbox1\"></label>
                                        </div>
                                        <p>Я согласен на обработку моих персональных данных в соответствии с <a href=\"./privacy.html\">Условиями</a></p>
                                    </div>

                                </div>





                                <input type=\"hidden\" name=\"project_name\" value=\"Заполнена форма на сайте Sash-oil.ru\">
                                <input type=\"hidden\" name=\"admin_email\" value=\"info@delosait.ru\">
                                <input type=\"hidden\" name=\"form_subject\" value=\"Сообщение с формы Комерческое предложение\">


                            </form>
                            <div id=\"success\">
                                <div class=\"text_success\"> Ваша заявка<br>успешно отправлена!</div>


                            </div>

                        </div>
                        <div class=\"col-sm-12 col-md-5 d-flex graypart\">
                            <div class=\"mc-wrp\">
                                <div class=\"modal-contacts\">
                                    <div>
                                        <div class=\"modal-contacts__heading\">Также мы всегда
                                            на связи по нашим
                                            обычным контактам:</div>
                                        <div class=\"modal-contacts__contacts\">


                                            <a href=\"8(800)2000 600\"> 8(800)2000 600</a>
                                            <a href=\"mailto:info@posklab.ru\">

                                                avk@safary215.ru</a>
                                        </div>
                                        <a class=\"modal-contacts__bottom\" href=\"/contacts.html\">Контакты</a>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>



                </div>

            </div>
        </div>
    </div>
    <div class=\"modal fade\" onclick=\"pauseVid()\" id=\"watchme\" tabindex=\"-1\" aria-hidden=\"true\">
        <div class=\"modal-dialog modal-lg video-modal\">
            <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\" onclick=\"pauseVid()\"> </button>
            <div class=\"modal-content\">

                <div class=\"modal-body\">
                    <video id=\"gossVideo\" width=\"100%\" height=\"100%\" loop=\"loop\" preload=\"auto\" muted autoplay poster=\"./img/poster.jpg\" controls>
                        <source src=\"./img/prez.mp4\" type=\"video/mp4\">

                        <source src=\"./img/prez.webm\" type=\"video/webm\">

                        <source src=\"./img/prez.ogv\" type=\"video/ogv\">


                    </video>


                </div>

            </div>
        </div>
    </div>

    <div class=\"modal fade\" id=\"askme\" tabindex=\"-1\" aria-hidden=\"true\">
        <div class=\"modal-dialog modal-lg\">
            <div class=\"modal-content\">

                <div class=\"modal-body\">
                    <div class=\"row \">
                        <div class=\"col-sm-12 col-md-8\">

                            <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>
                            <form class=\"form_modal form2\" name=\"#\" method=\"post\" action=\"#\" enctype=\"multipart/form-data\">

                                <div class=\"form-group_modal\">

                                    <div class=\"modal-title\">Задайте вопрос нашим консультантам</div><br>
                                    <!-- <label for=\"username\">Введите Ваше имя <span>*</span></label>-->
                                    <input class=\"form_input__modal\" name=\"Имя\" type=\"text\" placeholder=\"Название компании\" required>

                                    <!--  <label for=\"userphone\">Введите Ваш email <span>*</span></label>-->
                                    <input class=\"form_input__modal\" name=\"Электронная почта\" type=\"text\" placeholder=\"Электронная почта\" required>
                                    <textarea class=\"form_input__modal\" placeholder=\"Ваш вопрос\" name=\"Сообщение\" cols=\"30\" rows=\"10\"></textarea>


                                </div>
                                <div class=\"form_group__bottom-modal\">
                                    <input class=\"form_btn__modal\" value=\"Oтправить\" type=\"submit\">
                                    <div class=\"custom_chek\">
                                        <div id=\"wb_Checkbox4\">
                                            <input type=\"checkbox\" id=\"Checkbox4\" name=\"Условия договора и политики конфиденциальности\" value=\"Приняты\" checked><label for=\"Checkbox4\"></label>
                                        </div>
                                        <p>Я согласен на обработку моих персональных данных в соответствии с <a href=\"./privacy.html\">Условиями</a></p>
                                    </div>

                                </div>





                                <input type=\"hidden\" name=\"project_name\" value=\"Заполнена форма на сайте POSCLUB.RU\">
                                <input type=\"hidden\" name=\"admin_email\" value=\"info@delosait.ru\">
                                <input type=\"hidden\" name=\"form_subject\" value=\"Сообщение с формы Задать вопрос\">


                            </form>
                            <div id=\"success2\">
                                <div class=\"text_success\"> Ваша заявка<br>успешно отправлена!</div>


                            </div>

                        </div>
                        <div class=\"col-sm-12 col-md-4 d-flex graypart\">
                            <div class=\"mc-wrp\">
                                <div class=\"modal-contacts\">
                                    <div>
                                        <div class=\"modal-contacts__heading\">Также мы всегда
                                            на&nbsp;связи по нашим
                                            обычным контактам:</div>
                                        <div class=\"modal-contacts__contacts\">


                                            <a href=\"8(800)2000 600\"> 8(800)2000 600</a>
                                            <a href=\"mailto:info@sash-oil.ru\"> info@sash-oil.ru</a>
                                        </div>
                                        <a class=\"modal-contacts__bottom\" href=\"/contacts.html\">Контакты</a>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>



                </div>

            </div>
        </div>
    </div>

    <div class=\"modal fade\" id=\"buyme\" tabindex=\"-1\" aria-hidden=\"true\">
        <div class=\"modal-dialog modal-lg\">
            <div class=\"modal-content\">

                <div class=\"modal-body\">
                    <div class=\"row \">
                        <div class=\"col-sm-12 col-md-8\">

                            <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>
                            <form class=\"form_modal form2\" name=\"#\" method=\"post\" action=\"#\" enctype=\"multipart/form-data\">

                                <div class=\"form-group_modal\">

                                    <div class=\"modal-title\">Введите параметры вашего автомобиля</div><br>

                                    <input class=\"form_input__modal\" name=\"Электронная почта\" type=\"text\" placeholder=\"Электронная почта\" required>
                                    <input class=\"form_input__modal\" name=\"Электронная почта\" type=\"tel\" placeholder=\"Ваш телефон\" required>
                                    <textarea class=\"form_input__modal\" placeholder=\"Параметры\" name=\"Сообщение\" cols=\"30\" rows=\"10\"></textarea>


                                </div>
                                <div class=\"form_group__bottom-modal\">
                                    <input class=\"form_btn__modal\" value=\"Oтправить\" type=\"submit\">
                                    <div class=\"custom_chek\">
                                        <div id=\"wb_Checkbox4\">
                                            <input type=\"checkbox\" id=\"Checkbox4\" name=\"Условия договора и политики конфиденциальности\" value=\"Приняты\" checked><label for=\"Checkbox4\"></label>
                                        </div>
                                        <p>Я согласен на обработку моих персональных данных в соответствии с <a href=\"./privacy.html\">Условиями</a></p>
                                    </div>

                                </div>





                                <input type=\"hidden\" name=\"project_name\" value=\"Заполнена форма на сайте POSCLUB.RU\">
                                <input type=\"hidden\" name=\"admin_email\" value=\"info@delosait.ru\">
                                <input type=\"hidden\" name=\"form_subject\" value=\"Сообщение с формы Задать вопрос\">


                            </form>
                            <div id=\"success2\">
                                <div class=\"text_success\"> Ваша заявка<br>успешно отправлена!</div>


                            </div>

                        </div>
                        <div class=\"col-sm-12 col-md-4 d-flex graypart\">
                            <div class=\"mc-wrp\">
                                <div class=\"modal-contacts\">
                                    <div>
                                        <div class=\"modal-contacts__heading\">Также мы всегда
                                            на&nbsp;связи по нашим
                                            обычным контактам:</div>
                                        <div class=\"modal-contacts__contacts\">


                                            <a href=\"8(800)2000 600\"> 8(800)2000 600</a>
                                            <a href=\"mailto:info@sash-oil.ru\"> info@sash-oil.ru</a>
                                        </div>
                                        <a class=\"modal-contacts__bottom\" href=\"/contacts.html\">Контакты</a>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>



                </div>

            </div>
        </div>
    </div>", "W:\\domains\\sash.loc/themes/sash/partials/footer.htm", "");
    }
    
    public function checkSecurity()
    {
        static $tags = array();
        static $filters = array();
        static $functions = array();

        try {
            $this->sandbox->checkSecurity(
                [],
                [],
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
