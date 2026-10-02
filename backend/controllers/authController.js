let User = require("../models/User");
let bcrypt = require("bcryptjs");
let jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  try {
    let { username, email, password } = req.body;

    let existe = await User.findOne({ email });
    if (existe) return res.status(400).json({ msg: "El correo ya está registrado" });

    let hashed = await bcrypt.hash(password, 10);

    let user = await User.create({
      username,
      email,
      password: hashed
    });

    res.json({ msg: "Usuario creado", user });
  } catch (e) {
    res.status(500).json({ msg: "Error interno" });
  }
};

exports.login = async (req, res) => {
  try {
    let { email, password } = req.body;

    let user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: "Credenciales incorrectas" });

    let ok = await bcrypt.compare(password, user.password);
    if (!ok) return res.status(400).json({ msg: "Credenciales incorrectas" });

    let token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d"
    });

    res.json({ token });
  } catch (e) {
    res.status(500).json({ msg: "Error interno" });
  }
};
