const Subscription = require("../models/subscription");
const {
  createEmailBody,
  sendSubscriptionEmailService,
} = require("./emailService");

// Service function to get all subscriped emails
const getAllSubscriptions = async () => {
  try {
    // Fetch all subscriptions from the database
    const subscriptions = await Subscription.findAll();
    return subscriptions; // Return the result
  } catch (error) {
    throw new Error(`Failed to get all subscriptions: ${error.message}`);
  }
};

module.exports = {
  getAllSubscriptions,
};

// Service function to handle email subscription
const subscribeEmail = async (email) => {
  try {
    // Check if the email already exists in the subscription list
    const existingSubscription = await getSubscriptionByEmail(email);

    if (existingSubscription) {
      return { message: "This email is already subscribed." };
    }

    // Create a new subscription if email is not already subscribed
    const newSubscription = await Subscription.create({ email });

    // Email content for the subscription notification
    const messageContent = `
      Dear Team,

      We have received a new subscription to our newsletter. Please find the subscriber's details below:

      Subscriber's Email Address: ${email}

      Kindly ensure that the subscriber is added to our mailing list and that they receive the latest updates and newsletters.

      Thank you for your prompt attention to this matter.

      Best regards,
      Team - Web Admin
      Byte Size IT Solution Limited
    `;

    const emailBody = createEmailBody(
      "New Newsletter Subscription",
      messageContent
    );

    // Send the subscription notification email
    await sendSubscriptionEmailService(emailBody);

    return { message: "Subscription successful", data: newSubscription };
  } catch (error) {
    throw new Error(`Failed to subscribe email: ${error.message}`);
  }
};

// Service function to get subscription by email
const getSubscriptionByEmail = async (email) => {
  try {
    const subscription = await Subscription.findOne({ where: { email } });
    return subscription; // Return null if not found
  } catch (error) {
    throw new Error(`Failed to get subscription by email: ${error.message}`);
  }
};

// Service function to delete subscription by email
const deleteSubscriptionByEmail = async (email) => {
  try {
    const subscription = await Subscription.findOne({ where: { email } });
    if (!subscription) {
      throw new Error("No subscription found for this email.");
    }

    // Delete the subscription
    await subscription.destroy();
    return { message: "Subscription deleted successfully." };
  } catch (error) {
    throw new Error(`Failed to delete subscription: ${error.message}`);
  }
};

module.exports = {
  getAllSubscriptions,
  subscribeEmail,
  getSubscriptionByEmail,
  deleteSubscriptionByEmail,
};
