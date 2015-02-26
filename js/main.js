var tooltip_content = {
    'babysitting': {
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 
        price: 15
    }, 'car': {
        description: 'this is for car washing',
        price: 15
    }, 'chef': {
        description: 'this is for chef',
        price: 15
    }, 'downsize': {
        description: 'this is for ebay',
        price: 15
    }, 'gardening': {
        description: 'this is for gardening',
        price: 15
    }, 'grocery': {
        description: 'this is for grocery',
        price: 15
    }, 'guitar': {
        description: 'this is for guitar',
        price: 15
    }, 'house': {
        description: 'this is for house cleaning',
        price: 15
    }, 'housesitting': {
        description: 'this is for housesitting',
        price: 15
    }, 'laundry': {
        description: 'this is for laundry',
        price: 15
    }, 'lifeguard': {
        description: 'this is for lifeguard',
        price: 15
    }, 'moving': {
        description: 'this is for moving',
        price: 15
    }, 'server': {
        description: 'this is for server / bartender',
        price: 15
    }, 'personal': {
        description: 'this is for personal assistant',
        price: 15
    }, 'fitness': {
        description: 'this is for fitness training',
        price: 15
    }, 'pet': {
        description: 'this is for pet walking',
        price: 15
    }, 'pool': {
        description: 'this is for pool cleaning',
        price: 15
    }, 'sports': {
        description: 'this is for sports',
        price: 15
    }, 'tech': {
        description: 'this is for tech',
        price: 15
    }, 'tutoring': {
        description: 'this is for tutoring',
        price: 15
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

            var content_out = '<p id="tooltip_text">' + description + '</p><p id="tooltip_text"><b>Price:</b> $' + price + '.00</p>'
            this.setContent(content_out);
        },
        position: {
            x: 'center',
            y: 'bottom'
        },
    });
});