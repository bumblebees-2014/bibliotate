$(document).on('page:change', function() {
	$(".li_link").on('click',function(e){
		e.preventDefault();
		classChange($(this))
		currentCard = $(this).parents("div").children('.class_info')
		hideAllCards(currentCard.children())
		var boxNumber = $(this).data().number
		currentCard.children()[boxNumber].style.display = "block"
	})

	var removeDisplay = function(objectFromCard) {
	  objectFromCard.style.display = "none"
	}
	var hideAllCards = function(cards) {
	var mappedArray = $.map(cards, function(value, index) {
	    return [value];
	});
	mappedArray.forEach(removeDisplay)
	}
	var classChange = function(object){
		$(object).siblings().removeClass('pure-menu-selected')
		$(object).addClass("pure-menu-selected")
	} 

});
