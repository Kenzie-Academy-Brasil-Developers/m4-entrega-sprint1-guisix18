import authUserService from "../../services/sessions/authUser.service";

export default class SessionController {
    async store(request, response) {
        const { email, password } = request.body;

        try {
            const user = await authUserService({ email, password });

            return response.json(user);
        } catch (err) {
            return response.status(400).json({
                status: "error",
                message: err.message,
            });
        }
    }
}