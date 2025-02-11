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
    
});