import SolicitudDeAmistad from "../models/SolicitudDeAmistadSchema.js";

/**
 * Envia una solicitud de amistad.
 * @function sendFriendRequest
 * @param {Object} req - Objeto de solicitud de Express.
 * @param {Object} res - Objeto de respuesta de Express.
 * @returns {Promise<void>} - No devuelve ningún valor explícito.
 * @throws {Error} - Si ocurre algún error en el servidor.
 */
export const sendFriendRequest = (req, res) => {
    const { idRemitente, idDestinatario } = req.body;
    SolicitudDeAmistad.findOne({
        IdRemitente: idRemitente,
        IdDestinatario: idDestinatario,
    })
        .then(existingRequest => {
            if (existingRequest) {
                return res.status(400).json({ message: "Ya se ha enviado una solicitud de amistad" });
            }

            const newFriendRequest = new SolicitudDeAmistad({
                IdRemitente: idRemitente,
                IdDestinatario: idDestinatario,
                EstadoDeSolicitud: "Pendiente",
            });

            return newFriendRequest.save();
        })
        .then(newFriendRequest => {
            res.status(201).json(newFriendRequest);
        })
        .catch(error => {
            console.log(error.message);
            res.status(500).json({ message: error.message });
        });
};

/**
 * Acepta una solicitud de amistad.
 * @function acceptFriendRequest
 * @param {Object} req - Objeto de solicitud de Express.
 * @param {Object} res - Objeto de respuesta de Express.
 * @returns {Promise<void>} - No devuelve ningún valor explícito.
 * @throws {Error} - Si ocurre algún error en el servidor o si la solicitud de amistad no se encuentra o no está pendiente.
 */
export const acceptFriendRequest = (req, res) => {
    const { id } = req.params;
    SolicitudDeAmistad.findById(id)
        .then(friendRequest => {
            if (!friendRequest || friendRequest.EstadoDeSolicitud !== "Pendiente") {
                return res.status(404).json({ message: "Solicitud de amistad no encontrada o no está pendiente" });
            }
            friendRequest.EstadoDeSolicitud = "Aceptada";
            return friendRequest.save();
        })
        .then(() => {
            res.json({ message: "Solicitud de amistad aceptada exitosamente" });
        })
        .catch(error => {
            console.log(error.message);
            res.status(500).json({ message: error.message });
        });
};

/**
 * Rechaza una solicitud de amistad.
 * @function rejectFriendRequest
 * @param {Object} req - Objeto de solicitud de Express.
 * @param {Object} res - Objeto de respuesta de Express.
 * @returns {Promise<void>} - No devuelve ningún valor explícito.
 * @throws {Error} - Si ocurre algún error en el servidor o si la solicitud de amistad no se encuentra o no está pendiente.
 */
export const rejectFriendRequest = (req, res) => {
    const { id } = req.params;
    SolicitudDeAmistad.findById(id)
        .then(friendRequest => {
            if (!friendRequest || friendRequest.EstadoDeSolicitud !== "Pendiente") {
                return res.status(404).json({ message: "Solicitud de amistad no encontrada o no está pendiente" });
            }
            friendRequest.EstadoDeSolicitud = "Rechazada";
            return friendRequest.save();
        })
        .then(() => {
            res.json({ message: "Solicitud de amistad rechazada exitosamente" });
        })
        .catch(error => {
            console.log(error.message);
            res.status(500).json({ message: error.message });
        });
};
