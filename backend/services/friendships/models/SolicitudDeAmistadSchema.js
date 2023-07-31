import mongoose from "mongoose";

const SolicitudDeAmistadSchema = new mongoose.Schema({
    IDRemitente: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Usuario",
        required: true,
        trim: true,
    },
    IDDestinatario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Usuario",
        required: true,
        trim: true,
    },
    EstadoDeSolicitud: {
        type: String,
        required: true,
        trim: true,
    },
});
const SolicitudDeAmistad = mongoose.model("SolicitudDeAmistad", SolicitudDeAmistadSchema);
export default SolicitudDeAmistad;
