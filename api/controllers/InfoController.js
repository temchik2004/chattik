/**
 * InfoController
 *
 * @description :: Server-side logic for managing infoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {



  /**
   * `InfoController.dash()`
   */
  dash: function (req, res) {
    Room.getAll(function (err,rooms) {
      if (err) return res.negotiate(err);

      return res.view('dashboard',{
          rooms: rooms
        }
      )

    });
  }
};

