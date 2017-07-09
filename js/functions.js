$(document).ready(function() {
	$("header .settings, .card.global-settings .dismiss").click(function() {
		$(".card.global-settings").toggle();
	});
	$("header .tools .search, .card.search .dismiss").click(function() {
		$(".card.search").toggle();
	});
	$("header .tools .help, .card.help .dismiss").click(function() {
		$(".card.help").toggle();
	});

	$(".dismissable .dismiss").click(function() {
		$(this).parents(".dismissable").remove();
	});

	$(".raids .toolbar .clear").click(function() {
		$(".raids .collection-table-items .collection-table-item").remove();
	});

	$(".settings-toggle").click(function() {
		$(this).parents(".card").children(".raid-settings").toggle();
	});

	var pckry = new Packery('.grid', {
		itemSelector: '.grid-item',
		percentPosition: true,
		columnWidth: 25,
		rowHeight: 25
	});

	pckry.getItemElements().forEach(function(itemElem) {
		var draggie = new Draggabilly(itemElem);
		pckry.bindDraggabillyEvents(draggie);
	});
});
