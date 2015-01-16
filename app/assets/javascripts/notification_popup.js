$(document).on('page:change', function() {
  if(document.getElementById("notifications_new")){
    var noteName = document.getElementById("notifications_new")
  } else {
    var noteName = document.getElementById("notifications")
  };

  $(noteName).hover(function(e) {
    e.preventDefault()
    updateStatus()
    var noteList = document.getElementById("notification_list")
    if (e.type == "mouseenter") {
      noteList.style.display="block"
      console.log("one");   
      } else { 
        noteList.style.display="none"
        console.log("two");   
      }
    });

  function updateStatus(argument) {
    console.log("fireupdate")
  //   $.ajax({
  //     url: '/notifications',
  //     type: 'POST',
  //   })
  //   .success(function() {

  //   });
  // }
}
})

