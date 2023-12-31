import express from 'express'
import ListingsController from './listings.controller.js'
import ReviewsController from './reviews.controller.js'
const router = express.Router()
router.route('/').get(ListingsController.apiGetListings)
router
.route("/review")
.post(ReviewsController.apiPostReview)
.put(ReviewsController.apiUpdateReview)
.delete(ReviewsController.apiDeleteReview)
router.route("/id/:id").get(ListingsController.appiGetListingById)
router.route("/ratings").get(ListingsController.apiGetReviewScorebyIs)
export default router;