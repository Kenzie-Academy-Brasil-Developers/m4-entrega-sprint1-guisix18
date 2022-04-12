import express from "express";

import userRoutes from "./routers/users.routes";
import sessionRoutes from "./routers/sessions.routes";

const app = express();

app.use(express.json());
app.use("/users", userRoutes);
app.use(sessionRoutes);

app.listen(3000, () => {
    console.log("Server Started");
});