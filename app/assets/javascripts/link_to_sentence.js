$(document).on('page:change', function() {
	openComment()
})

function openComment() {
  $('[data-sentence-link]').on('click', function(e){
    var sentence_id = $(this).data('sentence-link')
    fetchPopup($(this).data('sentence-link'), function(template){
      $('body').after(template)
      listenForComment()
      popupClose()
      openComment()
    })
  })
}
