/**
 * RoomController
 *
 * @description :: Server-side logic for managing rooms
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {



  /**
   * `RoomController.newRoom()`
   */
  newRoom: function (req, res) {
    User.getAll(function(err, users){
      if (err) return res.negotiate(err);


      return res.view('room/new',{
        users: users
      });
    });
  },

  /**
   * `RoomController.createRoom()`
   */
  createRoom: function (req, res) {
    Room.create({
      name: req.param('new_name'),
      users: req.param('users')
    },function (err,room) {
      if(err) return res.negotiate(err);


      if (req.wantsJSON) {
        return res.json(room);
      }

      return res.redirect('/dashboard');

    })
  },


  /**
   * `RoomController.editRoom()`
   */
  editRoom: function (req, res) {
    return res.json({
      todo: 'editRoom() is not implemented yet!'
    });
  },


  /**
   * `RoomController.viewRoom()`
   */
  showRoom: function (req, res) {
    Room.findOne(req.param('id'))
      .populateAll()
      .exec(function (err,room) {
      if (err) return res.negotiate(err);

      User.findOne(req.session.me).populate('rooms').exec(function (err,user) {

        return res.view('room/show',{
          room: room,
          user: user
        });
      });
    });
  },

  subscribeRoom: function(req, res) {
    if (!req.isSocket) {
      return res.badRequest();
    }

    Room.findOne(req.param('id'))
      .exec(function (err,room) {
        if (err) return res.negotiate(err);

        sails.sockets.join(req, room.id, function(err) {
          if (err) {
            return res.serverError(err);
          }

          return res.json({
            message: 'Subscribed to a fun room called "'+room.id+'"!'
          });
        });

      });
    // return res.badRequest();
  },

  /**
   * `RoomController.hideRoom()`
   */
  hideRoom: function (req, res) {
    return res.json({
      todo: 'hideRoom() is not implemented yet!'
    });
  }
};

