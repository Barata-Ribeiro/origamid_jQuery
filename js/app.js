$(document).ready(function() {
    
    $("[data-group]").each(function() {
        const $allTargets = $(this).find("[data-target]"),
              $allClicks = $(this).find("[data-click]"),
              activeClass = "active";
        
        $allTargets.first().addClass(activeClass);
        $allClicks.first().addClass(activeClass);
        
        $allClicks.click(function(event) {
            event.preventDefault();
            
            const id = $(this).data("click"),
                  $target = $(`[data-target=${id}`);
            
            $allClicks.removeClass(activeClass);
            $allTargets.removeClass(activeClass);
            
            $target.addClass(activeClass);
            $(this).addClass(activeClass);
        });
    });
    
    $(".menu-nav a[href^='#']").click(function(event){
        event.preventDefault();
        
        const id = $(this).attr("href"),
              targetOffset = $(id).offset().top,
              menuHeight = $(".menu").innerHeight();
        
        $("html, body").animate({
            scrollTop: targetOffset - menuHeight
        }, 500);
    });
    
    $(".logo").click(function(event){
        event.preventDefault();
        
        $("html, body").animate({
            scrollTop: 0
        }, 500);
    });
    
});