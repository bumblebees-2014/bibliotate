$(document).on('page:change', function() {
  $(".pure-menu-children").on('click', function() {
    console.log($(this))
    $(".dropdown-menu").toggle()
    $.ajax({
      url: '/notifications',
      type: 'POST',
    })
    .success(function() {
      
    });
  })
});