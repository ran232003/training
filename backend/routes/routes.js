const { validateSchema } = require("../controllers/controllers");

let express = require("express");
const router = express.Router();

router.post("/validateSchema", validateSchema);

module.exports = router;
