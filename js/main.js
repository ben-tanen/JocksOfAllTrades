$(document).ready(function() {
    $('.nav li').click(function() {
        $('.nav li').removeClass('active');
        $(this).addClass('active');
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