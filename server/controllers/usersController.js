const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

async function signup(req, res) {
  try {
    // Get the email and password of req body
    const { email, password } = req.body;

    // Hast password
    const hashedPassword = bcrypt.hashSync(password, 8);

    // Create a user with the data
    await User.create({ email, password: hashedPassword });

    // respond
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
}

async function login(req, res) {
  const { email, password } = req.body;

  const user = await User.findOne({ email: email });
  if (!user) return res.sendStatus(401);

  const passwordMatch = bcrypt.compareSync(password, user.password);
  if (!passwordMatch) return res.sendStatus(401);

  //create a jwt token
  const exp = Date.now() + 1000 * 60 * 60 * 24 * 30;
  const token = jwt.sign({ sub: user._id, exp }, process.env.SECRET);

  // Set the cookie
  res.cookie("Authorization", token, {
    expires: new Date(exp),
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE__ENV === "production",
  });

  //sent it
  res.sendStatus(200);
}

function logout(req, res) {}

module.exports = {
  signup,
  login,
  logout,
};
