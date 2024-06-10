import express from "express";
import dotenv from "dotenv";
import paymentRoutes from "./src/routes/paymentRoutes.js";
import setupSwagger from "./src/swagger.js";

dotenv.config();

const app = express();

app.use(express.json());

setupSwagger(app);

app.use("/api", paymentRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
