import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://Antiguena:YoKCumWp2wNnA91W@sistemalavanderia.5ra9cy7.mongodb.net/db-laundry-system-2?retryWrites=true&w=majority&appName=SistemaLavanderia",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Conexión exitosa a MongoDB");
  } catch (error) {
    console.error("Error al conectar a MongoDB:", error);
    process.exit(1); // Terminar el proceso con error
  }
};

export default mongoose;
