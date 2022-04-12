const verifyUserIsAdm = (request, response, next) => {

    const { isAdm, uuid } = request.user;
    const id = request.params.uuid;

    if (uuid === id || isAdm) {
        next();
    }

    return response.status(400).json({
        status: "error",
        message: "You are not admin"
    });
    
}

export default verifyUserIsAdm;