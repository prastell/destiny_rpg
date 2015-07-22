var current_page = 0;
$(document).ready(function () {
    load_page(0);
    $('#response').on('click', '.choice', function () {
        var target = $(this).data('target');
        load_page(target);
    });
});

function load_page(id) {
    // Fetch JSON for page data associated with given ID
    var page_data = PAGES[id];

    clear_page();
// Run function to set page background. Doesn't work yet.
    set_page_background(page_data.background);
    set_page_text(page_data.text);
    if (page_data.type === 'choice') {
        for (var choice in page_data.choices) {
            var choice_data = page_data.choices[choice];
            add_choice(choice_data.text, choice_data.target);
        }
    }
}
    
    

function set_page_text(text) {
    $("#page_text").append("<p>" + text + "</p>");
}

function add_choice(text, target) {
    $("#response").prepend("<button class=choice data-target=" + target + ">" + text + "</button>");
}

// Definition of function to set page background. Not sure if this works yet.
function set_page_background(background) {
    $("#bgvid").append("<source src='" + background + "' />")
}

function clear_page() {
    $("#page_text").empty();
    $("#response").empty();
    $("#bgvid").empty();
}

// Page data
var PAGES = [{
    'text': 'Choose a class.',
        'type': 'choice',
        'choices': [{
        'text': 'Warlock',
            'target': 1
    }, {
        'text': 'Titan',
            'target': 2
    }, {
        'text': 'Hunter',
            'target': 3
    }, {
        'text': 'You don\'t need to know that.',
            'target': 4
    }]
}, {
    'text': 'Ah, a warlock? Fascinating!',
        'type': 'choice',
    'background': 'https://www.bungie.net/pubstatic/StaticPages/TheTakenKing/Images/subclasses/subclass-warlock.webm',
        'choices': [{
        'text': 'Yes. Ask me that again.',
            'target': 0
    }]
}, {
    'text': 'Ah, the rural life on the farm, punching bros?',
        'type': 'choice',
        'background': 'https://www.bungie.net/pubstatic/StaticPages/TheTakenKing/Images/subclasses/subclass-titan.webm',
        'choices': [{
        'text': 'Yes. Ask me that again.',
            'target': 0
    }]
}, {
    'text': 'A merchant\'s child? You\'re quite the young aristocrat, aren\'t you? Ya, hunter!',
        'type': 'choice',
        'background': 'https://www.bungie.net/pubstatic/StaticPages/TheTakenKing/Images/subclasses/subclass-hunter.webm',
        'choices': [{
        'text': 'Yes. Ask me that again.',
            'target': 0
    }]
}, {
    'text': 'Ah, a shady type. Fine, you don\'t have to tell me.',
        'type': 'choice',
        'choices': [{
        'text': 'Good. Ask me that again.',
            'target': 0
    }]
}];