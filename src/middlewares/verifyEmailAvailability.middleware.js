import users from "../database";

const verifyEmailAvailability = (request, response, next) => {
    
    const { email } = request.body;

    const user = users.find((user) => user.email === email);

    if (user) {
        return response.status(401).json({
            status: "error",
            message: "Email is already being used"
        });
    }

    next();

}

export default verifyEmailAvailability;