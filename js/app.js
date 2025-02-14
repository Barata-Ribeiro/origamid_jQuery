$(document).ready(function () {
    const ACTIVE_CLASS = "active";

    // Mudar tag ao click
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

    // Scroll suave para link interno
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

    // Scroll suave para o topo
    $(".logo").click(function (e) {
        e.preventDefault();
        $("html, body").animate(
            {
                scrollTop: 0
            },
            500
        );
    });

    // Mudar para active o menu de acordo com a área
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

    // Botão do menu mobile
    $(".mobile-btn").click(function () {
        $(this).toggleClass(ACTIVE_CLASS);
        $(".mobile-menu").toggleClass(ACTIVE_CLASS);
    });

    // Slider
    function slider(sliderName, velocidade) {
        let sliderClass = `.${sliderName}`,
            rotate = setInterval(rotateSlide, velocidade);

        $(`${sliderClass} > :first`).addClass(ACTIVE_CLASS);
        
        $(sliderClass).hover(function() {
            clearInterval(rotate);
        }, function() {
            rotate = setInterval(rotateSlide, velocidade);
        });
        
        function rotateSlide() {
            let activeSlide = $(`${sliderClass} > .${ACTIVE_CLASS}`),
                nextSlide = activeSlide.next();

            if (nextSlide.length === 0) {
                nextSlide = $(`${sliderClass} > :first`);
            }

            activeSlide.removeClass(ACTIVE_CLASS);
            nextSlide.addClass(ACTIVE_CLASS);
        }
    }
    
    slider("introducao", 2000);
});
