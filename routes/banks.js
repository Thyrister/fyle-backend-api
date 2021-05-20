import express from "express";
const router = express.Router();

router.use(( req, res, next) => {
  console.log("Inside /api/banks");
  next();
});

router.get("/:id", (req, res) => {
  res.json({ bank: "" });
});

export default router;