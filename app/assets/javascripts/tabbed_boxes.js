$(document).on('page:change', function() {
	$(".stories_link").on('click',function(e){
		e.preventDefault();
		var localId = $(this).data("id") 
		$("ul[data-id="+localId+"] li").removeClass("pure-menu-selected")
		$(this).addClass("pure-menu-selected")
		current_card = document.getElementById("class_info"+localId+"")
		current_card.children[0].style.display = "none"
		current_card.children[1].style.display = "block"
		current_card.children[2].style.display = "none"
	})

	$(".student_roster_link").on('click',function(e){
		e.preventDefault();
		var localId = $(this).data("id") 
		$("ul[data-id="+localId+"] li").removeClass("pure-menu-selected")
		$(this).addClass("pure-menu-selected")
		current_card = document.getElementById("class_info"+localId+"")
		current_card.children[0].style.display = "block"
		current_card.children[1].style.display = "none"
		current_card.children[2].style.display = "none"
	})
	$(".recent_comments_link").on('click',function(e){
		e.preventDefault();
		var localId = $(this).data("id") 
		$("ul[data-id="+localId+"] li").removeClass("pure-menu-selected")
		$(this).addClass("pure-menu-selected")
		current_card = document.getElementById("class_info"+localId+"")
		current_card.children[0].style.display = "none"
		current_card.children[1].style.display = "none"
		current_card.children[2].style.display = "block"
	})
		$(".commented_sentences_link").on('click',function(e){
		e.preventDefault();
		var localId = $(this).data("id") 
		$("ul[data-id="+localId+"] li").removeClass("pure-menu-selected")
		$(this).addClass("pure-menu-selected")
		current_card = document.getElementById("class_info"+localId+"")
		current_card.children[0].style.display = "none"
		current_card.children[1].style.display = "block"
		current_card.children[2].style.display = "none"
	})
		$(".link_to_recent_comments").on('click',function(e){
		e.preventDefault();
		var localId = $(this).data("id") 
		$("ul[data-id="+localId+"] li").removeClass("pure-menu-selected")
		$(this).addClass("pure-menu-selected")
		current_card = document.getElementById("class_info"+localId+"")
		current_card.children[0].style.display = "block"
		current_card.children[1].style.display = "none"
		current_card.children[2].style.display = "none"
	})
		$(".frequent_commentors_link").on('click',function(e){
		e.preventDefault();
		var localId = $(this).data("id") 
		$("ul[data-id="+localId+"] li").removeClass("pure-menu-selected")
		$(this).addClass("pure-menu-selected")
		current_card = document.getElementById("class_info"+localId+"")
		current_card.children[0].style.display = "none"
		current_card.children[1].style.display = "none"
		current_card.children[2].style.display = "block"
	})

	});
