/**
 * ChatController
 *
 * @description :: Server-side logic for managing chats
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {



  /**
   * `ChatController.newMessage()`
   */
  newMessage: function (req, res) {
    if(!req.param('message')) return res.redirect('/room/'+req.param('id'));

    User.findOne({id: req.session.me}).exec(function (err,user) {
      if(err) return res.negotiate(err);

      if(!user) return res.redirect('/');

      Room.findOne({id: req.param('id')}).exec(function (err,room) {
          if (err) return res.negotiate(err);

          Chat.new({
            message: req.param('message'),
            user: user,
            room: room
          },function (err,message) {
            if(err) return res.negotiate(err);
            sails.sockets.broadcast(room.id, 'mess', { room: room.id, greeting: 'Hola!' });

            return res.redirect('/room/'+req.param('id'))
          });
      });
    });
  },


  /**
   * `ChatController.editMessage()`
   */
  editMessage: function (req, res) {
    return res.json({
      todo: 'editMessage() is not implemented yet!'
    });
  },


  /**
   * `ChatController.hideMessage()`
   */
  hideMessage: function (req, res) {
    return res.json({
      todo: 'hideMessage() is not implemented yet!'
    });
  }
};

