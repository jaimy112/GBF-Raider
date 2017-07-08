$(document).ready(function() {
    	$("header .settings, .card.settings .dismiss").click(function() {
        		$(".card.settings").toggle();
    	});
    	$("header .tools .search, .card.search .dismiss").click(function() {
        		$(".card.search").toggle();
    	});
    	$("header .tools .help, .card.help .dismiss").click(function() {
        		$(".card.help").toggle();
    	});

    	$(".dismissable .dismiss").click(function() {
        		$(this).parent(".dismissable").remove();
    	});

    	$(".raids .toolbar .clear").click(function() {
    		$(".raids .collection-table-items .collection-table-item").remove();
    	})
});
