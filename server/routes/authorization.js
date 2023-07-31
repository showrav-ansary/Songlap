import express from 'express';
import {login} from "../controllers/authorization";

const router = express.Router();

 router.post("/login", login);

 export default router;