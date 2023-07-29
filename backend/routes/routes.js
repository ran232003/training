const {
  validateSchema,
  addFavorite,
  getFavorites,
  removeFavorites,
  mongoAddingDocs,
  mongoUpateArray,
} = require("../controllers/controllers");

let express = require("express");
const { signup, login, getUser } = require("../controllers/userControllers");
const { userValidateSchema, verifyToken } = require("../middlewere/authMiddle");
const router = express.Router();

router.post("/validateSchema", validateSchema);
router.post("/addFavorite", addFavorite);
router.post("/mongoAddingDocs", mongoAddingDocs);
router.get("/getFavorites", getFavorites);
router.get("/mongoUpateArray", mongoUpateArray);

router.get("/getUser", verifyToken, getUser);
router.post("/signup", userValidateSchema, signup);
router.post("/login", userValidateSchema, login);

router.delete("/removeFavorite/:key", removeFavorites);
module.exports = router;
