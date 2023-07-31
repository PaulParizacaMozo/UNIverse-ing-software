import { Router } from "express";
import {
    sendFriendRequest,
    acceptFriendRequest,
    rejectFriendRequest,
} from "../controllers/friendships.controllers.js";

const router = Router();

router.get("/friendships", sendFriendRequest);

router.get("/friendships/:id", acceptFriendRequest);

router.get("/friendships/:id", rejectFriendRequest);

export default router;
