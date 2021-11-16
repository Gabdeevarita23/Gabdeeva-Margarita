//скролл страницы с подсвечиванием навигации
$(document).ready(function(){
                  
$(window).scroll(() => {
    let scrollDistance = $(window).scrollTop();
    
    $(".selection").each((i, el) => {
        
    if ($(el).offset().top - $("nav").outerHeight() <= scrollDistance){
    $("nav a").each ((i, el) => {  
    if ($(el).hasClass("active")){
        $(el).removeClass("active");
    }
    });
$('nav li:eq('+ i +')').find ('a').addClass('active');
    }
 });
});   
}); 
//плавный скролл
$('a[href^="#"]').click(function(){ 
    let valHref = $(this).attr("href");
    $('html,body').animate({scrollTop: $(valHref).offset().top + "px"})
});
//анимация фото с задержкой
let options = {threshold: {0.5}};
let elements = $('.img');
let observer = new InteractionObserver (onEntry, options);
elements.each ((i, el)=> {
    observer.observe(el);  
});
function onEntry (entry){
    entry.forEach(change => {
        if (change.isInteraction){
            change.target.classList.add('show-animationimg')
        }
    });
}
//анимация текста с задержкой
let options = {threshold: {0.8}};
let observer = new InteractionObserver (onEntry, options);
let elements = $('.element-animation');
elements.each ((i, el)=> {
    observer.observe(el);  
});
function onEntry (entry){
    entry.forEach(change => {
        if (change.isInteraction){
            change.target.classList.add('show-animation')
        }
    });
}
//анимация чисел статистики (span1 -  расположены цифры. ThousandSeparator - это символ, который будет разделять тысячи. Duration - продолжительность анимации. )
/*$(document).ready(function(){
    $('span1').spincrement({
        thousandSeparator: "",
        duration: 1200
    });
});
*/
$(document).ready(function () {
    var show = true;
    var countbox = ".benefits__inner";
    $(window).on("scroll load resize", function () {
        if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
        var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
        var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
        var w_height = $(window).height(); // Высота окна браузера
        var d_height = $(document).height(); // Высота всего документа
        var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
        if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
            $('span1').css('opacity', '1');
            $('span1').spincrement({
                thousandSeparator: "",
                duration: 1200
            });
            show = false;
        }
    });
});
//калькулятор
public class Calc{
 public static void main (string args[]){   
let type = prompt ("Тип сайта");
console.log(type);
let type = prompt ("Дизайн");
console.log(type);
let type = prompt ("Адаптивность");
console.log(type);
}
}
/*отправка формы*/
$(document).ready(function () {
$('form').submit(function(event){
    event.preventDefault();
    $.ajax({
        type: "POST",
        url: "php/mail.php",
        data: $(this).servialize()
    }).done(function(){
        $(this).find ("input").val ("");
        alert("Успешно отправлено!");
        $("form").trigger("reset");
    });
            return false;
});
});                
/*<div class="uCalc_378702"></div><script> var widgetOptions378702 = { bg_color: "transparent" }; (function() { var a = document.createElement("script"), h = "head"; a.async = true; a.src = (document.location.protocol == "https:" ? "https:" : "http:") + "//ucalc.pro/api/widget.js?id=378702&t="+Math.floor(new Date()/18e5); document.getElementsByTagName(h)[0].appendChild(a) })();</script>*/
