module.exports = function notAuthenticated (req, res, next) {

  if (req.session.me) {
    return res.redirect('/dashboard');
  }

    return next();


};
