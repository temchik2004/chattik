/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

md5 = require('js-md5');

module.exports = {

  attributes: {

    email: {
      type: 'email',
      required: true,
      unique: true
    },

    password: {
      type: 'string',
      required: true
    },

    online: {
      type: 'datetime',
      required: true,
      defaultsTo: function () {
        return new Date();
      }
    },

    hide: {
      type: 'boolean',
      required: true,
      defaultsTo: false
    },

    rooms: {
      collection: "room",
      via: 'users',
      dominant: true
    },

    chats: {
      collection: "chat",
      via: 'users',
      dominant: true
    }

  },

  /**
   * Create a new user using the provided inputs,
   * but encrypt the password first.
   *
   * @param  {Object}   inputs
   *                     • email    {String}
   *                     • password {String}
   * @param  {Function} callback
   */

  register: function (inputs , callback) {
    User.create({
      email:    inputs.email,
      password: md5(inputs.pass)
    }).exec(callback);
  },



  /**
   * Check validness of a login using the provided inputs.
   * But encrypt the password first.
   *
   * @param  {Object}   inputs
   *                     • email    {String}
   *                     • password {String}
   * @param  {Function} cb
   */

  attemptLogin: function (inputs, cb) {
    // Create a user
    User.findOne({
      email: inputs.email,
      password: md5(inputs.password)
    })
      .exec(cb);
  },

  /**
   * Check validness of a login using the provided inputs.
   * But encrypt the password first.
   *
   * @param  {Function} cb
   */

  getAll: function (cb) {
    // Find all users
    User.find().exec(cb);
  }
};

