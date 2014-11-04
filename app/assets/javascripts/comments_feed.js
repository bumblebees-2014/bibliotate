$(document).on('page:change', function() {
	pollCards()
})

// Data card should be the URL and value of the data-card attribute
function pollCards() {
	updateCards()
	setTimeout(pollCards, 10000)
}

function updateCards() {
	var cards = $("[data-card]")
	for(var i = 0; i < cards.length; i++) {
		var storyId = cards[i].dataset.story
		fetchPartial(cards[i].dataset.card, storyId, function(card, template){
			$(card).replaceWith(template)
			openComment()
		}.bind(this, cards[i]))
	}
}

function fetchPartial(url, id, callback) {
	$.ajax({
	    url: '/stories/' + id + '/' + url,
	  })
	  .success(callback)
}
