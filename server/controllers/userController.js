const bcrypt = require("bcryptjs");
const { users } = require("../models/relation");
const jwt = require("jsonwebtoken");
const generateJwt = (currentUserId, currentUserRole, currentUserDepartment) =>
  jwt.sign(
    { currentUserId, currentUserRole, currentUserDepartment },
    process.env.SECRET_JWT_KEY,
    { expiresIn: "24h" }
  );

class UserController {
  async getUsers(req, res) {
    const { ID } = req.query;
    const allUsers = await users.findAll({
      where: { departmentId: ID },
    });
    res.json(allUsers);
  }
  async createUser(req, res) {
    let { surname, name, patronymic, role, login, password, email } = req.body;
    const hashPassword = bcrypt.hashSync(password, 3);
    let newUser = await users.create({
      surname,
      name,
      patronymic,
      role,
      login,
      password: hashPassword,
      email,
      photo: !req.file ? "" : `/${req.file.path.replaceAll("\\", "/")}`,
      departmentId: 1,
    });
    return res.json(newUser);
  }
  async updateUser(req, res) {
    let { surname, name, patronymic, role, login, email, id } = req.body;
    if (req.file) {
      await users.update(
        {
          surname: surname,
          name: name,
          patronymic: patronymic,
          login: login,
          email: email,
          role: role,
          photo: `/${req.file.path.replaceAll("\\", "/")}`,
        },
        {
          where: {
            userId: id,
          },
        }
      );
    } else {
      await users.update(
        {
          surname: surname,
          name: name,
          patronymic: patronymic,
          login: login,
          email: email,
          role: role,
        },
        {
          where: {
            userId: id,
          },
        }
      );
    }
    const updatingData = await users.findAll({ raw: true });
    return res.json(updatingData);
  }
  async loginUser(req, res) {
    const { login, password } = req.body;
    const authorizedUser = await users.findAll({
      raw: true,
      attributes: ["userId", "role", "departmentId"],
      where: {
        login: login,
        password: password,
      },
    });
    //let comparePassword = bcrypt.compareSync(password, authorizedUser.password);
    //if (!comparePassword) {
    //return res.json({ message: "Такого пользователя не существует" });
    //}
    console.log(authorizedUser[0].userId);
    const token = generateJwt(
      authorizedUser[0].userId,
      authorizedUser[0].role,
      authorizedUser[0].departmentId
    );
    return res.json({ token });
  }
  async deleteUser(req, res) {
    const { ID } = req.body;
    await users.destroy({
      where: {
        userId: ID,
      },
    });
    const updatingData = await users.findAll({ raw: true });
    res.json(updatingData);
  }
}

module.exports = new UserController();
