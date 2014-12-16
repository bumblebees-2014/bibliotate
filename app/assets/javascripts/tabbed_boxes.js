$(document).on('page:change', function() {
	$(".stories_link").on('click',function(e){
		e.preventDefault();
		classChange($(this))
		currentCard = $(this).parents("div").children('.class_info')
		hideAllCards(currentCard.children())
		currentCard.children()[1].style.display = "block"
	})

	$(".student_roster_link").on('click',function(e){
		e.preventDefault();
		classChange($(this))
		currentCard = $(this).parents("div").children('.class_info')
		hideAllCards(currentCard.children())	
		currentCard.children()[0].style.display = "block"
	})
	$(".recent_comments_link").on('click',function(e){
		e.preventDefault();
		classChange($(this))
		currentCard = $(this).parents("div").children('.class_info')
		hideAllCards(currentCard.children())
		currentCard.children()[2].style.display = "block"
	})
	$(".commented_sentences_link").on('click',function(e){
		e.preventDefault();
		classChange($(this))
		currentCard = $(this).parents("div").children('.class_info')
		hideAllCards(currentCard.children())
		currentCard.children()[1].style.display = "block"
	})
	$(".link_to_recent_comments").on('click',function(e){
		e.preventDefault();
		classChange($(this))
		currentCard = $(this).parents("div").children('.class_info')
		hideAllCards(currentCard.children())
		currentCard.children()[0].style.display = "block"
	})
	$(".frequent_commentors_link").on('click',function(e){
		e.preventDefault();
		classChange($(this))
		currentCard = $(this).parents("div").children('.class_info')
		hideAllCards(currentCard.children())
		currentCard.children()[2].style.display = "block"
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
