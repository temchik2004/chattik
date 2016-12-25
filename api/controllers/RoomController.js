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

      res.json(room);

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

      Room.getAll(function (err,rooms) {

        return res.view('room/show',{
          room: room,
          rooms: rooms
        });
      });
    });
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

