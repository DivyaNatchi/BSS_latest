const subscriptionService = require("../services/subscriptionService");

const getAllSubscriptionsController = async (req, res) => {
  try {
    // Call the service function to get all subscriptions
    const subscriptions = await subscriptionService.getAllSubscriptions();

    // If no subscriptions exist, send a message indicating so
    if (subscriptions.length === 0) {
      return res.status(200).json({ message: "No subscriptions found." });
    }

    // Otherwise, return the subscriptions
    return res.status(200).json({
      message: "All subscriptions fetched successfully.",
      subscriptions: subscriptions,
    });
  } catch (error) {
    console.error("Error in getAllSubscriptionsController:", error);
    return res.status(500).json({ message: error.message });
  }
};

const subscribeEmail = async (req, res) => {
  try {
    const { email } = req.body;
    const response = await subscriptionService.subscribeEmail(email);

    // Return response based on the message
    if (response.message === "This email is already subscribed.") {
      res.status(200).json({ message: response.message });
    } else {
      res.status(201).json({ message: response.message, data: response.data });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getSubscription = async (req, res) => {
  try {
    const { email } = req.body;
    const subscription = await subscriptionService.getSubscriptionByEmail(
      email
    );
    if (subscription) {
      res.status(200).json({ data: subscription });
    } else {
      res
        .status(404)
        .json({ message: "No subscription found for this email." });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteSubscription = async (req, res) => {
  try {
    const { email } = req.body;
    const result = await subscriptionService.deleteSubscriptionByEmail(email);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getAllSubscriptionsController,
  subscribeEmail,
  getSubscription,
  deleteSubscription,
};
