const {
  validateSchema,
  addFavorite,
  getFavorites,
  removeFavorites,
  mongoAddingDocs,
  mongoUpateArray,
} = require("../controllers/controllers");

let express = require("express");
const router = express.Router();

router.post("/validateSchema", validateSchema);
router.post("/addFavorite", addFavorite);
router.post("/mongoAddingDocs", mongoAddingDocs);
router.get("/getFavorites", getFavorites);
router.get("/mongoUpateArray", mongoUpateArray);

router.delete("/removeFavorite/:key", removeFavorites);
module.exports = router;
