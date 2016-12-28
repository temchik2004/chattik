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

  io.sails.url = 'http://localhost:1337';
  io.socket.on('connectedToRoom', function (data) {
    console.log(data);
  });
  io.socket.on('mess', function (data) {
    console.log(data);
  });
  if(location.pathname.search('/room')===0){
    io.socket.get('/room/'+location.pathname.slice(-1)+'/subs', function (resData) {
      console.log(resData); // => {id:9, name: 'Timmy Mendez'}
    });
  }
});
