import users from "../../database";
import {v4 as uuid} from "uuid";
import * as bcrypt from "bcryptjs";

const createUserService = async ({ name, email, password, isAdm = false }) => {

    const hashPassword = await bcrypt.hash(password, 8);

    const user = {
        name,
        email,
        password: hashPassword,
        isAdm,
        createdOn: new Date().toUTCString(),
        updatedOn: new Date().toUTCString(),
        uuid: uuid()
    };

    users.push(user);

    return user;

}

export default createUserService;