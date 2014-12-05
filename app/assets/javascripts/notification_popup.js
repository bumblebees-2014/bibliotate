$(document).on('page:change', function() {
  $(".pure-menu-children").on('click', function() {
    console.log($(this))
    console.log("fire")
    $(".dropdown-menu").toggle()
    $.ajax({
      url: '/notifications',
      type: 'POST',
    })
    .success(function() {
      console.log("success");
    });
  })
});