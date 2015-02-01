$(document).on('ready', function() {
	openComment()
})

function openComment() {
  $('[data-sentence-link]').on('click', function(e){
    var sentence_id = $(this).data('sentence-link')
    fetchPopup($(this).data('sentence-link'), function(template){
      $('#popup')[0].innerHTML = template
      listenForComment()
      popup_open()
      openComment()
    })
  })
}
