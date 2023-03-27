const UserService = require("../services/user.services");

exports.register = async (req, res, next) => {
  try {
    const {
      email,
      password,
      name,
      confirmpass,
      dateform,
      city,
      state,
      parentname,
    } = req.body;
    const sucessRes = await UserService.registerUser(
      email,
      password,
      name,
      confirmpass,
      dateform,
      city,
      state,
      parentname
    );
    res.json({ status: true, sucess: "User created sucessfully" });
  } catch (error) {
    throw error;
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await UserService.checkUser(email);
    if (!user) {
      throw new Error("User dont exist");
    }
    const isMatch = await user.comparePassword(password);
    if (isMatch == false) {
      throw new Error("Password Invalid");
    }
    let tokenData = { _id: user._id, email: user.email };

    const token = await UserService.generateToken(tokenData, "secretKey", "1h");
    res.status(200).json({ status: true, token });
  } catch (error) {
    throw error;
  }
};
