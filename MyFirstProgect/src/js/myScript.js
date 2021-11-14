//скролл страницы с подсвечиванием навигации
$(document).ready(Function(){
$(window).scroll(()=>{ 
    let scrollDistance = $(window).scrollTop();
    $(".selection").each ((i, el)=>{
    if ($(el).offset().top - $("nav").outerHeight() scrollDistance){
    $("nav a").each ((i, el)=>{  
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
//анимация текста с задержкой
let options = {threshold: {0.8}};
let observer = new InteractionObserver (onEntry, options);
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