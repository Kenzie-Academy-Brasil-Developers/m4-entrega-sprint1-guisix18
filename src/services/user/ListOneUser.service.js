import users from "../../database";

const listOneUser = ({ uuid }) => {

    const user = users.find((user) => user.uuid === uuid);

    if (!user) {
        throw new Error("User not found");
    }

    return user;
}

export default listOneUser;