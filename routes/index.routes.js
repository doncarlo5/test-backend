const router = require("express").Router();

// access to this toute : api/discussions

router.use("/discussions", require("./discussion.routes"));

module.exports = router;
