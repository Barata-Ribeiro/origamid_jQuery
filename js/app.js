$(document).ready(function () {
    const ACTIVE_CLASS = "active";

    $("[data-group]").each(function () {
        const $allTargets = $(this).find("[data-target]"),
            $allClicks = $(this).find("[data-click]");

        $allTargets.first().addClass(ACTIVE_CLASS);
        $allClicks.first().addClass(ACTIVE_CLASS);

        $allClicks.click(function (event) {
            event.preventDefault();

            const id = $(this).data("click"),
                $target = $(`[data-target=${id}`);

            $allClicks.removeClass(ACTIVE_CLASS);
            $allTargets.removeClass(ACTIVE_CLASS);

            $target.addClass(ACTIVE_CLASS);
            $(this).addClass(ACTIVE_CLASS);
        });
    });

    $(".menu-nav a[href^='#']").click(function (event) {
        event.preventDefault();

        const id = $(this).attr("href"),
            targetOffset = $(id).offset().top,
            menuHeight = $(".menu").innerHeight();

        $("html, body").animate(
            {
                scrollTop: targetOffset - menuHeight
            },
            500
        );
    });

    $(".logo").click(function (e) {
        e.preventDefault();
        $("html, body").animate(
            {
                scrollTop: 0
            },
            500
        );
    });

    $("section").each(function () {
        const height = $(this).height(),
            offsetTop = $(this).offset().top,
            menuHeight = $(".menu").innerHeight(),
            id = $(this).attr("id"),
            $itemMenu = $(`a[href^='#${id}']`);

        $(window).scroll(function () {
            const scrollTop = $(this).scrollTop();

            if (offsetTop - menuHeight < scrollTop && offsetTop + height - menuHeight > scrollTop) {
                $itemMenu.addClass(ACTIVE_CLASS);
            } else {
                $itemMenu.removeClass(ACTIVE_CLASS);
            }
        });
    });
    
    $(".mobile-btn").click(function() {
        $(this).toggleClass(ACTIVE_CLASS);
        $(".mobile-menu").toggleClass(ACTIVE_CLASS);
    });
});
