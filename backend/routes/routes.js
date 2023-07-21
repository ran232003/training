const {
  validateSchema,
  addFavorite,
  getFavorites,
  removeFavorites,
} = require("../controllers/controllers");

let express = require("express");
const router = express.Router();

router.post("/validateSchema", validateSchema);
router.post("/addFavorite", addFavorite);
router.get("/getFavorites", getFavorites);
router.delete("/removeFavorite/:key", removeFavorites);
module.exports = router;
