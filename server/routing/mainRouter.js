const Router = require("express");
const router = new Router();
const userRouter = require("./userRouter");

router.use("/adminpanel", userRouter);

module.exports = router;
