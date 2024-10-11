import { Router } from "express";
import { explorerController } from "../../controllers";


const router = Router();

const { searchAll } = explorerController;

router.post("/all", searchAll);

export default router;
