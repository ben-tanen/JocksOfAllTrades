$(document).ready(function() {
    $('.nav li').click(function() {
        var divs = ["services", "testimonials", "about-us", "contact"]

        $('.nav li').removeClass('active');
        $(this).addClass('active');

        console.log(divs[$(this).index()]);
        $('html, body').animate({
            scrollTop: $("#" + divs[$(this).index()]).offset().top
        }, $(this).index()*100 + 500);
    });

    userguide_tooltip = new jBox('Tooltip',{
        attach: $('.service-title'),
        content: $('.service-info'),
        position: {
            x: 'center',
            y: 'bottom'
        },
    });
});