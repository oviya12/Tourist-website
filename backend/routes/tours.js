import express from 'express';
import {createTour,
deleteTour,
getAllTour,
getSingleTour,
getTourBySearch,
getFeaturedTour,
updateTour,
getTourCount} from "./../controllers/tourController.js";
import {verifyAdmin} from "../utils/verifyToken.js"
const router = express.Router();

//create new tour
router.post("/",verifyAdmin,createTour);
//update tour
router.put("/:id",verifyAdmin,updateTour);
//delete new tour
router.delete("/:id",verifyAdmin,deleteTour);
//get single tour
router.get("/:id",getSingleTour);
//getall tour
router.get("/",getAllTour);
//gettour by search
router.get("/search/getTourBySearch",getTourBySearch);
router.get("/search/getFeaturedTours",getFeaturedTour);
router.get("/search/getTourCount",getTourCount);
export default router;