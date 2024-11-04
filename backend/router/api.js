const router = require("express").Router();
const controlApi = require("../control/userControl");
const adminProApi = require("../control/adminConrol");

const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../public/uploads"));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

const upload = multer({
  storage: storage,
  limits: { fieldSize: 1024 * 1024 * 5 }
});

router.get("/", controlApi.homeControl);
router.post("/signup", controlApi.signupControl);
router.get("/returndataforlogin", controlApi.returndatalogin);
router.post("/loginuserdata", controlApi.loginUserDataControl);
router.post(
  "/addproductdata",
  upload.single("img"),
  adminProApi.addPriductsControl
);
router.get("/productdata", adminProApi.productDataControl);
router.get("/updateid/:uid", adminProApi.updateIdControl);
router.post("/updateddata/:nid", adminProApi.updatedValueControl);
router.delete("/deletedata/:did", adminProApi.deleteDataControl);
router.get("/productpage", controlApi.productpageControl);
router.post("/querydata", controlApi.queryDataControl);
router.get("/userquerys", adminProApi.userQueryControl);
router.get("/replyuser/:rid", adminProApi.replyUserControl);
router.post("/queryreplydata/:cid", adminProApi.queryReplyDataControl);
router.delete("/querydelete/:did", adminProApi.queryDeleteControl);
router.get("/statusdetails/:sid", adminProApi.statusdetailsControl)

module.exports = router;
