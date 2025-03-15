const express = require("express");
const router = express.Router();
const subscriptionController = require("../controllers/subscriptionController");

router.get("/", subscriptionController.getAllSubscriptionsController);
router.post("/subscribe", subscriptionController.subscribeEmail);
router.get("/getSubscription", subscriptionController.getSubscription);
router.delete("/deleteSubscription", subscriptionController.deleteSubscription);

module.exports = router;
