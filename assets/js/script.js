$(document).ready(function () {

  var wrapperMessage = document.getElementById("wrapperMessages");
  var allrooms= $('.room');

  allrooms.on('click', function () {
    if (location.pathname !== '/room/' + $(this).data('room_id')) {
      location.pathname = '/room/' + $(this).data('room_id');
    }
  });

  if (wrapperMessage){
    wrapperMessage.scrollTop = wrapperMessage.scrollHeight;

  }
});
