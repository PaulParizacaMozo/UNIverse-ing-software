import mongoose from "mongoose";

const AmistadSchema = new mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.FriendId,
        required: true,
        trim: true,
    },
    usario1: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Usuario",
        required: true,
        trim: true,
    },
    usuario2: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Usuario",
        required: true,
        trim: true,
    },

});
const Amistad = mongoose.model("Amistad", AmistadSchema);
export default Amistad;
