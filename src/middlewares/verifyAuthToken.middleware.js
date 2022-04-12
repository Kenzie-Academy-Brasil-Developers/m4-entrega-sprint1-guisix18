import jwt from "jsonwebtoken";

const verifyAuthToken = (request, response, next) => {
    let token = request.headers.authorization;

    if (!token) {
        return response.status(401).json({
            status: "error",
            message: "Missing Token/Authorization Header"
        });
    }

    token = token.split(" ")[1];

    jwt.verify(token, "SECRET_KEY", (error, decoded) => {
        if (error) {
            return response.status(401).json({
                status: "error",
                message: "Invalid Token"
            });
        }

        const { isAdm, uuid } = decoded;

        request.user = {
            isAdm,
            uuid
        };

        next();

    })

}

export default verifyAuthToken;