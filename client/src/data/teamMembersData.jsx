// Import images
import madhu from "../assets/img/team/madhu.jpg";
import hema from "../assets/img/team/hema.jpg";
import karthikeyan from "../assets/img/team/karthikeyan.jpg";
import divya from "../assets/img/team/divya2.jpg";

/**
 * Team member data
 * @type {Array<Object>}
 * @property {string} name - The name of the team member.
 * @property {string} position - The position or title of the team member.
 * @property {string} image - The image URL of the team member.
 * @property {Object} socialLinks - The social media links of the team member.
 * @property {string} socialLinks.linkedin - The LinkedIn profile URL of the team member.
 */
const teamMembers = [
  {
    name: "Madhu Balasubramanian",
    position: "Founder & Director",
    image: madhu,
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/madhu-balasubramanian-16301335/",
    },
  },
  {
    name: "Hema Shunmugasundaram",
    position: "Co-founder & Director",
    image: hema,
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/hema-shunmugasundaram-58461b3/",
    },
  },
  {
    name: "Karthikeyan Natesan",
    position: "Director - Product Strategy and Development",
    image: karthikeyan,
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/karthikeyannatesan05feb1982/",
    },
  },
  {
    name: "Divyalaskhmi Natesan",
    position: "Consultant Software Engineer",
    image: divya,
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/divyalakshmi-natesan/",
    },
  },
];

export default teamMembers;
