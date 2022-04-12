import createUserService from "../../services/user/CreateUser.service";
import deleteUserService from "../../services/user/DeleteUser.service";
import listOneUser from "../../services/user/ListOneUser.service";
import listUserService from "../../services/user/ListUsers.service";
import updateUserService from "../../services/user/UpdateUser.service";

export default class UserController {
  async store(request, response) {
    const { name, email, password, isAdm } = request.body;

    const newUser = await createUserService({ name, email, password, isAdm });

    return response.status(201).json(newUser);
  }

  index(request, response) {
    const users = listUserService();

    return response.json(users);
  }

  show(request, response) {
    const { uuid } = request.user;

    try {
      const oneUser = listOneUser({ uuid });

      return response.json(oneUser);
    } catch (err) {
      return response.status(400).json({
        status: "error",
        message: err.message,
      });
    }
  }

  async update(request, response) {
    const { uuid } = request.params;
    const { name, email, password } = request.body;

    try {
      const updatedUser = await updateUserService({
        uuid,
        name,
        email,
        password,
      });

      return response.json(updatedUser);
    } catch (err) {
      return response.status(400).json({
        status: "error",
        message: err.message,
      });
    }
  }

  delete(request, response) {
    const { uuid } = request.params;

    try {
      deleteUserService({ uuid });

      return response.status(204).json({
        message: "User deleted with success",
      });
      
    } catch (err) {
      return response.status(400).json({
        status: "error",
        message: err.message,
      });
    }
  }
}