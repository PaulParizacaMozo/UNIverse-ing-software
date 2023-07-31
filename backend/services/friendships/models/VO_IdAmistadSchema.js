import mongoose from "mongoose";

const IdAmistadSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    trim: true,
  },
});

const IdAmistad = mongoose.model("IdAmistad", IdAmistadSchema);

export default IdAmistad;
