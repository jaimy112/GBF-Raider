$(document).ready(function() {
	$("header .settings, .card.global-settings .dismiss").click(function() {
		$(".card.global-settings").toggle("drop");
	});
	$("header .tools .search, .card.search .dismiss").click(function() {
		$(".card.search").toggle("drop");
	});
	$("header .tools .help, .card.help .dismiss").click(function() {
		$(".card.help").toggle("drop");
	});

	$(".dismissable .dismiss").click(function() {
		$(this).parents(".dismissable").remove();
	});

	$(".raids .toolbar .clear").click(function() {
		$(".raids .collection-table-items .collection-table-item").remove();
	});

	$(".settings-toggle").click(function() {
		$(this).parents(".card").children(".raid-settings").toggle("blind");
	});

	$('ul.tabs').tabs();
	
	var pckry = new Packery('.grid', {
		columnWidth: '.grid-sizer',
		gutter: '.gutter-sizer',
		itemSelector: '.grid-item',
		percentPosition: true
		
	});

	pckry.getItemElements().forEach(function(itemElem) {
		var draggie = new Draggabilly(itemElem, {
			handle: '.handle'
		});
		pckry.bindDraggabillyEvents(draggie);
	});

	$('.tooltipped').tooltip({
	    	delay: 50,
	    	position: bottom

	 });
     
});
