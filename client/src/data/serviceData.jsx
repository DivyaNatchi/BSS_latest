import branding from "../assets/img/services/brand_identiy.png";
import websites from "../assets/img/services/websites.png";
import webApp from "../assets/img/services/web_app.png";
import mobileApp from "../assets/img/services/mobile_app.png";
import gameApp from "../assets/img/services/game_app.png";
import dataAnalytics from "../assets/img/services/data_analytics.png";
import erp from "../assets/img/services/erp.png";
import IoT from "../assets/img/services/IoT.png";

/**
 * Services data
 * @type {Array<Object>}
 * @property {string} icon - The icon class for the service.
 * @property {string} title - The title of the service.
 * @property {string} description - The description of the service.
 * @property {number} delay - The delay for the service animation.
 */
const servicesData = [
  {
    icon: branding,
    title: "The Beginning: Crafting Your Brand's Identity",
    description:
      "Your brand is the face of your story, the first impression that speaks volumes. We start by helping you find your voice. Imagine a logo so striking that people remember it with a smile, messaging so powerful it stays in their minds, and a consistent brand presence across every platform.\nThrough thoughtful brand positioning, creative storytelling, and meticulous design, we make your brand a hero in its market. Because we know your story deserves nothing less than the spotlight.",
    delay: 100,
  },
  {
    icon: websites,
    title: "The Next Step: Building Your Digital Home",
    description:
      "What is a great story without a stage to perform on? That's where we come in. Your website becomes the stage, the digital home where your customers come to connect with you.\nWe craft websites that are not just visually stunning but also smart. Custom designs showcase your personality, responsive layouts ensure your customers have a smooth experience on any device, and our SEO strategies make sure your digital home is easy to find.\nWith every click, we ensure your audience feels welcome, guided, and inspired to take action.",
    delay: 200,
  },
  {
    icon: webApp,
    title: "Streamlining Your Business: Web Apps That Work for You",
    description:
      "Imagine having tools so powerful, they handle the heavy lifting while you focus on what you do best. That's what our custom web applications deliver solutions designed to streamline your business operations, connect systems, and grow with you.\nFrom automating processes to ensuring your data is secure and manageable, we turn the chaos of running a business into a perfectly choreographed performance.",
    delay: 300,
  },
  {
    icon: mobileApp,
    title: "Reaching Customers Anywhere: Mobile Apps",
    description:
      "In a world on the go, your customers need you at their fingertips. Picture a sleek, intuitive mobile app that captures their attention and keeps them coming back for more.\nWe design and develop apps for iOS and Android that are as engaging as they are functional. Whether it's shopping, booking, or exploring, your customers will love the experience you offer.",
    delay: 400,
  },

  {
    icon: gameApp,
    title: "Turning Ideas into Adventures: Game Development at Its Finest",
    description:
      "Have you ever dreamed of creating a game that keeps players hooked, immersed, and eager for more? We bring those dreams to life.\nWith our custom game development, we combine captivating gameplay, breathtaking visuals, and seamless performance. The result? Games that aren't just played they're remembered.",
    delay: 400,
  },

  {
    icon: dataAnalytics,
    title: "Finding Clarity in Complexity: Analytic Solutions That Empower",
    description:
      "Behind every successful decision lies powerful data. But how do you make sense of it all? We step in to turn your data into stories and strategies.\nImagine seeing your customer trends in crystal clarity, predicting what comes next, and taking bold steps forward with confidence. With our data visualization and predictive analytics, you'll always have the insights you need to stay ahead.",
    delay: 400,
  },

  {
    icon: IoT,
    title: "The Future is Connected: IoT Solutions for Tomorrow",
    description:
      "What if every device in your business could talk to each other, share data, and work together seamlessly? That's the magic of our IoT solutions.\nFrom custom systems to secure device integration, we build ecosystems that optimize operations and deliver real-time insights. The future isn't coming it's already here, and we'll help you embrace it.",
    delay: 400,
  },

  {
    icon: erp,
    title:
      "Running Your Business, Your Way: ERP Solutions That Fit Like a Glove",
    description:
      "Managing a business can feel like juggling a hundred things at once. But what if there was a single system that brought it all together? That's what our ERP solutions do.\nFrom implementation to customization, we create ERP systems tailored to your specific needs. With intuitive interfaces, seamless integration, and hands-on support, we help you focus on what mattersâ€growing your business.",
    delay: 400,
  },
];

export default servicesData;
