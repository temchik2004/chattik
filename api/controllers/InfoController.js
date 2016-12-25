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
    console.log(req.session.me);
    User.findOne(req.session.me).populate('rooms').exec(function (err,user) {
      if (err) return res.negotiate(err);

      return res.view('dashboard',{
          user: user
        }
      )

    });
  }
};

