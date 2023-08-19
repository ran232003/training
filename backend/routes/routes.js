const {
  validateSchema,
  addFavorite,
  getFavorites,
  removeFavorites,
  mongoAddingDocs,
  mongoUpateArray,
  uploadFile,
  getFilesNames,
  downloadFile,
} = require("../controllers/controllers");

let express = require("express");
const {
  signup,
  login,
  getUser,
  signout,
  forgotPassword,
  resetPassword,
} = require("../controllers/userControllers");
const {
  userValidateSchema,
  verifyToken,
  forgotValidationSchema,
} = require("../middlewere/authMiddle");
const upload = require("../middlewere/uploadFile");
const router = express.Router();

router.post("/validateSchema", validateSchema);
router.post("/addFavorite", addFavorite);
router.post("/mongoAddingDocs", mongoAddingDocs);
router.get("/getFavorites", getFavorites);
router.get("/mongoUpateArray", mongoUpateArray);

router.get("/getUser", verifyToken, getUser);

router.post("/signup", userValidateSchema, signup);
router.post("/login", userValidateSchema, login);
router.post("/forgotPassword", forgotValidationSchema, forgotPassword);
router.delete("/signout", signout);
router.post("/resetPassword", resetPassword);
router.post("/uploadFile", upload.array("files", 10), uploadFile);
router.get("/getFilesNames", getFilesNames);
router.get("/downloadFile/:fileName", downloadFile);
router.delete("/removeFavorite/:key", removeFavorites);
module.exports = router;
