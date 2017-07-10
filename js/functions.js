// Misc
$(document).ready( function() {
	$('header .settings, .card.global-settings .dismiss').click( function() {
		$('.card.global-settings').toggle("drop");
	});
	$('header .tools .search, .card.search .dismiss').click( function() {
		$('.card.search').toggle("drop");
	});
	$('header .tools .help, .card.help .dismiss').click( function() {
		$('.card.help').toggle("drop");
	});

	$('.dismissable .dismiss').click( function() {
		$(this).parents('.dismissable').remove();
	});

	$('.raids .toolbar .clear').click( function() {
		$('.raids .collection-table-items .collection-table-item').remove();
	});

	$('ul.tabs').tabs();

	$('.tooltipped').tooltip({
	    	delay: 50,
	    	position: bottom

	 });
});

// Grid 
$(document).ready( function() {
	var pckry = new Packery('.grid', {
		columnWidth: '.grid-sizer',
		gutter: '.gutter-sizer',
		itemSelector: '.grid-item',
		percentPosition: true
	});

	$('.grid-item .header .settings-toggle').click( function() {
		$(this).parents('.card').children('.raid-settings').toggle("blind", function() {
			pckry.shiftLayout();
		});
	});
	$('.grid-item .dismiss').click( function() {
		$(this).parents('.raid').remove().delay(0,  function() {
			pckry.shiftLayout();
		});
	});

	pckry.getItemElements().forEach( function(itemElem) {
		var draggie = new Draggabilly(itemElem, {
			handle: '.handle'
		});
		pckry.bindDraggabillyEvents(draggie);
	});

	$('.raid .save').click(function() {
		var gridSize = $(this).parent().prev().find('.size-select option:selected').val();

		$(this).parents('.raid').removeClass('small medium large xlarge').addClass(gridSize).delay(0, function() {
			pckry.layout();
		});
	});
});

