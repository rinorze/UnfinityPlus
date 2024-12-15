import { useState } from "react";
import "../styles/Team.scss";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight
} from "react-icons/md";
import img1 from "../assets/team1.jpg";
import img2 from "../assets/team2.jpg";
import img3 from "../assets/team3.jpg";

const teamMembers = [
  {
    id: 1,
    name: "Malcolm Marshall",
    role: "Director of the board",
    image: img1
  },
  {
    id: 2,
    name: "Michelle Conroy",
    role: "Graphic Designer",
    image: img2
  },
  {
    id: 3,
    name: "Malcolm Marshall",
    role: "Web Developer",
    image: img3
  }
];

function Team() {
  const [members, setMembers] = useState(teamMembers);

  const handleNext = () => {
    setMembers((prevMembers) => {
      const updatedMembers = [...prevMembers];
      const firstMember = updatedMembers.shift();
      updatedMembers.push(firstMember);
      return updatedMembers;
    });
  };

  const handlePrev = () => {
    setMembers((prevMembers) => {
      const updatedMembers = [...prevMembers];
      const lastMember = updatedMembers.pop();
      updatedMembers.unshift(lastMember);
      return updatedMembers;
    });
  };

  return (
    <section className="team-section">
      <div className="team-header">
        <h2>Our Team</h2>
        <p>
          We love what we do and we do it with passion. We value the
          experimentation, the reformation of the message, and the smart
          incentives.
        </p>
      </div>

      <div className="team-carousel">
        <button className="nav-button prev" onClick={handlePrev}>
          <GoArrowLeft />
        </button>
        <div className="team-members">
          {members.map((member) => (
            <div key={member.id} className="team-member">
              <div className="member-image">
                <img src={member.image} alt={member.name} />
              </div>
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
        <button className="nav-button next" onClick={handleNext}>
          <GoArrowRight />
        </button>
      </div>

      <div className="navbuttons">
        <button className="nav-button1 prev" onClick={handlePrev}>
          <MdOutlineKeyboardArrowLeft size={20} />
        </button>
        <button className="nav-button1 next" onClick={handleNext}>
          <MdOutlineKeyboardArrowRight size={20} />
        </button>
      </div>

      <div className="orange"></div>
    </section>
  );
}

export default Team;
