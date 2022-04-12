import users from "../../database";
import * as bcrypt from "bcryptjs";

const updateUserService = async ({ uuid, name, email, password }) => {

    const hashPassword = await bcrypt.hash(password, 8);

    const updateUser = {
        name,
        email,
        password: hashPassword,
        updatedOn: new Date().toUTCString(),
    };

    let findUser = users.findIndex((user) => user.uuid === uuid);

    if (findUser === -1) {
        throw new Error("User not found");
    }

    users[findUser] = { ...users[findUser], ... updateUser };

    return updateUser;

}

export default updateUserService;