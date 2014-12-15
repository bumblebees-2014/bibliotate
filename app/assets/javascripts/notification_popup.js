$(document).on('page:change', function() {
  $(".pure-menu-children").on("hover", function(e) {
    if (e.type == "mouseenter") {
      console.log("one");   
      // $.ajax({
      //   url: '/notifications',
      //   type: 'POST',
      // })
      // .success(function() {

      // });
    }
    else { 
      console.log("two");   
    }
  });
})