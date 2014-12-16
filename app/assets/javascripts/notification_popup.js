$(document).on('page:change', function() {
// pure-menu pure-menu-open pure-menu-horizontal

YUI({
  classNamePrefix: 'pure'
}).use('gallery-sm-menu', function (Y) {

  var horizontalMenu = new Y.Menu({
    container         : '.pure-menu',
    sourceNode        : '#pure-menu-items',
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

var getStatus = function(){
  var pureMenuItem = document.getElementsByClassName("pure-menu pure-menu-open pure-menu-horizontal")
  var statusItem = pureMenuItem.item()
  if (statusItem.dataset.statusItem == "true") {
    return true    
  } else {
    return false  
  }

}