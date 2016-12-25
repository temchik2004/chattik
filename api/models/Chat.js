/**
 * Chat.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    message : {
      type: 'string',
      required: true
    },

    user : {
      model: 'user'
    },

    hide : {
      type: 'boolean',
      required: true,
      defaultsTo: false
    },
    room: {
      model: 'room'
    }
  },
  /**
   * Create a new message
   *
   * @param  {Object}   inputs
   *                     • text     {String}
   *                     • user     {User}
   *                     • room     {Room}
   * @param  {Function} callback
   */

  new: function (inputs , callback) {
    Chat.create({
      message:    inputs.message,
      user:       inputs.user,
      room:       inputs.room
    }).exec(callback);
  }
};

