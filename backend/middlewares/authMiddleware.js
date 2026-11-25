let jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  let token = req.headers.authorization?.split(" ")[1];

  if (!token) return res.status(401).json({ msg: "No autorizado" });


  try {
    let decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { id: decoded.id };

    next();
  } catch {
    return res.status(401).json({ msg: "Token inválido" });
  }
};
