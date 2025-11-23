const router = require("express").Router();
const auth = require("../middlewares/authMiddleware");

const {
  getReviews,
  getReview,
  createReview,
  updateReview,
  deleteReview
} = require("../controllers/reviewController");

router.get("/", getReviews); 
router.get("/:id", getReview);

router.post("/", auth, createReview);
router.put("/:id", auth, updateReview);
router.delete("/:id", auth, deleteReview);

module.exports = router;
