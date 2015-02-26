var tooltip_content = {
    'babysitting': {
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 
        price: '$15.00/hr ($18 for 2, $20 for 3+)'
    }, 'car': {
        description: 'this is for car washing',
        price: '$12.00/hr'
    }, 'chef': {
        description: 'this is for chef',
        price: '$12.00/hr'
    }, 'downsize': {
        description: 'this is for ebay',
        price: '$15.00/hr ($10.00 for just assistance)'
    }, 'gardening': {
        description: 'this is for gardening',
        price: '$15.00/hr'
    }, 'grocery': {
        description: 'this is for grocery',
        price: '$12.00/hr'
    }, 'guitar': {
        description: 'this is for guitar',
        price: '$20.00/hr'
    }, 'house': {
        description: 'this is for house cleaning',
        price: '$3.00/hr'
    }, 'housesitting': {
        description: 'this is for housesitting',
        price: '$12.00/hr'
    }, 'laundry': {
        description: 'this is for laundry',
        price: '$12.00/hr'
    }, 'lifeguard': {
        description: 'this is for lifeguard',
        price: '$12.00/hr (plus $3 per 5 kids over 10)'
    }, 'moving': {
        description: 'this is for moving',
        price: '$12.00/hr'
    }, 'server': {
        description: 'this is for server / bartender',
        price: '$15.00/hr'
    }, 'personal': {
        description: 'this is for personal assistant',
        price: 'Rates Vary'
    }, 'fitness': {
        description: 'this is for fitness training',
        price: '$20.00/hr'
    }, 'pet': {
        description: 'this is for pet walking',
        price: '$12.00/hr (Plus $3 per pet)'
    }, 'pool': {
        description: 'this is for pool cleaning',
        price: '$12.00/hr'
    }, 'sports': {
        description: 'this is for sports',
        price: '$20.00/hr'
    }, 'tech': {
        description: 'this is for tech',
        price: '$20.00/hr'
    }, 'tutoring': {
        description: 'this is for tutoring',
        price: '$20.00/hr'
    }
}

$(document).ready(function() {
    $('.nav li').click(function() {
        var divs = ["services", "testimonials", "about-us", "contact"]

        console.log(divs[$(this).index()]);
        $('html, body').animate({
            scrollTop: $("#" + divs[$(this).index()]).offset().top
        }, $(this).index()*100 + 500);
    });

    userguide_tooltip = new jBox('Tooltip',{
        attach: $('.service-title'),
        content: "Please wait while the information loads...",
        width: 300,
        onOpen: function() {
            var caller_tag = this.source[0].innerText.split(' ')[0].toLowerCase();

            var description = tooltip_content[caller_tag]['description'];
            var price = tooltip_content[caller_tag]['price'];
            var extra = tooltip_content[caller_tag]['extra'];

            var content_out = '<p id="tooltip_text">' + description + '</p><p id="tooltip_text"><b>Price:</b> ' + price + '</p>';
            this.setContent(content_out);
        },
        position: {
            x: 'center',
            y: 'bottom'
        },
    });
});