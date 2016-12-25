$(document).ready(function () {

  $('#list_rooms .room').on('click', function () {
    if (location.pathname !== '/room/' + $(this).data('room_id')) {
      location.pathname = '/room/' + $(this).data('room_id');
    }
  });

});
