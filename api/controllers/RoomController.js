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
    return res.json({
      todo: 'newRoom() is not implemented yet!'
    });
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
   * `RoomController.hideRoom()`
   */
  hideRoom: function (req, res) {
    return res.json({
      todo: 'hideRoom() is not implemented yet!'
    });
  }
};

