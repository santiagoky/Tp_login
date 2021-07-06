const User = require('./auth.dao');
const jToken = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const SECRET_KEY = 'secretkey123456';

exports.createUser = (req, res, next) => {
  const newUser = {
    name: req.body.name,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password),
    role: req.body.role
  }

  User.create(newUser, (err, user) => {
    if (err && err.code === 11000) return res.status(409).send('Este email ya existe');
    if (err) return res.status(500).send(err);
    const expiresIn = 24 * 60 * 60;
    const accessToken = jToken.sign({ id: user.id },
      SECRET_KEY, {
        expiresIn: expiresIn
      });
    const dataUser = {
      id: user._id,
      name: user.name,
      email: user.email,
      role:user.role,
      accessToken: accessToken,
      expiresIn: expiresIn
    }
    // response 
    res.send({ dataUser });
  });
}

exports.loginUser = (req, res, next) => {
  const userData = {
    email: req.body.email,
    password: req.body.password
  }
  User.findOne({ email: userData.email }, (err, user) => {
    if (err) return res.status(500).send('Server error!');

    if (!user) {
      // email does not exist
      res.status(409).send({ message: 'Los datos ingresados son incorrectos' });
    /*   if(!user){

        return res.status(409).json({
          msg: 'Los datos son incorrectros'
        })
 */
      } else {
      const resultPassword = bcrypt.compareSync(userData.password, user.password);
      if (resultPassword) {
        const expiresIn = 24 * 60 * 60;
        const accessToken = jToken.sign({ id: user.id }, SECRET_KEY, { expiresIn: expiresIn });

        const dataUser = {
          name: user.name,
          email: user.email,
          role:user.role,
          accessToken: accessToken,
          expiresIn: expiresIn
        }
        res.send({ dataUser });
      } else {
        // password wrong
        res.status(409).send({ message: 'Los datos ingresados son incorrectos' });
      }
    }
  }); 
}
