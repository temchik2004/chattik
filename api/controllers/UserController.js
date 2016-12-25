/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {



  /**
   * `UserController.login()`
   */
  login: function (req, res) {
    return res.json({
      todo: 'login() is not implemented yet!',
      ert: 'asd'
    });
  },


  /**
   * `UserController.logout()`
   */
  logout: function (req, res) {
    return res.json({
      todo: 'logout() is not implemented yet!'
    });
  },


  /**
   * `UserController.signup()`
   */
  signup: function (req, res) {
    User.register({
      email: req.param('email'),
      pass: req.param('password')
    })

  }
};

