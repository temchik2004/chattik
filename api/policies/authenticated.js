module.exports = function authenticated (req, res, next) {

  // If the requesting user is not logged in,
  // No reason to continue - we can go ahead and bail out now.
  if (!req.session.me) {
    return res.redirect('/login');
  }

  User.findOne(req.session.me).exec(function (err,user) {

    // Unexpected error occurred-- use the app's default error (500) handler.
    //
    // > We do this because this should never happen, and if it does, it means there
    // > is probably something wrong with our database, and we want to know about it!)
    if (err) { return res.serverError(err); }

    // No "write" permission record exists linking this user to this folder.
    // Maybe they got removed from it?  Or maybe they never had permission in the first place...
    if (!user) {
      return res.redirect('/login');
    }

    // If we made it all the way down here, looks like everything's ok, so we'll let the user through.
    // (from here, the next policy or the controller action will run)
    return next();


  });

};
