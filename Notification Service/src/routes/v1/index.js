const express = require("express");
const router = express.Router();
const { InfoController } = require("../../controllers");

/*
router.get("/info", (req, res) => {
  // Link : http://localhost:3000/api/v1/info
  return res.json({ ms: "OK" });
});
*/
// Replace the above code using this current clean code

router.get("/info", InfoController.info);

module.exports = router;
