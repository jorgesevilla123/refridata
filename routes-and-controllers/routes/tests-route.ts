import { Router } from "express";
import { testControllers } from "../controllers/tests"


const router = Router();
const controller = new testControllers();




router.route('/query').get(controller.searchProducts2)






export default router