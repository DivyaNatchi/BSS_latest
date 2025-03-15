import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/styles/components/teamSection.css";
import teamMembers from "../data/teamMembersData";

/**
 * TeamMember component displays individual team member information.
 *
 * @component
 * @param {Object} props - Component props
 * @param {Object} props.member - Team member data
 * @param {number} props.index - Index of the team member in the list
 * @example
 * return (
 *   <TeamMember member={member} index={index} />
 * )
 */
const TeamMember = ({ member, index }) => (
  <div
    className="col-lg-6"
    data-aos="fade-up"
    data-aos-delay={100 * (index + 1)}
  >
    <div className="team-member d-flex align-items-start">
      <div className="pic">
        <img src={member.image} className="img-fluid" alt={member.name} />
      </div>
      <div className="member-info">
        <h4>{member.name}</h4>
        <span>{member.position}</span>
        <div className="social">
          <a
            href={member.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
);

/**
 * TeamSection component displays a section with team members.
 *
 * @component
 * @example
 * return (
 *   <TeamSection />
 * )
 */
export default function TeamSection() {
  return (
    <section id="team" className="team section light-background">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Our Team</h2>
      </div>

      <div className="container">
        <div className="row gy-4">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
