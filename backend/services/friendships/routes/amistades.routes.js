import { Router } from "express";
import {
    enviarSolicitudDeAmistad,
    aceptarSolicitudDeAmistad,
    rechazarSolicitudDeAmistad,
} from "../controllers/amistades.controllers.js";

const router = Router();

router.get("/amistades", enviarSolicitudDeAmistad);

router.get("/amistades/:id", aceptarSolicitudDeAmistad);

router.get("/amistades/:id", rechazarSolicitudDeAmistad);

export default router;
