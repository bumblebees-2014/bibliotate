$( document ).ready(function() {
  $(".pure-menu-children").hover( function() {
      console.log("ok");
    $.ajax({
      url: '/notifications',
      type: 'POST',
    })
    .success(function() {
      console.log("success");
    });
  })
});
