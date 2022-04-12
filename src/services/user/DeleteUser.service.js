import users from "../../database";

const deleteUserService = ({ uuid }) => {

    let user = users.findIndex((user) => user.uuid === uuid);

    if (user >= 0) {
        users.splice(user, 1);
    } else {
        throw new Error("User not found");
    }
}

export default deleteUserService;