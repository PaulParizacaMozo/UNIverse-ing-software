import mongoose from "mongoose";

const FechaSchema = new mongoose.Schema({
  valueFecha: {
    type: DateTime,
    required: true,
    trim: true,
  },
});

const Fecha = mongoose.model("Fecha", FechaSchema);

export default Fecha;
