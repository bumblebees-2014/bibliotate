$(document).on('page:change', function() {
  $(".sentence").click(function(event){
    popup_open()
    var sentence = $(this)
    fetchPopup(sentence.data('id'), function(template){
      $('#popup')[0].innerHTML = template
      listenForComment()
      popupClose()
    })
  })
})

// Get comment functions
function fetchPopup(id, callback) {
  $.ajax({
    url: '/comments/' + id,
  })
  .success(callback)
}

// Post route functions
function listenForComment() {
  $(".comment_form").submit(function(e){
    e.preventDefault()
    var sentence_id = $(".comment_form [name=sentence_id]").val()
    $('[data-id=' + sentence_id + ']').addClass('commented')
    submitComment($(this).serialize(), function(data){
      $('#popup')[0].innerHTML = data
      listenForComment()
    })
  })
}

function submitComment(args, callback) {
  $.ajax({
    url: '/comments',
    type: 'POST',
    data: args
  })
  .done(callback)
}


function popupClose() {
  $(document).on('keyup', function(key){
    if(key.keyCode === 27) {
      // $('#popup')[0].style.display = "hidden"
      popup_close()
    }
  })
  $('[data-comment="remove"]').on('click', function(){
    // $('#popup')[0].style.display = "hidden"
    popup_close()
  })
}


var popup_state = 'closed';

$( document ).ready(function() {
  doc_width = $(document).width();
  set_showstory_width();
});

function set_showstory_width()
{
    // var doc_width = $(document).width();
    $('#showstory').width(doc_width);
  }
  
  function set_showstory_height()
  {
    var doc_height = $(window).height();
    $('#showstory').height(doc_height);
    $('#popup').height(doc_height-40);
  }
  
  function popup_open()
  {
    newStoryWidth = doc_width-230+"px"
      $("#showstory").animate({width : newStoryWidth}, '200', function() {
        $("#popup").fadeIn('200', function() {
          var pop = $(this)
        pop.css("z-index", "1");
      })
      popup_state = 'open';
    });
  }
  
  function popup_close()
  {
    $("#showstory").animate({width: doc_width}, 'slow')
      $("#popup").fadeOut('slow', function() {
        $(this).css("z-index", "-1");

    });
    popup_state = 'closed';
  }
  
  function popup_icon_click()
  {
    if(popup_state == 'open')
    {
      popup_close();
      
    } else {

      popup_open();
    }
    
  }
