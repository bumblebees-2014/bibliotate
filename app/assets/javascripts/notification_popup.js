$(document).on('page:change', function() {
  YUI({

    classNamePrefix: 'pure'
  }).use('gallery-sm-menu', function (Y) {

    var horizontalMenu = new Y.Menu({
      container         : '.pure-menu',
      sourceNode        : '#std-menu-items',
      orientation       : 'horizontal',
      hideOnOutsideClick: false,
      hideOnClick       : false
    });

    horizontalMenu.render();
    horizontalMenu.show();

  });
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