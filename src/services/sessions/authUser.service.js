import jwt from "jsonwebtoken";
import * as bcrypt from "bcryptjs";

import users from "../../database";

const authUserService = async ({ email, password }) => {

    const user = users.find((user) => user.email === email);

    if (!user) {
        throw new Error("Email or Password is not valid");
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
        throw new Error("Email or Password is not valid");
    }

    const token = jwt.sign({ email: email, uuid: user.uuid, isAdm: user.isAdm }, "SECRET_KEY", { expiresIn: "24h", subject: user.email });

    return { token };

}

export default authUserService;