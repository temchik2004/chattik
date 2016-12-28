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
  function addMessage(userEmail, message) {
    $('#wrapperMessages').append("<div class=\"message\"><div class=\"username_message\"> " + userEmail + " : " + message.createdAt + "</div> <div class=\"message\">" + message.message + " </div> </div>");
  }
  io.sails.url = 'http://localhost:1337';
  io.socket.on('connectedToRoom', function (data) {
    console.log(data);
  });
  io.socket.on('newMessage', function (data) {
    addMessage(data.user, data.message);
    wrapperMessage.scrollTop = wrapperMessage.scrollHeight;
  });
  if(typeof ROOMID != "undefined"){
    io.socket.get('/room/'+ROOMID+'/subs');

    $('#formNewMessage').submit(function () {
      var textMessage = $('input[name="message"]').val();
      io.socket.post('/socket/chat/' + ROOMID + '/new',{message: textMessage});
      $('input[name="message"]').val('');
      return false;
    });

  }
});
