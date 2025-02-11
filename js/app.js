$(document).ready(function() {
    const activeClass = "active";

    $(".animais .tab-menu a").first().addClass(activeClass);
    $(".animais .item").first().addClass(activeClass);

    $(".animais .tab-menu a").click(function(event) {
        event.preventDefault();
        const itemId = $(this).attr("href");

        $(".animais .tab-menu a, .animais .item").removeClass(activeClass);
        $(this).addClass(activeClass);
        $(itemId).addClass(activeClass);
    });

    $(".florestas .tab-menu a").first().addClass(activeClass);
    $(".florestas .item").first().addClass(activeClass);

    $(".florestas .tab-menu a").click(function(event) {
        event.preventDefault();
        const itemId = $(this).attr("href");

        $(".florestas .tab-menu a, .florestas .item").removeClass(activeClass);
        $(this).addClass(activeClass);
        $(itemId).addClass(activeClass);
    });
});