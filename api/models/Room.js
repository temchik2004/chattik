/**
 * Room.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    name : {
      type: 'string'
      },

    chats : {
      collection: 'chat',
      via: 'room'
    },

    users : {
      collection: 'user',
      via: 'rooms'
    }
  },


  /**
   * Create a new room before find users for adding
   *
   * @param  {Object}   inputs
   *                     • name     {String}
   *                     • users    {Array}
   * @param  {Function} callback
   */

  new: function (inputs , callback) {
    User.find(inputs.users).exec(function (err,users) {
      if (err) return false;

      Room.create({
        name:  inputs.name,
        users: users
      }).exec(callback);

      }

    );
  },

  /**
   * Get all rooms
   *
   * @param  {Function} cb
   */

  getAll: function (cb) {
    // Find all rooms
    Room.find().exec(cb);
  }
};

